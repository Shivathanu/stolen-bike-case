const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        trim: true,
        required: true
    },
    token: {
        default: '9b2c1689-7ef5-4b5b-8068-c9f80dc41cc5',
        type: String,
        trim: true,
        required: true,
    },
    permissions: {
        type: [String],
        required: true,
        default: []
    },
    createdby: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['USER', 'ADMIN']
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
