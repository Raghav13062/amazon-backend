module.exports = {
    apps: [
      {
        name: 'amazon-backend',
        script: 'index.js',
        watch: true,
        env: {
          MONGO_URI: 'mongodb+srv://raghav13062:ddVkbskRfpuUJi5V@cluster0.1gkq4.mongodb.net/',
          PORT: 4000,
          JWT_SECRET: 'e218068f28279f44e96fce62249456e9b93493b5142e60712abfd6e036dc719474dc85f4a09dd6465faa4e8820a96859817dc7675fcb1c6157b4f88ad6dfbe2e',
        },
      },
    ],
  };