<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <SideMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SideMenu from "./inc/SideMenu.vue";
import Header from "./inc/Header.vue";
export default {
  name: "Home",
  components: {
    SideMenu,
    Header,
  }
};
</script>
<style scoped>
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>