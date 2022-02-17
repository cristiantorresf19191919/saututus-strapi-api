module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf7b853ab337896b0389ca7973fade31'),
  },
});
