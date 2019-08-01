const translateToken = require("./translateToken");
const axios = require("axios");
const qs = require("qs");

function arrayStringify(data) {
  return data.map(item => `q=${encodeURIComponent(item)}`).join('&');
}

function handletranslate(language, data) {
  // data = data.slice(0, 5);
  // const language = localStorage.getItem('language') || "zh-CN";
  return translateToken
    .get(data.join(''), { tld: "cn" })
    .then(res => {
      console.log(res.value);
      // https://translate.googleapis.com/translate_a/t?anno=3&client=tee&format=html&v=1.0&key&logld=vTE_20190506_00&sl=auto&tl=zh-CN&sp=nmt&tc=2&sr=1&tk=151144.323280&mode=1
      const query = {
        anno: 3,
        client: "webapp",
        format: 'html',
        v: 1.0,
        key: null,
        logld: "vTE_20190506_00",
        sl: "auto",
        tl: language,
        sp: "nmt",
        tc: 2,
        sr: 1,
        tk: res.value,
        mode: 1
      };
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: arrayStringify(data),
        url: `https://translate.googleapis.com/translate_a/t?${qs.stringify(
          query
        )}`
      };
      // console.log(options.url);
      return axios(options);
    })
    // .then(res => {
      // let result = res.data[0];
      // Object.keys(SymbolMap).map(item => {
      //   result = result.replace(new RegExp(item, 'g'), SymbolMap[item]);
      // })
      // markdown.value(result);
      // handleScroll();
    // })
    // .catch(e => {
    //   console.log(e);
    // });
}

module.exports = handletranslate;