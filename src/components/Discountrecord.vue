<template>
  <div id="discountrecord">
    <div class="discounttencet">
      <div class="title">
        <span>提现记录</span>
      </div>
      <div>
        <div class="context">
        <div class="context-top">
          <div class="datename">
            <span>2019-08-02</span>
          </div>
          <div class="recodername">
            <div class="inout">
              <span>支出：￥200.00</span>
            </div>
            <div class="inout">
              <span>收入：￥600.50</span>
            </div>
          </div>
        </div>
        <div class="listrecode">
          <div class="listchild">
            <div class="listchild_left">
              <div class="listphone">
                <span>提现-至158****7438手机号</span>
              </div>
              <div class="listtime">
                <span>10:20:00</span>
              </div>
            </div>
            <div class="listchild_right">
              <div class="listmonoey">
                <span>+200.00</span>
              </div>
            </div>
          </div>
           <div class="listchild">
            <div class="listchild_left">
              <div class="listphone">
                <span>提现-至158****7438手机号</span>
              </div>
              <div class="listtime">
                <span>10:20:00</span>
              </div>
            </div>
            <div class="listchild_right">
              <div class="listmonoey">
                <span>+200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Discountrecord",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#discountrecord {
  background: #f3f3f3;
  width: 100%;
  height: 100%;
  .discounttencet {
    .title {
      margin: 20px;
      span {
        width: 120px;
        height: 29px;
        font-size: 30px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 44px;
      }
    }
    .context {
      .context-top {
        display: flex;
        margin: 20px;
        justify-content: space-between;
        .datename {
          width: 188px;
          height: 60px;
          margin-top: 20px;
          line-height: 60px;
          background: rgba(255, 255, 255, 1);
          border-radius: 30px;
          text-align: center;
          span {
            width: 145px;
            height: 19px;
            line-height: 19px;
            font-size: 24px;
            font-family: PingFang-SC-Medium;
            font-weight: bold;
            color: rgba(154, 154, 154, 1);
            line-height: 44px;
          }
        }
        .recodername {
          .inout {
            span {
              width: 177px;
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
      .listrecode {
        background: rgba(255, 255, 255, 1);
        .listchild {
            display: flex;
            margin: 20px;
            height:120px;
            justify-content: space-between;
          .listchild_left {
              height:100%;
              line-height: 20px;
            .listphone {   
                margin-top:20px;        
              span {
                width: 534px;
                height: 27px;
                font-size: 28px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: rgba(34, 34, 34, 1);
                line-height: 44px;
              }
            }
            .listtime {
              span {
                width: 98px;
                height: 19px;
                font-size: 24px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: rgba(154, 154, 154, 1);
                line-height: 44px;
              }
            }
          }
          .listchild_right {
              height:100%;
              line-height: 110px;
            .listmonoey {
              span {
                width: 110px;
                height: 22px;
                font-size: 28px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: rgba(255, 22, 124, 1);
                line-height: 44px;
              }
            }
          }
        }
      }
    }
  }
}
</style>