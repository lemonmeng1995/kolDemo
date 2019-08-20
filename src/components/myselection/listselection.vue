<template>
  <div id="listselection">
    <div class="list-content">
      <div class="left">
        <el-image :src="image.imagesOne" :fit="fill"></el-image>
      </div>
      <div class="right">
        <div class="right-title">
          <span>迪卡侬运动圆领T恤女夏季速干短袖跑步健身运动女大码夏装</span>
        </div>
        <div class="right-desc">
          <span>公有库存1000</span>
          <span>市场建议价￥5.00</span>
          <p>供货给我￥112.00-￥112.00</p>
          <p>我的售价￥258.00-268.00</p>
        </div>
      </div>
    </div>
    <div class="list-bottom">
      <div class="listbox">
        <p @click="onGetprice">编辑售价</p>
        <p>移出商品</p>
        <p>铺货</p>
        <p>编辑/增加素材</p>
        <!-- <el-button round>编辑售价</el-button>
                    <el-button round>移出商品</el-button>
                    <el-button round>铺货</el-button>
        <el-button round>编辑/增加素材</el-button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listselection",
  data() {
    return {
      image: {
        imagesOne: require("../../assets/images/1.png"),
        ellipse: require("../../assets/images/ellipse.png"),
        hook: require("../../assets/images/hook.png")
      }
    };
  },
  methods: {
    onGetprice() {
      console.log("123");
      this.$router.push("/editorPrice");
    }
  }
};
</script>

<style lang="scss" scoped>
#listselection {
  .list-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 221px;
    .left {
      width: 20%;
      height: 100%;
      background: rgba(248, 248, 248, 1);
      border-radius: 4px;
      .el-image {
        width: 84px;
        height: 102px;
        position: relative; /*脱离文档流*/
        top: 20%; /*偏移*/
      }
    }
    .right {
      width: 80%;
      text-align: left;
      .right-title {
        span {
          width: 508px;
          height: 57px;
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
          line-height: 32px;
        }
      }
      .right-desc {
        span,
        p {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(136, 136, 136, 1);
          line-height: 34px;
          margin-top: 5px;
        }
      }
    }
  }
  .list-bottom {
    .listbox {
      display: flex;
      justify-content: space-around;
      p {
        height: 58px;
        line-height: 58px;
        border: 1px solid rgba(255, 22, 124, 1);
        border-radius: 29px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 26px;
      }
    }
  }
}
</style>