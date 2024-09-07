const Session = require('../models/Session');
const User = require('../models/User');

exports.createSession = async (req, res) => {
    const { start, end, duration, attendees } = req.body;
    try {
        let session = new Session({ start, end, duration, attendees });
        await session.save();
        res.json(session);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.json(sessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUserSessions = async (req, res) => {
    const { email } = req.params;
    try {
        const sessions = await Session.find({ 'attendees.email': email });
        res.json(sessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
