const Reporter = require('../models/reporter');

exports.create = async (req, res) => {
  const reporter = new Reporter(req.body);
  const reporterData = await reporter.save();

  res.send(reporterData);
};
