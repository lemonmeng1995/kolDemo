<template>
  <div id="addmaterial">
    <div class="addbox">
      <div class="material-title">
        <p class="title-text">产品标题</p>
        <el-input
          type="textarea"
          placeholder="例如：网红爆款韩版复古丝袜 不勾丝袜"
          v-model="textarea"
          maxlength="60"
          show-word-limit
        ></el-input>
      </div>
      <div class="productplan">
        <p class="productplan-title">产品主图</p>
        <p class="productplan-desc">可根据您自己的素材更改替换掉原来供应商提供的主图</p>
        <div class="productplan-img">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>

      <Btn :text="name"></Btn>
    </div>
    <div class="editorprice action">
      <p class="editorprice-title">编辑售价</p>
      <p class="editorprice-price">
        ￥298.00-￥310.00
        <img :src="img.ArrowRightIcon" />
      </p>
    </div>
     <div class="editorprice">
      <p class="editorprice-title">商品分类</p>
      <p class="editorprice-price">
       女鞋>凉鞋>凉鞋
       
      </p>
    </div>
     <div class="editorprice">
      <p class="editorprice-title">详情页</p>
      <p class="editorprice-price">
        <img :src="img.ArrowRightIcon" />
      </p>
    </div>
     <div class="editorprice">
      <p class="editorprice-title">运费模板</p>
      <p class="editorprice-price">
        模板20190305
      </p>
    </div>
  </div>
</template>

<script>
import Btn from "../btn/index";
export default {
  name: "Addmaterial",
  components: { Btn },
  data() {
    return {
      name: "确认保存",
      textarea: "",
      dialogImageUrl: "",
      visibleimg: false,
      img: {
        reddele: require("../../assets/images/reddele.png"),
        ArrowRightIcon: require("../../assets/images/ArrowRightIcon.png")
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.visibleimg = true;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#addmaterial {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  .addbox {
    background: #fff;
    margin-top: 20px;
    // height: 150px;
    .material-title {
      p {
        font-size: 30px;
        padding: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 48px;
      }
      /deep/ .el-input__count {
        top: -60px;
        width: 62px;
        height: 27px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(170, 170, 170, 1);
        line-height: 48px;
      }
      /deep/ .el-textarea__inner {
        height: 120px;
      }
    }
    .productplan {
      .productplan-title {
        padding: 20px;
        height: 29px;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 48px;
      }
      .productplan-desc {
        padding: 20px;
        height: 23px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(170, 170, 170, 1);
        line-height: 48px;
      }

      .productplan-img /deep/ {
        .el-upload--picture-card,
        .el-upload-list--picture-card .el-upload-list__item {
          margin: 20px 10px;
          width: 160px;
          height: 160px;
          background: rgba(255, 255, 255, 1);
          line-height: 160px;
          border-radius: 10px;
          .el-icon-plus {
            line-height: 160px;
          }
        }
        .el-upload-list__item.is-success .el-upload-list__item-status-label {
          display: none;
        }
        .el-upload-list--picture-card .el-upload-list__item-actions:hover {
          display: none;
        }
      }
    }
  }
  .action{
      margin-top:15px;
      margin-bottom: 15px;

  }
  .editorprice {
    height: 99px;
    background: rgba(255, 255, 255, 1);
    display:flex;
    justify-content:space-between;
    
    .editorprice-title {
      height: 29px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      line-height: 48px;
      padding:20px;
    }
    .editorprice-price {
      height: 21px;
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      line-height: 48px;
       padding:20px;
      img {
        width: 12px;
        margin-left:10px;
        height: 20px;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>