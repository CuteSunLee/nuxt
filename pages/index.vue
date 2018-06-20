<template>
  <section class="container">
    <div>
      <!-- <div>
        <nuxt-link to="./demo" class="link">GO TO DEMO</nuxt-link>
        <h1 class="title">
          nuxt say hello from {{ name }}
        </h1>
      </div> -->
      <!-- <el-table :data="users" border stripe @row-click="goToDetail">
        <el-table-column prop="name" label="Name" min-width="200" align="center"></el-table-column>
        <el-table-column prop="username" label="userName" min-width="200" align="center"></el-table-column>
        <el-table-column prop="email" label="Email" min-width="220" align="center"></el-table-column>
        <el-table-column prop="phone" label="Phone" min-width="200" align="center"></el-table-column>
        <el-table-column prop="website" label="Website" min-width="200" align="center"></el-table-column>
      </el-table> -->
      <ul>
        <li v-for="item in users" :key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'
export default {
  head:{
    title: 'NUXT'
  },
  // 注意：由于asyncData方法是在组件 初始化 前被调用
  // 所以在方法内是没有办法通过 this 来引用组件的实例对象。
  // asyncData ({ params, error }) {
  //   return axios.get(`/lottery/types?key=2a447c5e291c11b881c6f844e2f9b147`)
  //   .then((res) => {
  //     return { 
  //       list: res.data.result,
  //       name: process.static ? 'static' : (process.server ? 'server' : 'client')
  //     }
  //   })
  //   .catch(err => {
  //     error({statusCode:500, message: 'error'}) 
  //   })
  // },
  async asyncData ({ params, error }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(process)
    return { 
      users: data.slice(0,5),
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  data() {
    return{
      
    }
  },
  methods:{
    goToDetail(row){
        this.$router.push({path: '/detail/' + row.id})
    }
  },

}
</script>

<style>
</style>
