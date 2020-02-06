<template>
   <vue-editor v-model="content" />
</template>

<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
  name: 'app',
  components: {
    VueEditor
  },
  data: () => ({
    content: "https://qiita.com/taxiyoshida/items/8cd9971ced159c8e6cd9 https://qiita.com/taxiyoshida/items/8cd9971ced159c8e6cd9"
  }),
  watch: {
    content: function(newValue) {
      const pattern = /(http|https):\/\/[\w/:%#\\$&\\?\\(\\)~\\.=\\+\\-]+/g
      const urls = newValue.match(pattern)
      console.log(urls)
    }
  }
}
</script>

<style>
@import "~vue2-editor/dist/vue2-editor.css";
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
