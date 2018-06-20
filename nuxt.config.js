module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-demo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070", height: "5px" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save，扩展webpack配置
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  // 如果我们在另外一个页面内也引用了 axios，那么在应用打包发布的时候 axios 会被打包两次，而实际上我们只需要打包一次，在vendor中指定即可。
  vendor: ["axios", "element-ui"],
  css: ["assets/main.css"],
  plugins: [{ src: "~plugins/element-ui", ssr: true }],
  router: {
    middleware: "console" // 页面间跳转，可以做一些登录信息校验，cookie是否过期等
  }
};
