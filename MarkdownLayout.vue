<template>
  <div class="markdown-layout">
    <div class="markdown-contents">
      <div v-for="item in list" :key="item.name">
        <div>{{ item.name }}</div>
        <div class="contents-children">
          <div
            v-for="child in item.children"
            :key="child.name"
            class="markdown-router"
          >
            <span @click="$router.push({ name: child.name })">{{
              child.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="markdown-document">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkdownLayout',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.markdown-layout {
  height: 100%;
  display: flex;
  .markdown-contents {
    flex-shrink: 0;
    width: 240px;
    margin-right: 20px;
    overflow: auto;
    .contents-children {
      padding-left: 20px;
      .markdown-router {
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
  .markdown-document {
    flex: 1;
  }
}
</style>
