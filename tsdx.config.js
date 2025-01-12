const postcss = require("rollup-plugin-postcss");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true, // CSS 모듈 활성화
        minimize: true, // CSS 파일 최소화
        sourceMap: options.sourcemap, // 소스맵 생성
      })
    );
    return config;
  },
};
