<template>
   <vue-editor v-model="content" />
</template>

<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
import rp from 'request-promise'
import cheerio from 'cheerio'

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
      let ogpdata = []
      console.log(urls)
      urls.forEach(async (url, i) => {
        const options = {
          uri: url,
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          transform: (body) => {
            return cheerio.load(body);
          }
        };
        try {
          const $ = await rp.get(options);
           ogpdata[i] = {
            title: $('title').text(),
            description: $('meta[property="og:description"]').attr('content'),
            ogimage: $('meta[property="og:image"]').attr('content'),
            url:$('meta[property="og:url"]').attr('content')
          };
        } catch(error) {
          console.error('Error:', error);
        }
      });

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
