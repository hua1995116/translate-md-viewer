import axios from 'axios';
function github(originUrl, callback) {
  let url = originUrl.split("#")[0];
  if (url.indexOf("/tree/") > -1) {
    url = url.replace("/tree", "");
  } else {
    url = url + "/master";
  }
  url = url
    .replace("/blob", "")
    .replace("github.com", "raw.githubusercontent.com");
  const fetchUrl = url + "/README.md";
  axios.get(fetchUrl).then(res => {
    if (res.status === 200) {
      callback(res.data)
    } else {
      callback(false)
    }
  }).catch(e => {
    callback(false)
  })
}

module.exports = github;