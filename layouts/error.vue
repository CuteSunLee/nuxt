<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <p class="goback">
      <nuxt-link to="/">返回首页</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'self-aside'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.goback {
  margin-top: 40px;
}
.goback a {
  color: lightseagreen;
  font-size: 20px;
}
</style>