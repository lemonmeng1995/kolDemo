<template>
  <div id="oneclickshop">
    <div class="clickbox">
      <p class="title">
        您已选择
        <span>20</span>
        款商品
      </p>
      <div class="sele">
        <p class="sele-left">选择需要铺货的店铺</p>
        <p class="sele-right">店铺授权</p>
      </div>
      <div class="shoplist">
          <div class="shopbox">
            <div class="shoplist-left">
                <img class="ricr" slot="icon" src="../../assets/images/hook.png" v-if="this.selected" @click="getHook">
                <img class="ricr" slot="icon" src="../../assets/images/ellipse.png" v-else @click="getHook">
           </div>
           <div class="shoplist-right">
              <span>淘宝-店铺A</span>
           </div>
          </div>
           <p class="totolshpo">您已选择9个店铺</p>
        
      </div>
      <div class="newbtn">
        <div class="btn">
          <span>确认铺货</span>
        </div>
        <p>
            以上列表如果缺少需要铺货的店，可以先去店铺
           授权进行授权
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Oneclickshop",
  data() {
    return {
        selected:false,
    };
  },
  methods:{
      getHook(){
          this.selected = !this.selected
      }
  }
};
</script>

<style lang="scss" scoped>
#oneclickshop {
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 1);
  position: fixed;
  .clickbox {
    margin: 0 auto;
    padding:15px;
    .title {
      height: 100px;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      line-height: 100px;
      span {
        color: #ff167c;
      }
    }
    .sele {
      display: flex;
      justify-content: space-between;
       height: 100px;
      line-height: 100px;
      .sele-left {
        height: 26px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        line-height: 40px;
      }
      .sele-right {
        width: 134px;
        height: 50px;
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
    .shoplist{
        height:652px;
        background:rgba(255,255,255,1); 
        .shopbox{
             display: flex;
             height:100px;
             margin:10px auto;
             background:rgba(255,255,255,1);
             border-radius:20px;
             line-height:100px;
             .shoplist-left{
                 width:5%;
                 margin:0 auto;
                 position: relative;
            .ricr{
                width:30px;
                height:30px;
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

            }

        }
        .shoplist-right{
            width:80%;
            span{           
            height:27px;
            margin-top:15px;
            width:100%;
            font-size:28px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(34,34,34,1);

            }
        }
   

        }
        .totolshpo{
            height:26px;
            margin:20px;
            font-size:28px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(34,34,34,1);
            line-height:40px;
            // position: fixed;
             bottom:0px;
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
      p{
          width:501px;
           text-align: center;
            height:53px;
             margin:10px auto;
            font-size:24px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(154,154,154,1);
            line-height:34px;
      }
    }
  }
}
</style>