<template>
  <div class="translate-wrapper">
    <el-select filterable v-model="value" placeholder="Please Select Language" class="translate-item">
      <el-option
        v-for="item in Object.keys(languages)"
        :key="item"
        :label="item"
        :value="languages[item]">
      </el-option>
    </el-select>
    <el-select filterable v-model="webvalue" placeholder="Please Select Website" class="translate-item">
      <el-option
        v-for="item in website"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    <el-button class="translate-item" :loading="loading" type="primary" @click="handleTranslate">Translate</el-button>
  </div>
</template>

<script>
import { getAllLanguage } from 'google-translate-open-api';
import medium from './type/medium';
import github from './type/github';
import parse from 'url-parse';

export default {

  components: {

  },
  data () {
    return {
      languages: getAllLanguage(),
      value: 'zh-cn',
      website: ['github.com', 'medium.com'],
      webvalue: 'medium.com',
      loading: false,
      url: '',
    };
  },

  computed: {},

  mounted() {
    chrome.tabs.query({ active: true, currentWindow: true }, (arrayOfTabs) => {
      const activeTab = arrayOfTabs[0];
      this.url = activeTab.url;
      const parseUrl = parse(activeTab.url);
      const host = parseUrl.host;
      const oneSite = host.split('.');
      const oneSiteUrl = oneSite.slice(oneSite.length - 2, oneSite.length).join('.');
      console.log(this.website, oneSiteUrl);
      if(this.website.indexOf(oneSiteUrl) > -1) {
        this.webvalue = oneSiteUrl;
      }
    })
  },

  methods: {
    handleTranslate() {
      this.loading = true;
      localStorage.setItem('language', this.value);
      if(this.webvalue === 'medium.com') {
        medium(this.url, (markdownText) => {
          this.handlejump(markdownText);
        });
      } else if(this.webvalue === 'github.com') {
        github(this.url, (markdownText) => {
          this.handlejump(markdownText);
        })
      }
    },
    handlejump(value) {
      localStorage.setItem("translate", value);
      this.loading = false;
      if(!value) {
        alert('解析出错');
        return;
      }
      chrome.tabs.create({url: chrome.extension.getURL('./dist/bg.html')});
    }
  }
}

</script>
<style lang='less'>
.translate-wrapper {
  width: 200px;
}
.translate-item {
  margin-top: 10px;
  width: 100%;
}
</style>