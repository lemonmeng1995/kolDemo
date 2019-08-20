<template>
  <div id="editorPrice">
    <div class="title">
      <p class="text">售价设置</p>
      <p class="btn" @click="dialogVisible = true">批量设置</p>
    </div>
    <div class="content">
      <div class="contentbox">
        <p class="editor-one">白色-36</p>
        <p class="editor-two">供货价 ￥200</p>
        <p class="editor-three">
          输入售价
          <el-input placeholder="请输入内容" v-model="oneinput" clearable></el-input>
        </p>
      </div>
    </div>
    <Btn :text="text" @click.native="onsubmit"></Btn>
    <el-dialog :visible.sync="dialogVisible" width="90%" :before-close="handleClose">
      <el-input placeholder="请输入我的售价" v-model="oneinput" clearable></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Btn from "../btn/index";
export default {
  name: "EditorPrice",
  components: { Btn },
  data() {
    return {
      oneinput: "",
      text: "保存",
      dialogVisible: false
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    onsubmit(){
        console.log("234")
        this.$router.push('/addmaterial')
    }

  }
};
</script>

<style lang="scss" scoped>
#editorPrice {
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 1);
  .title {
    height: 100px;
    display: flex;
    justify-content: space-between;
    .text {
      height: 26px;
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      margin: 32px;
    }
    .btn {
      width: 134px;
      height: 50px;
      margin: 25px;
      text-align: center;
      background: linear-gradient(
        90deg,
        rgba(255, 180, 0, 1),
        rgba(254, 216, 0, 1)
      );
      border-radius: 25px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
    }
  }
  .content {
    height: 760px;
    background: rgba(255, 255, 255, 1);
    .contentbox {
      height: 190px;
      margin: 10px;
      .editor-one {
        padding-left: 40px;
        padding-top: 20px;
        width: 102px;
        height: 26px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
      }
      .editor-two {
        padding-left: 40px;
        padding-top: 20px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);
      }
      .editor-three {
        padding-left: 40px;
        padding-top: 20px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);
        .el-input {
          width: 490px;
          height: 54px;
        }
      }
    }
  }
  .el-button {
    width: 275px;
    height: 88px;
    border: 2px solid rgba(149, 149, 149, 1);
    border-radius: 44px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(149, 149, 149, 1);
    line-height: 4px;
  }
  .el-button--primary {
    width: 275px;
    height: 88px;
    background: linear-gradient(
      90deg,
      rgba(240, 15, 129, 1),
      rgba(253, 28, 72, 1)
    );
    border-radius: 44px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
</style>