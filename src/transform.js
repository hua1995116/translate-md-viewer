const axios = require("axios");
const translate = require("./translate");
const qs = require("qs");
const SymbolMap = require('./map');

window.onload = function() {
  const toolbar = [
    'bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list',
    'link', 'image', 'preview', 'side-by-side', 'fullscreen',
  {
    name: "custom",
    action: function customFunction(editor){
      console.log(editor.value())
      downloadText(editor.value(), `translate-${+new Date()}.md`);
    },
    className: "fa fa-download",
    title: "Custom Button",
  }];
  const simplemdeFrom = new SimpleMDE({
    element: document.getElementById("markdown-editor-from"),
    spellChecker: false,
    toolbar,
  });

  const simplemdeTo = new SimpleMDE({
    element: document.getElementById("markdown-editor-to"),
    spellChecker: false,
    toolbar,
  });
  const translateData = localStorage.getItem('translate') || '';
  simplemdeFrom.value(translateData);
  handletranslate(simplemdeTo, translateData);
}

function downloadText(content, filename) {
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 字符内容转变成blob地址
  const blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
}

function handleScroll() {
  setTimeout(() => {
    const left = document.querySelector('.editor-from');
    const right = document.querySelector('.editor-to');
    const lc = document.querySelector('.editor-from .CodeMirror');
    const rc = document.querySelector('.editor-to .CodeMirror');
    let scale = (rc.offsetHeight - right.offsetHeight) / (lc.offsetHeight - left.offsetHeight)
    let currentTab = 0
    left.addEventListener('scroll', ()=>{
      if (currentTab !== 1) return
      right.scrollTop = left.scrollTop * scale
    })
    right.addEventListener('scroll', ()=>{
      if (currentTab !== 2) return
      left.scrollTop = right.scrollTop / scale
    })
    left.addEventListener('mouseover', ()=>{
      // 1 表示表示当前鼠标位于 .left元素范围内
      currentTab = 1
    })
    right.addEventListener('mouseover', ()=>{
      // 2 表示表示当前鼠标位于 .right元素范围内
        currentTab = 2
    })
  }, 1000);
}

function handletranslate(markdown, data) {
    const language = localStorage.getItem('language') || "zh-CN";
    translate
      .get(data, { tld: "cn" })
      .then(res => {
        // https://translate.googleapis.com/translate_a/t?anno=3&client=tee&format=html&v=1.0&key&logld=vTE_20190506_00&sl=auto&tl=zh-CN&sp=nmt&tc=2&sr=1&tk=151144.323280&mode=1
        const query = {
          anno: 3,
          client: "webapp",
          format: null,
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
          data: qs.stringify({
            q: data
          }),
          url: `https://translate.googleapis.com/translate_a/t?${qs.stringify(
            query
          )}`
        };
        // console.log(options.url);
        return axios(options);
      })
      .then(res => {
        let result = res.data[0];
        Object.keys(SymbolMap).map(item => {
          result = result.replace(new RegExp(item, 'g'), SymbolMap[item]);
        })
        markdown.value(result);
        handleScroll();
      })
      .catch(e => {
        console.log(e);
      });
}