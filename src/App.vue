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
        :value="website[item]">
      </el-option>
    </el-select>
    <el-button class="translate-item" :loading="loading" type="primary" @click="handleTranslate">Translate</el-button>
  </div>
</template>

<script>

import languages from './languages';
import exportMedium from './markdown';

export default {

  components: {

  },
  data () {
    return {
      languages: languages,
      value: 'zh-cn',
      website: ['github.com', 'medium.com'],
      webvalue: 'medium.com',
      loading: false
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleTranslate() {
      this.loading = true;
      exportMedium(() => {
        localStorage.setItem('language', this.value);
        this.loading = false;
        chrome.tabs.create({url: chrome.extension.getURL('./dist/index.html')});
      });
    },
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