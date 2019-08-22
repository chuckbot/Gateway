'use strict';
const CryptographyAssistant = require('../assistants').CryptographyAssistant;
const User = require('../../../models').User;

module.exports.selectByEmail = async function(email) {
  return await User.findOne({
    where: { email: email }
  });
};

module.exports.selectById = async function(userId) {
  return await User.findOne({
    where: { id: userId }
  });
};

module.exports.insert = function(userData) {
  let salt = CryptographyAssistant.generateRandomString(100);
  let encryptedPassword = CryptographyAssistant.encryptWithSHA2(
    userData.password + salt
  );
  return User.create({
    name: userData.name,
    DNI: userData.DNI,
    position: userData.position,
    email: userData.email,
    encryptedPassword: encryptedPassword,
    salt: salt
  });
};
