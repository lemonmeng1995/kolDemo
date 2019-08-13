<template>
  <div>
    <div id="login">
      <div class="loginheader">
        <span class="logincss" v-if="forgetdata === '0'">登录</span>
        <span class="logincss" v-if="forgetdata === ('2' || '1')">忘记密码？</span>
      </div>
      <div class="formcss">
        <el-form ref="form" :model="form" label-width="80px" v-if="forgetdata === '0'">
          <el-form-item label="+86" class="phoneform">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="phoneform" v-if="showSelf">
            <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="phoneform" v-else>
            <el-input class="codeinput" v-model="form.password" placeholder="请输入验证码" show-password></el-input>
            <div class="getcode">
              <span @click="onGetcode">获取验证码</span>
            </div>
          </el-form-item>
          <div class="switch" @click="onSwitch">
            <span v-if="showSelf">切换成验证码登录</span>
            <span v-else>切换成密码登录</span>
          </div>
          <div class="submitcss" @click="onSubmit">
            <span>登 录</span>
          </div>
          <div class="fountpass">
            <span class="prossword" @click="onForget">忘记密码?</span>
            <span class="regiest" @click="onRegister">注册</span>
          </div>
        </el-form>
        <el-form ref="form" :model="form" label-width="80px" v-if="forgetdata === '1'">
          <el-form-item label="+86" class="phoneform">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="phoneform">
            <el-input class="codeinput" v-model="form.password" placeholder="请输入验证码" show-password></el-input>
            <div class="getcode">
              <span @click="onGetcode">获取验证码</span>
            </div>
          </el-form-item>
          <div class="submitcss" :style="{'margin-top':'150px'}" @click="onText">
            <span>下一步</span>
          </div>
        </el-form>
        <el-form ref="form" :model="form" label-width="90px" v-if="forgetdata === '2'">
          <el-form-item label="新密码" class="phoneform">
            <el-input v-model="form.password" placeholder="请输入新密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" class="phoneform">
            <el-input v-model="form.newpassword" placeholder="请再次输入密码" show-password></el-input>
          </el-form-item>

          <div class="submitcss" :style="{'margin-top':'150px'}" @click="onDetermine">
            <span>确定</span>
          </div>
        </el-form>
        <div id="ressucess" v-if="forgetdata === '3'">
          <div class="sucessphone">
            <span>13612349856</span>
          </div>
          <div class="message">
            <span>注册成功!</span>
          </div>
          <div class="word">
            <span>请您用电脑上网浏览器打开如下地址，通过手机号和您设置的密码登录供应商后台，完善供应商资质及上传商品</span>
          </div>
          <div class="linktext">
            <span>PC端登录链接地址：</span>
          </div>
          <div class="link">
            <a>http://backend.sqqmall.com/supplier.html</a>
          </div>
          <div class="copy">
            <span>复制链接</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showSelf: false,
      forgetdata: "0",
      phonelabel: "+86",
      form: {
        phone: "",
        password: ""
      }
    };
  },
  created() {
    this.phonelabel = this.phonelabel + this.getIlable();
  },
  methods: {
    getIlable() {
      return <i class="el-icon-arrow-down"></i>;
    },
    onSubmit() {
      console.log("submit", this.form);
    },
    onForget() {
      this.forgetdata = "1";
    },
    onText() {
      this.forgetdata = "2";
    },
    onRegister() {
      this.$router.push({ path: "/register" });
    },
    onSwitch() {
      this.showSelf = !this.showSelf;
    },
    onDetermine() {
      this.forgetdata = "3";
    },
    onGetcode() {
      console.log("获取验证码");
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: "100%";
  .loginheader {
    margin-top: 45px;
    margin-bottom: 40px;
    width: 100%;
    text-align: left;
  }
  .logincss {
    width: 93px;
    height: 45px;
    margin-left: 48px;
    font-size: 48px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }

  .formcss {
    margin-top: 30px;
    .el-form-item {
      border-bottom: 2px solid rgba(220, 220, 220, 1);
    }
    /deep/ .el-form-item__label {
      width: 58px;
      height: 25px;
      font-size: 32px;
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
    }
    .el-form-item__content {
      margin-left: 80px;
    }
    .codeinput {
      margin-right: 80px;
      display: inline-block;
    }
    /deep/ .el-input__inner {
      border: 0px;
    }
  }
  .fountpass {
    width: 100%;
    // margin-top:20px;
    .regiest {
      float: left;
      margin-left: 35px;
      width: 56px;
      height: 27px;
      font-size: 28px;
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: rgba(0, 132, 255, 1);
    }
    .prossword {
      float: right;
      width: 129px;
      margin-right: 35px;
      height: 27px;
      font-size: 28px;
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: rgba(0, 132, 255, 1);
    }
  }
  .fountpass span {
    color: #0094ff;
    font-size: 14px;
    float: right;
    margin-right: 10px;
  }
  .switch {
    width: 100%;
    margin-top: 100px;

    text-align: center;
  }
  .switch span {
    text-align: center;
    color: #0094ff;
    font-size: 14px;
    width: 229px;
    height: 27px;
    font-size: 28px;
    font-family: PingFang-SC-Medium;
    font-weight: bold;
    color: rgba(0, 132, 255, 1);
  }
  .submitcss {
    width: 670px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    margin: 50px auto;
    background: linear-gradient(
      90deg,
      rgba(255, 22, 124, 1),
      rgba(253, 28, 72, 1)
    );
    opacity: 0.3;
    border-radius: 44px;
    span {
      width: 70px;
      height: 34px;
      font-size: 36px;

      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
  .getcode {
    float: right;
    margin-top: -70px;
    margin-right: 10px;
    z-index: 999;
    color: #ff7a45;
    position: relative;
    text-align: center;
    width: 168px;
    height: 60px;
    line-height: 60px;
    background: linear-gradient(
      90deg,
      rgba(255, 22, 124, 1),
      rgba(253, 28, 72, 1)
    );
    border-radius: 30px;
    span {
      width: 113px;
      height: 27px;
      font-size: 28px;
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
  #ressucess {
    width: 100%;
    .sucessphone {
      width:100%;
      margin:50px auto;
      margin-top:100px;
      text-align: center;
      span {
        width: 247px;
        height: 28px;
        font-size: 36px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
    }
    .message {
      width:100%;
      margin:0px auto;
      text-align: center;
      span {
        width:210px;
        height:46px;
        font-size:48px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(34,34,34,1);
      }
    }
    .word {
      width:95%;
      margin:50px auto;
      text-align: center;
      span {
        width:596px;
        height:125px;
        font-size:36px;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:#959595;
      }
    }
    .linktext {
      width:100%;
      margin-left:25px;
      margin-bottom: 50px;
      span {
        width: 268px;
        height: 29px;
        font-size: 30px;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
    }
    .link {
      width:100%;
      margin-left:25px;
       margin-bottom: 50px;
      a {
        width: 605px;
        height: 32px;
        font-size: 30px;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(0, 150, 255, 1);
      }
    }
    .copy {
      text-align: center;
      width: 670px;
      height: 88px;
      line-height:88px;
      background: linear-gradient(
        90deg,
        rgba(255, 22, 124, 1),
        rgba(253, 28, 72, 1)
      );
      border-radius: 44px;
      span {
        width: 144px;
        height: 34px;
        font-size: 36px;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
