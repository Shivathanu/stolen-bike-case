const User = require('../models/user');
const _ = require('lodash');

exports.createUser = async (req, res) => {
    try {
        const { token } = req.headers;
        const { permissions } = req.body;
        const admin = await User.find({ token });
        if (!admin[0]) { throw new Error('User not authorized to create')}
        if (permissions.length < 2 && !_.every(permissions, data => _.includes(permissions, data))) { 
            throw new Error('Wrong permissions set...') 
        }

        const userData = await User.create({ ...req.body, createdby: admin[0]._id });

        res.send(userData);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

exports.createAdmin = async (req, res) => {
    const admin = new User(req.body);
    const userData = await admin.save();

    res.send(userData);
};
