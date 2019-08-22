'use strict';
const AuthenticationRepository = require('../repositories')
  .AuthenticationRepository;

module.exports.authorize = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  AuthenticationRepository.checkToken(token)
    .then(decoded => {
      req.decoded = decoded;
      next();
    })
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.authenticateWithToken = async (req, res) => {
  try {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    const userData = await AuthenticationRepository.checkToken(token);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.authenticate = async (req, res) => {
  try {
    const userData = await AuthenticationRepository.createToken(req.body);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.disavow = (req, res) => {
  AuthenticationRepository.deleteToken(req.decoded)
    .then(() => res.json(true))
    .catch(error => res.status(500).json({ message: error.message }));
};
