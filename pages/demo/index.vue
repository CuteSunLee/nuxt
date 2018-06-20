<template>
  <section class="container">
    <app-logo></app-logo>
    <div>
      <h1 class="title">
        say hello from {{ where }}
      </h1>
      <nuxt-link to="/" class="link">GO BACK</nuxt-link>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  transition: 'bounce',
  asyncData() {
    return {
      where: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  data(){
    return {
      list:[]
    }
  },
  components: {
    'app-logo': AppLogo
  }
}
</script>

<style>
</style>
