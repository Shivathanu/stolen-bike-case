const PoliceOfficer = require('../models/policeofficer');

exports.create = async (req, res) => {
  const policeofficer = new PoliceOfficer(req.body);
  const policeofficerData = await policeofficer.save();

  res.send(policeofficerData);
};
