// 모듈을 가져오고 내보내는 방식.
// ESM (브라우저에서 사용되는 방식) => CommonJS (NodeJS에서 사용되는 방식)
// import => require()
// export => module.exports

// import autoprefixer from 'autoprefixer' 와 같은 의미! (ESM 에서)
const autoprefixer = require("autoprefixer");

// export { plugins: [autoprefixer] } 와 같은 의미! (ESM 에서)
module.exports = { plugins: [autoprefixer] };
