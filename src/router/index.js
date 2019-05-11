import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      component: index,
      name: 'index',
      redirect: {name: 'home'},
      meta: { title: '主入口整体布局' },
      children: [
        { path: '/home', component: home, name: 'home', meta: { title: '首页' } },
      ]
    }
  ]
})
