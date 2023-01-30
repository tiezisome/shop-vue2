const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack(config) {
    config.devtool = "source-map";
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"));
  },
});
