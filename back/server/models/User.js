const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    start: Date,
    end: Date,
    duration: Number,
});

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    availability: [AvailabilitySchema],
});

module.exports = mongoose.model('User', UserSchema);
