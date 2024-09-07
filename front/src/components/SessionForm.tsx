import React, { useState } from 'react';
import axios from 'axios';

const SessionForm: React.FC = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [duration, setDuration] = useState(30);
    const [attendees, setAttendees] = useState([{ name: '', email: '' }]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/sessions', {
                start,
                end,
                duration,
                attendees,
            });
            alert('Session scheduled');
        } catch (error) {
            console.error(error);
            alert('Error scheduling session');
        }
    };

    const handleAttendeeChange = (index: number, key: 'name' | 'email', value: string) => {
        const newAttendees = [...attendees];
        newAttendees[index][key] = value;
        setAttendees(newAttendees);
    };
    
    const addAttendee = () => {
        setAttendees([...attendees, { name: '', email: '' }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="datetime-local"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                required
            />
            {attendees.map((attendee, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Attendee Name"
                        value={attendee.name}
                        onChange={(e) => handleAttendeeChange(index, 'name', e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Attendee Email"
                        value={attendee.email}
                        onChange={(e) => handleAttendeeChange(index, 'email', e.target.value)}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addAttendee}>Add Attendee</button>
            <button type="submit">Schedule Session</button>
        </form>
    );
};

export default SessionForm;
