<template>
  <strong>VueAdmin Management System</strong>
  <div class="header-avatar">
    <el-avatar :src="userInfo.avatar" />
    <el-dropdown>
      <span class="el-dropdown-link">
        <strong>{{ userInfo.username }}</strong>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <router-link to="/userCenter"> User Info </router-link>
          </el-dropdown-item>
          <el-dropdown-item @click="logout">Logout</el-dropdown-item>
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
  data() {
    return {
      userInfo: {
        id: "",
        username: "",
        avatar: "",
      },
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.axios.get("/sys/settings").then((res) => {
        this.userInfo = res.data.data;
      });
    },
    logout(){
      this.axios.post("/logout").then(res=>{
        localStorage.clear()
        sessionStorage.clear()

        this.$store.commit("resetState")

        this.$router.push("/login")
      })
    }
  },
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
a{
 text-decoration: none; 
}
</style>