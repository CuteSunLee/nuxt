<template>
  <div class="container">
    <el-card>
      <div slot="header">DETAIL</div>
      <div>
        <!-- <h3> Name: {{ name }}</h3>
        <h3> username: {{ username }}</h3>
        <h3> Email : {{ email }}</h3> -->
        <h3> Name: {{ data.name}}</h3>
        <h3> username: {{ data.username}}</h3>
        <h3> Email : {{ data.email }}</h3>
      </div>
    </el-card>
    <p>
      <nuxt-link to="/" class="link">GO BACK</nuxt-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'aside',
  //校验路由参数，如果不通过，调到404
  validate({ params }) {
    return !isNaN(+params.id)
  },
  // async asyncData({ params, error }) {
  //   try {
  //     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
  //     return data
  //   } catch (e) {
  //     error({ message: 'User not found', statusCode: 404 })
  //   }
  // },
  data(){
      return {
        data: {}
      }
  },
  created(){
    this.getDetail()
  },
  methods: {
    getDetail(){
      const t = this;
       axios.get(`https://jsonplaceholder.typicode.com/users/${t.$router.history.current.params.id}`).then(data => {
         t.data = data.data;
       })
    }
    
  }
}
</script>
<style>
h3 {
  padding: 8px;
  text-align: left;
}
.link {
  margin-top: 40px;
  display: inline-block;
}
</style>
