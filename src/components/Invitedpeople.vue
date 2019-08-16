<template>
  <div id="invitedpeople">
    <div class="invitebox">
      <div class="peoplelist">
        <div class="listchild">
          <div class="listchild-left">
            <el-image :src="imagesOne" fit="fill"></el-image>
          </div>
          <div class="listchild-center">
            <div class="center-name">
              <span>塔尔</span>
            </div>
            <div class="center-phone">
              <span>158****2152</span>
            </div>
          </div>
          <div class="listchild-right">
            <span>邀请成功</span>
          </div>
        </div>
          <div class="listchild">
          <div class="listchild-left">
            <el-image :src="imagesOne" fit="fill"></el-image>
          </div>
          <div class="listchild-center">
            <div class="center-name">
              <span>塔尔</span>
            </div>
            <div class="center-phone">
              <span>158****2152</span>
            </div>
          </div>
          <div class="listchild-right">
            <span>邀请成功</span>
          </div>
        </div>
      </div>
      <div class="newbtn">
        <div class="btn">
          <span>邀请其他供应商入驻</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invitedpeople",
  data() {
    return {
        imagesOne: require("../assets/images/1.png")
    };
  }
};
</script>

<style  lang="scss" scoped>
#invitedpeople {
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(243,243,243,1);
  .invitebox {
     margin:20px;
    .peoplelist {
      .listchild {
        margin:20px;
        height:140px;
        background:rgba(255,255,255,1);
        border-radius:20px;
        display:flex;
        // justify-content:space-around;
        .listchild-left {
            // width:80px;
            margin:25px;
            height:80px;
          
           
            line-height: 80px;
            overflow:hidden;
            border-radius: 50%;
            .el-image {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
        }
        }
        .listchild-center {
            margin:25px;
            width:48%; 
          .center-name {
            span {
              width: 61px;
              height: 30px;
              font-size: 32px;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(34, 34, 34, 1);
              line-height: 41px;
            }
          }
          .center-phone {
            margin-top:10px;      
            span {
              width: 147px;
              height: 19px;
              font-size: 24px;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(153, 153, 153, 1);
              line-height: 41px;
            }
          }
        }
        .listchild-right {
          margin:25px;
          line-height: 80px;
          span {
            width: 109px;
            height: 27px;
            font-size: 28px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 22, 124, 1);
            line-height: 48px;
          }
        }
      }
    }
    .newbtn {
      text-align: center;
      position: fixed;
      bottom: 100px;
      width:95%;
      .btn {
        margin:0 auto;
        width: 690px;
        height: 88px;
        text-align: center;
        line-height: 88px;
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