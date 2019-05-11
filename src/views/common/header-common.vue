<template>
  <div class="header">
    <div class="header-menu container">
      <h1>教育教学软件</h1>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo nav"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">课程学习</el-menu-item>
        <el-menu-item index="3">错题本</el-menu-item>
        <el-menu-item index="4">案例展示</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
        
      </el-menu>
      <!-- <div class="nav">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">课程学习</a>
        </li>
        <li>
          <a href="#">错题本</a>
        </li>
        <li>
          <a href="#">案例展示</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "header-common",
  data() {
    return {
      showSearch: false,
      login: false,
      input: "",
      activeIndex: "0",
      activeIndex2: "0"
    };
  },
  mounted() {},

  methods: {}
};
</script>
<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
.nav {
    float:left;
}
.nav li a {
  float: left;
  color: #000;
  height: 55px;
  line-height: 55px;
  cursor: pointer;
  width: 107px;
  text-align: center;
}
.nav li:hover a {
  background-color: #3f3f3f;
  color: #fff;
}
.nav li a:focus {
  background-color: #3f3f3f;
  color: #fff;
}
.header {
  width: 100%;
  height: 60px;
  font-size: 16px;
  margin: 10px 0;
}

.header-menu h1 {
  float: left;
  margin-top: 15px;
  margin-right: 200px;
  color: #23794a;
  font-size: 20px;
}
.search-hide {
  position: absolute;
  right: 60px;
}
.search-show {
  position: absolute;
  right: 100px;
}
</style>
