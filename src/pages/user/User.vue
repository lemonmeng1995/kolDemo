<template>
  <div id="user">
    <div class="userherader">
      <div class="headertop">
        <div class="left">
          <el-image :src="imagesOne" fit="fill"></el-image>
        </div>
        <div class="center">
          <div class="name">
            <span>OMG-VIVI</span>
          </div>
          <div class="phone">
            <span class="tel">密保手机 135****2525</span>
            <span class="binded">
              <span>已绑定</span>
            </span>
          </div>
        </div>
        <div class="right">
          <div class="righttext" @click="goFinishinfo">
            <span>提交资质</span>
          </div>
        </div>
      </div>
      <div class="headerbom">
        <div class="totalwealth">
          <span>财富总额</span>
        </div>
        <div class="money">
          <span>￥1500888.00</span>
        </div>
        <div class="monetlist">
          <div class="listone">
            <div class="listone_left">
              <el-image :src="image.totalpurchase" fit="fill"></el-image>
            </div>
            <div class="listone-right">
              <div class="right-one">
                <span>￥120888.00</span>
              </div>
              <div class="right-two">
                <span>
                  进货总额
                  <i class="el-icon-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="listone">
            <div class="listone_left">
              <el-image :src="image.saleamount" fit="fill"></el-image>
            </div>
            <div class="listone-right">
              <div class="right-one">
                <span>￥120888.00</span>
              </div>
              <div class="right-two">
                <span>
                  出售金额
                  <i class="el-icon-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="listone">
            <div class="listone_left">
              <el-image :src="image.suppliers" fit="fill"></el-image>
            </div>
            <div class="listone-right">
              <div class="right-one">
                <span>￥120888.00</span>
              </div>
              <div class="right-two">
                <span>
                  供应商出货佣金
                  <i class="el-icon-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="listone">
            <div class="listone_left">
              <el-image :src="image.netred" fit="fill"></el-image>
            </div>
            <div class="listone-right">
              <div class="right-one">
                <span>￥120888.00</span>
              </div>
              <div class="right-two">
                <span>
                  网红出货佣金
                  <i class="el-icon-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="userlist">
      <div class="list">
        <div class="list-left">
          <span>我的选品管理</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
       <div class="list" @click="goWealthcenter">
        <div class="list-left">
          <span>我的财富管理</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
       <div class="list" @click="goStoreauth">
        <div class="list-left">
          <span>授权店铺管理</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
       <div class="list"  @click="goInvited">
        <div class="list-left">
          <span>我邀请的供应商</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
       <div class="list"  @click="goInvited">
        <div class="list-left">
          <span>我邀请的网红</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
        <div class="list">
        <div class="list-left">
          <span>客服中心</span>
        </div>
        <div class="list-right">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      image: {
        totalpurchase: require("../../assets/images/totalpurchase.png"),
        saleamount: require("../../assets/images/saleamount.png"),
        suppliers: require("../../assets/images/suppliers.png"),
        netred: require("../../assets/images/netred.png")
      },
      imagesOne: require("../../assets/images/1.png")
    };
  },
   methods:{
    goStoreauth(){
      this.$router.push('/storeAuth');
    },
    goFinishinfo(){
      this.$router.push('/information');

    },
    goWealthcenter(){
      this.$router.push('/wealthcenter');

    },
    goInvited(){
      this.$router.push('/invitedpeople')

    }
  }
};
</script>

<style lang="scss" scoped>
#user {
  width: 100%;
  margin-bottom: 100px;
  .userherader {
    height: 497px;
    background: linear-gradient(
      90deg,
      rgba(255, 22, 124, 1),
      rgba(253, 28, 72, 1)
    );
    .headertop {
      display: flex;
      padding-top: 25px;
      overflow: hidden;
      .left {
        flex: 1;
        text-align: center;
        .el-image {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .center {
        flex: 3;
        .name {
          margin-bottom: 10px;
          span {
            width: 142px;
            height: 23px;
            font-size: 30px;
            font-family: PingFang-SC-Medium;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;
          }
        }
        .phone {
          .tel {
            width: 259px;
            height: 23px;
            font-size: 24px;
            font-family: PingFang-SC-Medium;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;
          }
          .binded {
            width: 100px;
            text-align: center;
            // height: 35px;
            // line-height: 35px;
            display: inline-block;
            border-radius: 20px;
            background: linear-gradient(
              90deg,
              rgba(255, 180, 0, 1),
              rgba(254, 216, 0, 1)
            );
            span {
              width: 60px;
              // height:19px;
              font-size: 20px;
              font-family: PingFang-SC-Medium;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              // line-height:44px;
            }
          }
        }
      }
      .right {
        flex: 1;
        .righttext {
          width: 190px;
          height: 60px;
          background: #b90024;
          opacity: 0.7;
          border-radius: 30px;
          text-align: center;
          line-height: 60px;
          margin-top: 20px;
          margin-right: -22px;
          span {
            width: 109px;
            height: 27px;
            font-size: 28px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;
          }
        }
      }
    }
    .headerbom {
      margin: 50px 20px;
      height: 450px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 22px 0px rgba(181, 181, 181, 0.4);
      border-radius: 20px;
      .totalwealth {
        text-align: center;
        padding-top: 20px;
        span {
          width: 121px;
          height: 29px;
          font-size: 30px;
          font-family: PingFang-SC-Medium;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          line-height: 44px;
        }
      }
      .money {
        text-align: center;
        padding-top: 20px;
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
      .monetlist {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        // padding-top:15px;
        padding: 15px;
        border-radius: 2px solid rgba(238, 238, 238, 1);
        .listone {
          width: 45%;
          .listone_left {
            float: left;
            margin-left: 20px;
            margin-top: 30px;
            /deep/ .el-image__inner {
              width: 32px;
              height: 34px;
              border-radius: 4px;
            }
          }
          .listone-right {
            float: right;
            width:80%;
            margin-right: "20px";
            .right-one {
              margin: 10px;
              span {
                width: 166px;
                height: 22px;
                font-size: 28px;
                font-family: PingFang-SC-Bold;
                font-weight: bold;
                color: rgba(34, 34, 34, 1);
                line-height: 44px;
                /deep/ i {
                  width: 14px;
                  height: 23px;
                  background: rgba(255, 255, 255, 1);
                }
              }
            }
            .right-two {
              margin: 10px;
              span {
                width: 97px;
                height: 23px;
                font-size: 24px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: rgba(154, 154, 154, 1);
                line-height: 44px;
              }
            }
          }
        }
      }
    }
  }
  .userlist {
    margin-top:150px;
    display: flex;
    flex-wrap: wrap;
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
          width: 181px;
          height: 28px;
          font-size: 30px;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          line-height: 44px;
        }
      }
      .list-right {
        float:right;
        margin-right:20px;
        .el-icon-arrow-right{
          width: 14px;
          height: 23px;
          font-size: 38px;
          font-weight: 800;
          background: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>
