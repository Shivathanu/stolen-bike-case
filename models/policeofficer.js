const mongoose = require("mongoose");

const policeOfficerSchema = new mongoose.Schema({
    officerid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isassigned: {
        type: Boolean,
        default: false
    },
    lastresolvedate: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("police_officer", policeOfficerSchema);
