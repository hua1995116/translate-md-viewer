var unified = require('unified')
const parse = require('remark-parse')
const stringify = require('remark-stringify')
const traverse = require('./traverse');

function markdown2ast(text) {
  return unified()
          .use(parse)
          .parse(text);
}

function ast2markdown(ast) {
  return unified()
          .use(stringify)
          .stringify(ast);
}

function i18nReplace(ast) {
  let i = 0;
  const translateMap = []

  traverse(ast, {
    enter: (node) => {
      if(node.type === 'text') {
        const key = i;
        translateMap[i] = node.value;
        node.value = key;
        i++;
      }
    }
  });
  return [ast, translateMap];
}


function i18nTranslate(ast, map) {
  traverse(ast, {
    enter: (node) => {
      if(node.type === 'text') {
        const placeit = +node.value;
        node.value = map[placeit] || '';
      }
    }
  });
  return ast;
}


module.exports = {
  markdown2ast,
  ast2markdown,
  i18nReplace,
  i18nTranslate
}