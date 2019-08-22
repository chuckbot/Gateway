module.exports = {
  secret: 'mypreciuossecret',
  corsOptions: {
    origin: 'front-url',
    optionsSuccessStatus: 200
  },
  timeToExpireSessionInHours: '100d',
  maxInactivityTimeInMinutes: 5
};
