import "dotenv/config";

export default {
  server: {
    port: process.env["PORT"] || 4000,
  },
};
