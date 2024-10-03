module.exports = {
    apps: [
      {
        name: 'amazon-backend',
        script: 'index.js',
        watch: true,
        env: {
            mongoURI: process.env.MONGO_URI,
            port: process.env.PORT || 4001,
            jwtSecret: process.env.JWT_SECRET,
        },
      },
    ],
  };