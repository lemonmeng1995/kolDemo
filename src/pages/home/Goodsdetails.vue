<template>
  <div id="goodstails">
    <div class="goodsbox">
      <div class="banner">
        <el-image :src="image.imagesOne" :fit="fill"></el-image>
      </div>
      <div class="textdetail">
        <div class="detailtop">
          <div class="detailprices">
            <span>网红专属价￥870</span>
          </div>
          <div class="public">
            <span>公开供货价￥970</span>
          </div>
        </div>
        <div class="detailbottom">
          <span>市场建议价￥1200</span>
        </div>
      </div>
      <div class="titledetail">
        <div class="title">
          <span>芙丽芙丽 Folli Follie LADY BUBBLE系列轻奢时芙丽芙丽 Folli Follie LADY BUBBLE系列轻奢时</span>
        </div>
        <div class="dsc">
          <div class="dsc-ts">
            <span>库存1000</span>
          </div>
          <div class="dsc-icon">
            <el-image :src="image.samples" :fit="fill"></el-image>
          </div>
        </div>
      </div>
      <div class="parameter">
        <div @click="sku.drawer = true" class="parameter-sku">
          <div class="parameter-left">
            <span class="rectangular"></span>
            <span>SKU</span>
          </div>
          <div class="parameter-right">
            <span>查看更多</span>
            <el-image :src="image.ArrowRightIcon" :fit="fill"></el-image>
          </div>
        </div>
        <div @click="parameter.drawer = true" class="parameter-sku">
          <div class="parameter-left">
            <span class="rectangular"></span>
            <span>规格参数</span>
          </div>
          <div class="parameter-right">
            <span>查看更多</span>
            <el-image :src="image.ArrowRightIcon" :fit="fill"></el-image>
          </div>
        </div>
      </div>
      <div class="goods">
        <div class="goods-title">
          <span class="rectangular"></span>
          <span>商品详情</span>
        </div>
        <div class="tpdetail">
          <el-image :src="image.imagesOne" :fit="fill"></el-image>
        </div>
      </div>
      <div class="goodsbtm">
        <div class="goodsbtm-box">
          <div class="goodsbtm-left"  @click="gomyselection">
            <div class="left-img">
              <el-image :src="image.myselection" :fit="fill"></el-image>
            </div>
            <div class="left-text">
              <span>我的选品</span>
            </div>
          </div>
          <div class="goodsbtm-right">
            <span class="right-l">
              <span>直接铺货到平台</span>
            </span>
            <span class="right-r">
              <span>加入我的选品</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <el-drawer
      title="SKU"
      size="60%"
      :visible.sync="sku.drawer"
      :direction="sku.direction"
      :before-close="handleClose"
    >
      <div class="sku">
        <div class="skubox">
          <div class="sku-title">
            <span>颜色</span>
          </div>
          <div class="sku-list">
            <div>
              <span>黄色</span>
            </div>
            <div>
              <span>黄色</span>
            </div>
            <div>
              <span>黄色</span>
            </div>
          </div>
        </div>
        <div class="skubox">
          <div class="sku-title">
            <span>尺码</span>
          </div>
          <div class="sku-list">
            <div>
              <span>35</span>
            </div>
            <div>
              <span>36</span>
            </div>
            <div>
              <span>37</span>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
    <el-drawer
      title="规格参数"
      size="60%"
      :visible.sync="parameter.drawer"
      :direction="parameter.direction"
      :before-close="handleCloseparameter"
    >
      <div class="parameter-drawer">
        <div class="parabox">
          <div class="parabox-left">
            <span>颜色</span>
          </div>
          <div class="parabox-right">
            <span>黄色</span>
          </div>
        </div>
         <div class="parabox">
          <div class="parabox-left">
            <span>品牌</span>
          </div>
          <div class="parabox-right">
            <span>天骏（TISSOT）</span>
          </div>
        </div>
         <div class="parabox">
          <div class="parabox-left">
            <span>产地</span>
          </div>
          <div class="parabox-right">
            <span>瑞士</span>
          </div>
        </div>
         <div class="parabox">
          <div class="parabox-left">
            <span>颜色</span>
          </div>
          <div class="parabox-right">
            <span>黄色</span>
          </div>
        </div>
         <div class="parabox">
          <div class="parabox-left">
            <span>品牌</span>
          </div>
          <div class="parabox-right">
            <span>天骏（TISSOT）</span>
          </div>
        </div>
         <div class="parabox">
          <div class="parabox-left">
            <span>产地</span>
          </div>
          <div class="parabox-right">
            <span>瑞士</span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Goodsdetails",
  data() {
    return {
      image: {
        imagesOne: require("../../assets/images/1.png"),
        imagesTwo: require("../../assets/images/2.png"),
        samples: require("../../assets/images/samples.png"),
        ArrowRightIcon: require("../../assets/images/ArrowRightIcon.png"),
        myselection: require("../../assets/images/myselection.png")
      },
      sku: {
        drawer: false,
        direction: "btt"
      },
      parameter: {
        drawer: false,
        direction: "btt"
      }
    };
  },
  methods: {
    handleClose(done) {
      this.sku.drawer = false;
    },
    handleCloseparameter(done) {
      this.parameter.drawer = false;
    },
    gomyselection(){
        this.$router.push('/myselection');
    }
  }
};
</script>

<style lang="scss" scoped>
#goodstails {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  .goodsbox {
    .banner {
      width: 100%;
      height: 750px;
      .el-image {
        width: 100%;
        height: 100%;
      }
    }
    .textdetail {
      width: 100%;
      height: 130px;
      background: rgba(62, 62, 62, 1);
      .detailtop {
        display: flex;
        justify-content: space-between;
        .detailprices {
          margin: 15px;
          span {
            width: 253px;
            height: 39px;
            font-size: 28px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
        .public {
          margin: 15px;
          span {
            width: 232px;
            height: 30px;
            font-size: 28px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .detailbottom {
        margin: 15px;
        span {
          width: 208px;
          height: 23px;
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(145, 145, 145, 1);
        }
      }
    }
    .titledetail {
      // padding:10px auto;
      height: 228px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      .title {
        margin: 15px;
        span {
          // width:708px;
          height: 69px;
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
        }
      }
      .dsc {
        display: flex;
        justify-content: space-between;
        margin: 15px;
        .dsc-ts {
          margin-top: 15px;
          span {
            width: 109px;
            height: 24px;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(181, 181, 181, 1);
          }
        }
        .dsc-icon {
          width: 96px;
          height: 92px;
          overflow: hidden;
        }
      }
    }
    .parameter {
      height: 202px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      margin: 15px auto;
      .parameter-sku {
        height: 100px;
        display: flex;
        justify-content: space-between;
        line-height: 100px;

        .parameter-left {
          margin-left: 15px;
          span {
            width: 65px;
            height: 25px;
            font-size: 32px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(34, 34, 34, 1);
            margin-left: 10px;
          }
          .rectangular {
            width: 6px;
            display: inline-block;
            height: 29px;
            background: linear-gradient(
              0deg,
              rgba(255, 180, 0, 1),
              rgba(254, 216, 0, 1)
            );
          }
        }
        .parameter-right {
          margin-right: 20px;
          span {
            width: 105px;
            height: 24px;
            font-size: 26px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(154, 154, 154, 1);
            margin-right: 20px;
          }
          .el-image {
            width: 14px;
            height: 23px;
            background: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    .goods {
      width: 100%;
      background: rgba(255, 255, 255, 1);
      margin-bottom: 110px;
      .goods-title {
        height: 150px;
        line-height: 150px;
        margin-left: 15px;
        span {
          width: 65px;
          height: 25px;
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          margin-left: 10px;
        }
        .rectangular {
          width: 6px;
          display: inline-block;
          height: 29px;
          background: linear-gradient(
            0deg,
            rgba(255, 180, 0, 1),
            rgba(254, 216, 0, 1)
          );
        }
      }
      .tpdetail {
        width: 100%;
        height: 790px;
        .el-image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .goodsbtm {
      position: fixed;
      bottom: 0px;
      width: 100%;
      height: 100px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(229, 229, 229, 1);
      .goodsbtm-box {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        .goodsbtm-left {
          width: 20%;
          margin: 0 auto;
          text-align: center;
          .left-img {
            width: 38px;
            height: 38px;
            margin: 0 auto;
            border-radius: 6px;
          }
          .left-text {
            span {
              width: 97px;
              height: 23px;
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
            }
          }
        }
        .goodsbtm-right {
          border-radius: 55px;
          height: 80px;
          overflow: hidden;
          .right-l {
            width: 261px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            display: inline-block;
            background: linear-gradient(
              90deg,
              rgba(255, 180, 0, 1),
              rgba(254, 216, 0, 1)
            );
            span {
              width: 207px;
              height: 29px;
              font-size: 30px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 36px;
            }
          }
          .right-r {
            width: 261px;
            height: 80px;
            display: inline-block;
            text-align: center;
            line-height: 80px;
            margin-left: -5px;
            background: linear-gradient(
              90deg,
              rgba(255, 22, 124, 1),
              rgba(253, 28, 72, 1)
            );
            span {
              width: 183px;
              height: 29px;
              font-size: 30px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }
}

/deep/ {
  .el-drawer__header > :first-child {
    width: 74px;
    margin: 0 auto;
    text-align: center;
    height: 28px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }
  .el-drawer .btt {
    height: 100%;
  }
}

.sku {
  .skubox {
    margin: 10px;
    .sku-title {
      margin-left: 25px;
      span {
        width: 63px;
        height: 31px;
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
    }
    .sku-list {
      padding: 20px;
      div {
        width: 700px;
        margin: 10px;
        height: 80px;
        line-height: 80px;
        background: rgba(243, 243, 243, 1);
        border-radius: 5px;
        span {
          width: 55px;
          height: 27px;
          font-size: 28px;
          margin-left: 25px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(149, 149, 149, 1);
        }
      }
    }
  }
}
.parameter-drawer {
    width:100%;
  .parabox {
     margin:15px;
     display: flex;
    .parabox-left {
        flex:1;
        margin-left:20px;
      span {
        width: 54px;
        height: 28px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(154, 154, 154, 1);
      }
    }
    .parabox-right {
        flex:3;
      span {
        width: 196px;
        height: 28px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
      }
    }
  }
}
</style>