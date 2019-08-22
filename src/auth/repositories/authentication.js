'use strict';
const CryptographyAssistant = require('../assistants').CryptographyAssistant;
const UserRepository = require('./user');

module.exports.checkToken = async function(token) {
  const decoded = CryptographyAssistant.getTokenInformation(token);
  const account = await UserRepository.selectById(decoded.userId);
  if (account && account.token == token) {
    return {
      userId: account.id,
      name: account.name,
      email: account.email,
      token: account.token
    };
  } else {
    throw Error('Token unauthorized');
  }
};

module.exports.createToken = async function({ email, password }) {
  const user = await UserRepository.selectByEmail(email);
  if (!user || !user.id) {
    throw Error('Wrong email');
  }
  const encryptedPassword = CryptographyAssistant.encryptWithSHA2(
    password + user.salt
  );
  if (encryptedPassword === user.encryptedPassword) {
    const userData = {
      userId: user.id,
      name: user.name,
      email: user.email
    };
    userData.token = CryptographyAssistant.generateToken(userData);
    await user.update({
      token: userData.token
    });
    return userData;
  } else {
    throw Error('Wrong password');
  }
};

module.exports.deleteToken = async function({ userId }) {
  const user = await UserRepository.selectById(userId);
  await user.update({ token: null });
};
