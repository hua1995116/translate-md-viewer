const SymbolMap = require('./map');
const googleTranslate = require('./translate/googleTranslate');
const {markdown2ast,ast2markdown,i18nReplace,i18nTranslate} = require('./translate/index');

function rmHtml(value) {
  return value.match(/<b>(.*?)<\/b>/g).map(item => item.match(/<b>(.*)<\/b>/)[1]).join('');
}

window.onload = async function() {
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
  const language = localStorage.getItem('language') || "zh-CN";
  simplemdeFrom.value(translateData);

  const markdownAst = markdown2ast(translateData);
  const [replaceMarkdown, i18nMap] = i18nReplace(markdownAst);

  const result = await googleTranslate(language, i18nMap);

  const data = result.data[0];

  const translateMap = data.map(item => {
    const text = item[0][0][0];
    if(text.indexOf('<b>') > -1) {
      return rmHtml(text);
    }
    return text;
  })

  const translateAst = i18nTranslate(replaceMarkdown, translateMap);

  const translateMarkdown = ast2markdown(translateAst);

  simplemdeTo.value(translateMarkdown);
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

