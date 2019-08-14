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
            <div class="righttext">
                <span>提交资质</span>
            </div>
         
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
      imagesOne: require("../../assets/images/1.png")
    };
  }
};
</script>

<style lang="scss" scoped>
#user {
  width: 100%;
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
        .righttext{
            width: 190px;
            height: 60px;
            background: #B90024;
            opacity: 0.7;
            border-radius: 30px;
            text-align: center;
            line-height: 60px;
            margin-top:20px;
            margin-right:-22px;
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
  }
}
</style>
