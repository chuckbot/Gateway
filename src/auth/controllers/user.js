'use strict';
const UserRepository = require('../repositories').UserRepository;

module.exports.create = (req, res) => {
  UserRepository.insert(req.body)
    .then(() => res.json(true))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.getById = (req, res) => {
  UserRepository.selectById(req.decoded.userId)
    .then(userdata => {
      userdata.encryptedPassword = undefined;
      userdata.salt = undefined;
      res.json(userdata);
    })
    .catch(error => res.status(500).json({ message: error.message }));
};
