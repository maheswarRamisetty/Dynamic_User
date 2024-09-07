const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    start: Date,
    end: Date,
    duration: Number,
    attendees: [{
        name: String,
        email: String
    }]
});

module.exports = mongoose.model('Session', SessionSchema);
