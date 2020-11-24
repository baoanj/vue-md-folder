<template>
  <div class="markdown-main">
    <div v-html="content" class="markdown-article" ref="markdownArticle"></div>
    <div class="markdown-anchor">
      <div v-for="item in anchors" :key="item.id" class="markdown-header">
        <span @click="item.scrollIntoView()">{{ item.id }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkdownContent',
  props: {
    content: String
  },
  data() {
    return {
      anchors: []
    }
  },
  mounted() {
    this.anchors = this.$refs.markdownArticle.querySelectorAll('h1')
  }
}
</script>

<style lang="scss" scoped>
.markdown-main {
  height: 100%;
  display: flex;
  .markdown-article {
    flex: 1;
    overflow: auto;
    ::v-deep {
      pre {
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }
    }
  }
  .markdown-anchor {
    flex-shrink: 0;
    width: 200px;
    margin-left: 10px;
    overflow: auto;
    .markdown-header {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: #327dff;
        cursor: pointer;
      }
    }
  }
}
</style>
