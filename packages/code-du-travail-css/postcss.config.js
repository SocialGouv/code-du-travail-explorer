// "css-watcher": "postcss css/styles.css --use postcss-import --use postcss-preset-env --use cssnano --output ./bundle.css --no-map --watch --verbose"
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-media-fn": {},
    "postcss-custom-media": {},
    "postcss-color-mod-function": require("postcss-color-mod-function"),
    "postcss-preset-env": {
      browsers: "last 2 versions",
      // https://cssdb.org/#staging-process
      // https://preset-env.cssdb.org/features
      stage: 0
    },
    cssnano: {}
  },
  map: false
};
