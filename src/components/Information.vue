<template>
  <div id="information">
    <div class="inforbox">
      <div class="title">
        <span>完善资质信息</span>
      </div>
      <div class="form">
        <el-form ref="form" :model="form">
          <el-form-item label="成名网红昵称">
            <el-input v-model="form.name" placeholder="请输入成名时的网红昵称"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form">
          <el-form-item label="拥有粉丝数">
            <el-input v-model="form.num" placeholder="请输入拥有粉丝数"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form">
          <el-form-item label="联系人">
            <el-input v-model="form.tel" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form">
          <el-form-item label="手机号">
            <el-input v-model="form.phone" placeholder="请输入联系人手机号"></el-input>
          </el-form-item>
        </el-form>
        <div class="centers">
          <div class="centertitle">
            <span>个人中心数截图</span>
          </div>
          <div class="centerupload">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="bottomts">
              <span>请提供你在网红平台的个人中心截图</span>
          </div>
        </div>
      </div>
      <div class="newbtn">
        <div class="btn">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      form: {
        name: "",
        num: "",
        tel: "",
        phome: "",
        centers: ""
      },
      imageUrl: '',
    };
  },
     methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
};
</script>

<style lang="scss" scoped>
#information {
  .inforbox {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(243, 243, 243, 1);
    .title {
      padding: 30px;
      span {
        width: 178px;
        height: 29px;
        font-size: 30px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }
    .form {
      // width:710px;
      height: 1050px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      margin: 20px;
      padding: 20px;
      /deep/ .el-form-item__label {
        // width:178px;
        // height:28px;
        font-size: 30px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }
      .centers {
        .centertitle {
          span {
            font-size: 30px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(0, 0, 0, 1);
          }
        }
        .centerupload /deep/{
            width:50%;
            margin:30px;
          .avatar-uploader .el-upload {
            border: 2px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          .avatar-uploader .el-upload:hover {
            border-color: #409eff;
          }
          .avatar-uploader-icon {
            font-size: 40px;
            color: rgba(193,193,193,1);
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;       
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
        }
      }
    }
    .bottomts{
        span{
            width:414px;
            height:25px;
            font-size:26px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(253,28,73,1);
        }
    }
    .newbtn {
      text-align: center;
      position: fixed;
      bottom: 100px;
      .btn {
        width: 690px;
        height: 88px;
        text-align: center;
        line-height: 88px;
        margin:0 auto;
        background: linear-gradient(
          90deg,
          rgba(240, 15, 129, 1),
          rgba(253, 28, 72, 1)
        );
        border-radius: 44px;
        span {
          width: 142px;
          height: 34px;
          font-size: 36px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 52px;
        }
      }
    }
  }
}
</style>