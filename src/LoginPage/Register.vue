<template>
  <div id="register">
    <div v-if="islogin">
      <div class="registerheader">
        <el-row>
          <el-col :span="12">
            <div>
              <span class="registercss">注册</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="registform">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="手机号">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            <div class="getcode">
              <span @click="onGetcode">获取验证码</span>
            </div>
          </el-form-item>
          <el-form-item label="设置密码">
            <el-input v-model="form.password" placeholder="请设置登录密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.passwordTow" placeholder="请再次输入登录密码" show-password></el-input>
          </el-form-item>
          <div class="regesterword">
            <span>手机号将作为您注册及登录网红端平台的账号，后续提现操作也将用于接受短信验证码，请务必准确填写</span>
          </div>
          <div class="checkbox">
            <span>
              <el-checkbox v-model="checked">
                <span>
                  我已同意《
                  <span :style="{color:'#FF4791'}">网红入驻及服务协议</span>》
                </span>
              </el-checkbox>
            </span>
          </div>
          <div class="submitcss" @click="onSubmit">
            <span>注 册 并 登 入</span>
          </div>
        </el-form>
      </div>
    </div>
    <div v-else class="islogincss">
      <div class="isphone">
        <span>186****9658</span>
      </div>
      <div class="isbtnlogin">
        <span>登入雀信</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      checked: false,
      islogin: true,
      form: {
        phone: "",
        password: "",
        code: "",
        passwordTow: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit", this.form);
      this.islogin = false;
    },
    onGetcode() {
      console.log("获取验证码");
    }
  }
};
</script>

<style lang="scss" scoped>
#register {
  width: 100%;
  .registerheader {
    margin-top: 55px;
    margin-bottom: 50px;
    width: 100%;
    text-align: left;
  }
  .registercss {
    width: 93px;
    height: 45px;
    margin-left: 48px;
    font-size: 48px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }
  .registform {
    margin-top: 30px;
    .el-form-item {
      border-bottom: 2px solid rgba(220, 220, 220, 1);
    }
    /deep/ .el-form-item__label {
      width: 70px;
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
  .regesterword {
    margin-top: 100px;
    margin-left: 10px;
  }
  .regesterword span {
    height: 60px;
    font-size: 24px;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(154, 154, 154, 1);
    line-height: 36px;
  }
  .regesterword .el-icon-warning-outline {
    color: #d4380d;
  }
  .checkbox {
    margin-top: 100px;
    width: 92%;
    margin-left: 10px;
  }

  .el-checkbox__input .is-checked .el-checkbox__label {
    width: 332px;
    height: 21px;
    font-size: 22px;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
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
  .submitcss {
    width: 670px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    margin: 20px auto;
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

  .islogincss {
    .isphone {
      width: 100%;
      margin: 100px auto;
      margin-top: 100px;
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
    .isbtnlogin {
      text-align: center;
      width: 670px;
      margin: 0 auto;
      height: 88px;
      line-height: 88px;
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
