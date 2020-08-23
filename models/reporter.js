const mongoose = require("mongoose");

const reporterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("reporters", reporterSchema);
