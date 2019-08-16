<template>
  <div id="Wealthcenter">
    <div class="wealthheader">
      <el-image :src="imgUrl" fit="fill"></el-image>
      <div class="headertop">
        <div class="headertitle">
          <span>可提现余额(元）</span>
        </div>
        <div class="headerbox">
          <div class="boxtop">
            <div class="leftbox">
              <span>12800.00</span>
            </div>
            <div class="rightbox">
              <div class="rightChild">
                <span class="right_tu"></span>
                <span class="right_price">提现</span>
              </div>
            </div>
          </div>
          <div class="boxbottom">
            <!-- <div class="pricesbox"> -->
            <div class="pricesbox-left">
              <div class="box_top">
                <span>12800.00</span>
              </div>
              <div class="box_text">
                <span>已提现总额(元）</span>
              </div>
            </div>
            <div class="pricesbox-left">
              <div class="box_top">
                <span>600.00</span>
              </div>
              <div class="box_text">
                <span>提现中金额(元）</span>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="wealthtitles">
      <div class="wtbox">
        <span>财富总额</span>
      </div>
    </div>
    <div class="totalwealths">
      <div class="totalwealth">
        <div class="totalnum">
          <span>￥1500888.00</span>
        </div>
        <div class="totalbox">
          <div class="totalchild">
            <div class="totalprice">
              <span>1500888.00</span>
            </div>
            <div class="totaltext">
              <span>出售金额</span>
            </div>
          </div>
          <div class="totalchild">
            <div class="iconimage">
              <el-image :src="withdrawable" fit="fill"></el-image>
            </div>
            <div class="totalprice">
              <span>1508.00</span>
            </div>
            <div class="totaltext">
              <span>供货商出货佣金</span>
            </div>
          </div>
          <div class="totalchild">
            <div class="iconimage">
              <el-image :src="withdrawable" fit="fill"></el-image>
            </div>
            <div class="totalprice">
              <span>1588.00</span>
            </div>
            <div class="totaltext">
              <span>网红出货佣金</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="totalpurchase">
      <div class="purchbox">
        <span>进货总额</span>
      </div>
    </div>
    <div class="totalpurtext">
      <span>￥660888.00</span>
    </div>
     <div class="list" @click="godiscount">
        <div class="list-left">
          <span>提现记录</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wealthcenter",
  data() {
    return {
      imgUrl: require("../assets/images/wealthbg.png"),
      withdrawable: require("../assets/images/withdrawable.png")
    };
  },
  methods:{
     godiscount(){
      this.$router.push('/discountrecord');
    }
  }
};
</script>

<style lang="scss" scoped>
#Wealthcenter {
  position: fixed;
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  .wealthheader {
    .el-image {
      position: absolute;
      width: 100%;
    }
    .headertop {
      position: relative;
      .headertitle {
        padding: 50px 20px;
        span {
          width: 203px;
          height: 29px;
          font-size: 30px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          line-height: 44px;
        }
      }
      .headerbox {
        width: 95%;
        height: 400px;
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        margin: 0 20px;
        position: absolute;
        .boxtop {
          margin: 25px;
          padding-top: 20px;
          height: 200px;
          background: rgba(253, 28, 72, 1);
          border-radius: 20px;
          line-height: 200px;
          overflow: hidden;
          .leftbox {
            float: left;
            margin-left: 20px;
            span {
              width: 224px;
              height: 46px;
              font-size: 60px;
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              line-height: 44px;
            }
          }
          .rightbox {
            float: right;
            width: 203px;
            height: 78px;
            line-height: 79px;
            box-shadow: 0px 0px 24px 0px rgba(235, 53, 76, 0.4);
            margin-right: -20px;
            margin-top: 45px;
            overflow: hidden;
            .rightChild {
              background-color: #fff;
              width: 203px;
              height: 78px;
              box-shadow: 0px 0px 24px 0px rgba(235, 53, 76, 0.4);
              border-radius: 20px;
              .right_tu {
                width: 33px;
                line-height: 32px;
                margin-left: 20px;
                margin-top: 20px;
                display: inline-block;
                height: 32px;
                background: #ffc5d0;
                border-radius: 50%;
              }
              .right_price {
                display: inline-block;
                margin-left: 30px;
                // width: 59px;
                height: 32px;
                line-height: 32px;
                font-size: 30px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: rgba(253, 28, 72, 1);
              }
            }
          }
        }
        .boxbottom {
          display: flex;
          justify-content: space-around;
          .pricesbox-left {
            .box_top {
              text-align: center;
              span {
                //  width: 109px;
                height: 23px;
                font-size: 30px;
                font-family: PingFang-SC-Bold;
                font-weight: bold;
                color: rgba(34, 34, 34, 1);
                line-height: 44px;
              }
            }
            .box_text {
              text-align: center;
              span {
                // width: 163px;
                height: 23px;
                font-size: 24px;
                font-family: PingFang-SC-Regular;
                font-weight: bold;
                color: rgba(137, 137, 137, 1);
                line-height: 44px;
              }
            }
          }
        }
      }
    }
  }
  .wealthtitles {
    margin-left: 15px;
    margin-top: 455px;
    .wtbox {
      span {
        width: 121px;
        height: 30px;
        font-size: 30px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 44px;
      }
    }
  }
  .totalwealths {
    // width:100%;
    height: 330px;
    margin: 15px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    .totalwealth {
      margin-top: 30px;
      .totalnum {
        text-align: center;
        height: 140px;
        line-height: 140px;
        border-bottom: 2px solid rgba(238, 238, 238, 1);
        span {
          width: 226px;
          height: 28px;
          font-size: 36px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(255, 22, 124, 1);
          line-height: 44px;
        }
      }
      .totalbox {
        display: flex;
        justify-content: space-around;
        .totalchild {
          height: 160px;
          line-height: 50px;
          text-align: center;
          .iconimage {
            width: 76px;
            height: 29px;
            position: absolute;
            margin-left: 110px;
            margin-top: 10px;
          }
          .totalprice {
            margin-top: 40px;
            span {
              width: 165px;
              height: 23px;
              font-size: 30px;
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              color: rgba(34, 34, 34, 1);
              line-height: 44px;
            }
          }
          .totaltext {
            span {
              width: 95px;
              height: 23px;
              font-size: 24px;
              font-family: PingFang-SC-Regular;
              font-weight: bold;
              color: rgba(137, 137, 137, 1);
              line-height: 44px;
            }
          }
        }
      }
    }
  }

  .totalpurchase {
    margin-left: 15px;
    .purchbox {
      span {
        width: 121px;
        height: 30px;
        font-size: 30px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 44px;
      }
    }
  }
  .totalpurtext {
    margin: 15px;
    height: 130px;
    line-height: 130px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    text-align: center;
    span {
      width: 204px;
      height: 28px;
      font-size: 36px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(255, 22, 124, 1);
      line-height: 44px;
    }
  }
  .list {
      height: 100px;
      width:100%;
      line-height: 100px;
      width:100%;
      margin:0 15px;
      background: rgba(255, 255, 255, 1);
      .list-left {
        float:left;
        span {
          width:119px;
          height:29px;
          font-size:30px;
          font-family:PingFang-SC-Regular;
          font-weight:bold;
          color:rgba(34,34,34,1);
          line-height:44px;
        }
      }
      .list-right {
        float:right;
        margin-right:30px;
        .el-icon-arrow-right{
          font-size: 38px;
          font-weight: 800;
          background: rgba(255, 255, 255, 1);
        }
      }
    }
}
</style>