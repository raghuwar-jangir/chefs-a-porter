const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "_atoms": path.join(__dirname, "src/components/atoms"),
        "atoms": path.join(__dirname, "src/components/atoms"),
        "_molecules": path.join(__dirname, "src/components/molecules"),
        "_organisms": path.join(__dirname, "src/components/organisms"),
        "_templates": path.join(__dirname, "src/components/templates"),
        "_config": path.join(__dirname, "src/config"),
        "_images": path.join(__dirname, "src/images"),
      }
    }
  });
}