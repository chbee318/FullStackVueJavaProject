<template>
  <el-scrollbar>
    <el-menu
      :default-openeds="['1', '2']"
      text-color="dark"
      active-text-color="cadetblue"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><message /></el-icon>System Management
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/sys/settings">User Settings</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/sys/roles">User Roles Management</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="/sys/lists">User Lists</router-link></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>Management Tool
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link to="/sys/dictionaries">Math Dictionary</router-link></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script>
export default {
  name: "SideMenu",
};
</script>
<style scoped>
.el-sub-menu {
  background-color: cadetblue;
  font-weight: bold;
}
a{
 text-decoration: none; 
}
</style>