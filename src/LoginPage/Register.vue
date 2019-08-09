<template>
    <div id="register">
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
        <div class="formcss">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="手 机 号">
              <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验 证 码">
              <el-input v-model="form.code" placeholder="请输入验证码" ></el-input>
              <span class="getcode" @click="onGetcode">获取验证码</span>
            </el-form-item>
             <el-form-item label="设置密码">
              <el-input v-model="form.password" placeholder="请设置登录密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="form.passwordTow" placeholder="请再次输入登录密码" show-password></el-input>
            </el-form-item>
            <div class="regesterword">
              <span>
                <i class="el-icon-warning-outline">
                  </i>手机号将作为您注册及登录网红端平台的通行账号，
                  后续提现操作也将用于接收短信验证码，请务必准确填写
              </span>
            </div>
            <div class="checkbox">
              <span> 
                <el-checkbox v-model="checked"> 
                  <span>我已同意《<span :style="{color:'#0094ff'}">网红入驻及服务协议</span>》</span>
                  </el-checkbox>
                </span>  
            </div>
            <div class="submitcss">
              <el-button type="warning" @click="onSubmit">注册</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {
    name:"Register",
    data(){
        return {
             checked:false,
               form: {
                    phone: "",
                    password: "",
                    code:"",
                    passwordTow:"",
                }
        }
    },
    methods: {
    onSubmit() {
      console.log("submit", this.form);
    },
    onGetcode(){
        console.log("获取验证码")
    }
  }

}
</script>

<style lang="scss" scoped>
#register{
  width:100%;
  .registerheader {
    margin: 10px;
  }
  .registercss {
    float: left;
    font-weight: 800;
  }
  .regesterword{
    width:80%;
    margin:0 auto
  }
  .regesterword span{
    color:rgb(37, 33, 33);
    font-size:12px;
    

  }
   .regesterword .el-icon-warning-outline{
     color:#d4380d

  }
  .checkbox{
    margin-top:50px
  }

  .el-checkbox__input .is-checked .el-checkbox__label{
    color:#000
  }
  .el-button--warning {
    width: 90%;
    background-color: #fa541c;
  }
  .getcode{
      float:right;
      margin-top:-40px;
      margin-right:10px;
      z-index:999;
      color:#ff7a45;
      position: relative
  }

}

</style>
