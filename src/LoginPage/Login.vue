<template>
  <div>
    <div id="login">
      <div class="loginheader">
        <el-row>
          <el-col :span="12">
            <div>
              <span class="logincss">登入</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div @click="onRegister">
              <span class="regiest">注册</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="formcss">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="手 机 号">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="登入密码" v-if='showSelf'>
            <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
         
          <el-form-item label="验 证 码" v-else>
            <el-input v-model="form.password" placeholder="请输入验证码" show-password></el-input>
              <span class="getcode" @click="onGetcode">获取验证码</span>
          </el-form-item>               
          <div class="fountpass">
            <span>忘记密码</span>
          </div>
          <div class="switch" @click="onSwitch">
            <span v-if='showSelf'>切换成验证码登入</span>
             <span v-else>切换成密码登入</span>
          </div>
          <div class="submitcss">
            <el-button type="warning" @click="onSubmit">登入</el-button>
          </div>
        </el-form>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showSelf: true,
      form: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit", this.form);
    },
    onRegister(){
      this.$router.push({ path:'/register'})
    },
    onSwitch(){
       this.showSelf = !this.showSelf

    },
    onGetcode(){
        console.log("获取验证码")
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: "100%";
  .loginheader {
    margin: 10px;
  }
  .logincss {
    float: left;
    font-weight: 800;
  }
  .regiest {
    float: right;
    font-size: 14px;
    color: #0094ff;
  }
  .formcss {
    margin-top: 30px;
  }
  .fountpass {
    float: left;
    width: 100%;
  }
  .fountpass span {
    color: #0094ff;
    font-size: 14px;
    float: right;
    margin-right: 10px;
  }
  .switch {
    float: left;
    width: 100%;
    margin-top: 30px;
  }
  .switch span {
    text-align: center;
    color: #0094ff;
    font-size: 14px;
  }
  .submitcss {
    width: 100%;
  }
  .getcode{
    float:right;
    margin-top:-40px;
    margin-right:10px;
    z-index:999;
    color:#ff7a45;
    position: relative
   }
  .el-button--warning {
    width: 90%;
    background-color: #fa541c;
  }
}


</style>
