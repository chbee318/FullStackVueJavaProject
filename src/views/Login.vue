<template>
  <el-row class="row-bg" justify="center">
    <el-col :xl="6" :lg="7">
      <h3>Welcome to Admin Management System</h3>
      <el-image
        :src="require('@/assets/MyQR.png')"
        style="height: 135px; width: 135px"
      ></el-image>
      <p>LinkedIn</p>
      <p>Scan the QR code to receive the login token</p>
    </el-col>

    <el-col :span="1"> <el-divider direction="vertical" /></el-col>

    <el-col :span="6">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="120px"
        class="demo-loginForm"
      >
        <el-form-item label="User name" prop="username" style="width: 380px">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password" style="width: 380px">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Code" prop="code" style="width: 380px">
          <el-input
            v-model="loginForm.code"
            style="width: 132px; float: left"
          ></el-input
          ><el-image
            :src="captchaImg"
            class="captchaImg"
            style="width: 100px"
          ></el-image>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >Create</el-button
          >
          <el-button @click="resetForm('loginForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
        token: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input Username",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "Please input code",
            trigger: "blur",
          },
          {
            min: 5,
            message: "Should not less than 5 characters",
            trigger: "blur",
          },
        ],
      },
      captchaImg: null,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post("/login", this.loginForm).then((response) => {
            const jwt = response.headers["authorization"];
            this.$store.commit("SET_TOKEN", jwt);
            this.$router.push("/index");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha() {
      this.axios.get("/captcha").then((response) => {
        this.loginForm.token = response.data.data.token;
        this.captchaImg = response.data.data.captchaImg;
      });
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>
<style scoped>
.el-row {
  background-color: #fafafa;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}
.el-divider {
  height: 200px;
}
.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}
</style>