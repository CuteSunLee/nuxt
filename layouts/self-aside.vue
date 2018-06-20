<template>
  <div class="layout">
    <aside>ASIDE</aside>
    <nuxt/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
aside {
  vertical-align: middle;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  height: 100%;
  left: 0;
  width: 180px;
  background-color: lightseagreen;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
</style>