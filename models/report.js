const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({ 
    reportid: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: [String],
        required: true,
        enum: ['OPEN', 'RESOLVED', 'PENDING'],
        default: 'OPEN'
    },
    assignedto: {
        type: String,
        required: true,
    },
    reportdate: {
        type: String
    },
    stolendate: {
        type: String
    },
    reportedby: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("reports", reportSchema);
