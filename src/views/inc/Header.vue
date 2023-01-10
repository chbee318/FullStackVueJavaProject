<template>
  <strong>VueAdmin Management System</strong>
  <div class="header-avatar">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        <strong>Admin</strong>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>User Profile</el-dropdown-item>
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-link target="_blank">
      <u>
        <strong>Link</strong>
      </u>
    </el-link>
    <el-link target="_blank">
      <strong><i>Help</i></strong>
    </el-link>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.el-dropdown-link {
  line-height: 3;
  cursor: pointer;
}

.header-avatar {
  float: right;
  width: 185px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>