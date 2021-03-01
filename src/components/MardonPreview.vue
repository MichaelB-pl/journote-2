<template>
  <div class="markdown-container" v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked';
import DOMPurify from 'dompurify';

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },

  computed: {
    compiledMarkdown() {
      const markdown = marked(this.text, {
        breaks: true,
        gfm: true,
      });
      const styledMarkdown = this.styleHtml(markdown);
      const clearMarkdown = DOMPurify.sanitize(styledMarkdown);

      return clearMarkdown;
    },
  },

  methods: {
    styleHtml(markdown) {
      let html = markdown;
      html = this.styleImgTag(html);
      html = this.styleBlockQuoteTag(html);
      return html;
    },

    styleImgTag(html) {
      const regex = /<img/g;
      return html.replace(regex, `<img style="max-width: 100%;"`);
    },

    styleBlockQuoteTag(html) {
      const regex = /<blockquote/g;
      return html.replace(
        regex,
        `<blockquote style="font-style: italic;" class="blockquote"`
      );
    },
  },
};
</script>
