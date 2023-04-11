module.exports = {
  apps: [
    {
      name: "ClusterApp",
      script: "./app.js",
      instances: 4,
      exec_mode: "cluster",
    },
  ],
};
