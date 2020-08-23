const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
    timestamp: {
        type: String,
        required: true
    },
    UUIDV4: {
        type: String,
        ref: "Category",
        required: true
    },
    type: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("logs", logsSchema);
