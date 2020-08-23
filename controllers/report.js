const Report = require('../models/report');
const PoliceOfficer = require('../models/policeofficer');

exports.create = async (req, res) => {
  try {
    const policeofficer = await PoliceOfficer.find({ isassigned: false }).sort({ lastresolvedate: 1 });
    console.log('exports.create -> policeofficer', policeofficer);
    const { name } = policeofficer[0];
    const report = new Report(req.body);
    report.assignedto = name;
    const reportData = await report.save();
    reportData.status = 'Assigned successfully';
    res.send(reportData);
  } catch (err) {
    res.send({ message: err.message });
  }
};
