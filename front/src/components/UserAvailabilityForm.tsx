import React, { useState } from 'react';
import axios from 'axios';

const UserAvailabilityForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [duration, setDuration] = useState(30);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:5000/api/users/availability', {
                email,
                availability: { start, end, duration }
            });
            alert('Availability updated');
        } catch (error) {
            console.error(error);
            alert('Error updating availability');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
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
            <button type="submit">Update Availability</button>
        </form>
    );
};

export default UserAvailabilityForm;
