<template>
  <div id="storeauth">
    <div class="storeheader">
      <span>已授权店铺列表</span>
    </div>
    <div class="storelist">
      <div class="listcontect">
        <div class="contect-left">淘宝-店铺A</div>
        <div class="contect-right">删除授权</div>
      </div>
      <div class="listcontect">
        <div class="contect-left">淘宝-店铺A</div>
        <div class="contect-right">删除授权</div>
      </div>
      <div class="listcontect">
        <div class="contect-left">淘宝-店铺A</div>
        <div class="contect-right">删除授权</div>
      </div>
    </div>
    <div class="newbtn">
      <div class="btn">
        <span>新增授权</span>
      </div>
      <!-- <div class="bacnicon">
          <span><i class="el-icon-arrow-left"></i></span>
          <span><i class="el-icon-arrow-right"></i></span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "storeauth"
};
</script>

<style lang="scss" scoped>
#storeauth {
  background: rgba(243, 243, 243, 1);
  position:fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height:100%;
  .storeheader {
    padding: 20px;
    span {
      width: 206px;
      height: 28px;
      font-size: 30px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      line-height: 48px;
    }
  }
  .storelist {
    background: rgba(255, 255, 255, 1);
    width: 100%;
    .listcontect {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid #eee;
      .contect-left {
        // height: 29px;
        font-size: 30px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        line-height: 48px;
      }
      .contect-right {
        // height: 27px;
        font-size: 28px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(255, 22, 124, 1);
        line-height: 48px;
      }
    }
  }
  .newbtn {
    text-align: center;
    position: fixed;
    bottom: 100px;
    width:100%;
    
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
</style>