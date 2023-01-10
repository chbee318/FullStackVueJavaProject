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
          <el-menu-item index="1-1"><router-link to="/settings">User Settings</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/roles">User Roles Management</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="/lists">User Lists</router-link></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>Management Tool
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link to="/dictionaries">Math Dictionary</router-link></el-menu-item>
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
</style>