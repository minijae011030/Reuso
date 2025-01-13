const postcss = require("rollup-plugin-postcss");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true, // CSS Modules 활성화
        minimize: true, // CSS Minify 설정
        sourceMap: options.sourcemap, // 소스맵 생성 여부
      })
    );
    return config;
  },
};
