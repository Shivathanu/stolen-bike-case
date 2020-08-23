const Log = require('../models/log');

exports.getByQuery = async (req, res) => {
  try {
    const { from = '', to = '', limit, skip } = req.query;
    const logData = await Log.find(
      from
        ? {
            timestamp: {
              $gte: new Date(from).getTime(),
              ...(to ? { $lte: new Date(to).getTime() } : {}),
            },
          }
        : {},
      null,
      { limit: parseInt(limit), skip: parseInt(skip) },
    );

    res.send(logData);
  } catch (err) {
    res.send({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const logData = await Log.create(req.body);

  res.send(logData);
};
