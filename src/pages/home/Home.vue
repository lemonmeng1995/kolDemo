<template>
  <div id="home">
    <!-- <HostCom></HostCom> -->
    <el-row>
      <el-col :span="24">
        <div class="homeheader">
          <span>Quexin</span>
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <div class="poster">
       <el-image  :src="image.imagesOne" :fit="fill"></el-image>
    </div>
    <div class="homebanner">
      <el-row >
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="goStoreauth">
            <div class="bannerimage"><el-image  :src="image.storeauthorizat" :fit="fill"></el-image></div>
            <p>店铺授权</p>
          </div>
        </el-col>
      <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><el-image  :src="image.oneclickshop" fit="cover"></el-image></div>
            <p>一键铺货</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><el-image  :src="image.wealthcenter" fit="cover"></el-image></div>
            <p>财富中心</p>
          </div>
        </el-col>
         <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><el-image :src="image.helpcenter" fit="cover"></el-image></div>
            <p>帮助中心</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="twobanner">
          <div class="grid-content-left">
            <div class="left">
              <div>邀请供应商</div>
              <div>Supplier</div>
            </div>
            <div class="right">
              <el-image :src="image.flying" fit="fill"></el-image>            
            </div>      
          </div>
          <div class="grid-content-right">
             <div class="left">
              <div>邀请网红</div>
              <div>Network Reds</div>
            </div>
            <div class="right">
              <el-image :src="image.mask" fit="fill"></el-image>            
            </div>
          </div>
    </div>
    <div class="specialgoods">
      <div class="goodstext"> <span>- 特供商品  -</span></div>
      <div class="goodsconnect">
        <div class="connect-left">
          tup 
        </div>
        <div class="connect-right">
          <div class="connect-right-one">
            <span>康宁VISIONS225L晶彩透明耐热玻璃汤锅</span>
          </div>
          <div class="connect-right-two">
            <span>库存1000</span>
            <span>样品剩余10</span>
          </div>
          <div class="endtext">
            <div class="endtext-left">
              <p class="price">特供价 ￥108.00</p>
              <p class="tebieprice">市场建议价 ￥268</p>
            </div>
            <div class="endtext-right">
              <p class="endtext-wode">我的</p>
              <p class="endtext-xupi">选品</p>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div class="publicgoods">
      <span>- 公开商品 -</span>
    </div>
    <div class="listofgoods">  
      <div class="goodsconnect">
         <div class="connect-left">
          tup 
        </div>
        <div class="connect-right">
          <div class="connect-right-one">
            <span>康宁VISIONS225L晶彩透明耐热玻璃汤锅</span>
          </div>
          <div class="connect-right-two">
            <span>库存1000</span>
            <span>样品剩余10</span>
          </div>
          <div class="endtext">
            <div class="endtext-left">
              <p class="price">特供价 ￥108.00</p>
              <p class="tebieprice">市场建议价 ￥268</p>
            </div>
          </div>
        </div>
      </div>  
        <div class="goodsconnect">
         <div class="connect-left">
          tup 
        </div>
        <div class="connect-right">
          <div class="connect-right-one">
            <span>康宁VISIONS225L晶彩透明耐热玻璃汤锅</span>
          </div>
          <div class="connect-right-two">
            <span>库存1000</span>
            <span>样品剩余10</span>
          </div>
          <div class="endtext">
            <div class="endtext-left">
              <p class="price">特供价 ￥108.00</p>
              <p class="tebieprice">市场建议价 ￥268</p>
            </div>
          </div>
        </div>
      </div>  
        <div class="goodsconnect">
         <div class="connect-left">
          tup 
        </div>
        <div class="connect-right">
          <div class="connect-right-one">
            <span>康宁VISIONS225L晶彩透明耐热玻璃汤锅</span>
          </div>
          <div class="connect-right-two">
            <span>库存1000</span>
            <span>样品剩余10</span>
          </div>
          <div class="endtext">
            <div class="endtext-left">
              <p class="price">特供价 ￥108.00</p>
              <p class="tebieprice">市场建议价 ￥268</p>
            </div>
          </div>
        </div>
      </div>  
       
    </div>
  </div>
</template>

<script>

import HostCom from '@/components/Host'
export default {
  name: "Home",
  components:{ HostCom },
  data() {
    return {
      input: "",
      image:{       
        imagesOne:require("../../assets/images/1.png"),
        imagesTwo:require("../../assets/images/2.png"),
        oneclickshop:require("../../assets/images/oneclickshop.png"),
        storeauthorizat:require("../../assets/images/storeauthorizat.png"),
        wealthcenter:require("../../assets/images/wealthcenter.png"),
        helpcenter:require("../../assets/images/helpcenter.png"),
        flying:require("../../assets/images/flying.png"),
        mask:require("../../assets/images/mask.png"),
      }
    };
  },
  watch: {

  },
  methods:{
    goStoreauth(){
      this.$router.push('/storeAuth');
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  background:linear-gradient(0deg,rgba(255,255,255,1),rgba(243,243,243,1));
  width:100%;
  height:100%;
  .homeheader{
    width:100%;
    height:100px;
    background:#fff;
    span{
      width:169px;
      height:50px;
      font-size:67px;
      font-family:VAgnesDuo;
      font-weight:bold;
      color:rgba(34,34,34,1);
      line-height:82px;
      float:left
    }
    .el-input{
      width:65%;
      float:right;

    }
    /deep/ .el-input-group--append .el-input__inner, .el-input-group__prepend{
      border:0

    }
    /deep/  .el-input-group__append{
      border:0;
      background-color: #fff;

    }
    /deep/ .el-icon-search{
      font-size: 40px   
    }
  }
  .poster{
    width:100%;
    height:300px;
    .el-image{
      width:100%;
      height:100%
    }
  }
  .homebanner{
    width:100%;
    // height:300px;
    margin-top:10px;
    padding-top:20px;
    border-radius: 10px;
    // background:linear-gradient(0deg,rgba(255,255,255,1),rgba(243,243,243,1));
    .bannerimage{
      margin-top:10px;
      text-align: center;
      .el-image{
        width:70px;
        height:70px

      }
    }
    p{
      margin:0px;
      padding:0px;
      font-size:14px;
      text-align: center;
      height:23px;
      font-size:24px;
      font-family:PingFang-SC-Medium;
      font-weight:bold;
      color:rgba(34,34,34,1);
      line-height:44px;
    }
  
  }
  .twobanner{
    width:100%;
    margin-top:60px;
    display: flex;
    .grid-content-left{
      width:328px;
      height:110px;
      float:left;
      flex:1;
      margin:10px;
      background:linear-gradient(90deg,rgba(255,22,124,1),rgba(255,200,159,1));
      border-radius:20px;
      .left{
        float:left;
        width:60%;
        text-align: center;
        :nth-child(1){
          margin-top:15px;
          height:30px;
          font-size:30px;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:44px;
          text-shadow:0px 5px 3px rgba(0, 0, 0, 0.1);

        }
        :nth-child(2){
          margin-top:10px;
          height:19px;
          font-size:20px;
          font-family:PingFang-SC-Regular;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:38px;
          opacity:0.3;
        }
      }
      .right{
        float:right;
        width:40%;
        .el-image{
          margin-top:-12px;
          height:109px;
          width:106px;
        }
      }

    }
    .grid-content-right{
      width:328px;
      height:110px;
      float:right;
      flex:1;
      margin:10px;
      background:linear-gradient(90deg,rgba(116,255,248,1),rgba(53,148,255,1));
      border-radius:20px;
      .left{
        float:left;
        width:60%;
        text-align: center;
        :nth-child(1){
          margin-top:15px;
          height:30px;
          font-size:30px;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:44px;
          text-shadow:0px 5px 3px rgba(0, 0, 0, 0.1);

        }
        :nth-child(2){
          margin-top:10px;
          height:19px;
          font-size:20px;
          font-family:PingFang-SC-Regular;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:38px;
          opacity:0.3;
        }
      }
      .right{
        float:right;
        width:40%;
        .el-image{
          margin-top:-12px;
          height:109px;
          width:106px;
        }

      }

    }

  }
  .specialgoods{
    // width:710px;
    height:375px;
    margin-top:40px;
    background:rgba(255,248,222,1);
    border-radius:20px;
    .goodstext{
      padding-top:20px;
      text-align: center;
      span{
        width:139px;
        height:34px;
        font-size:36px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:36px;
      }
    }
    .goodsconnect{
      display: flex;
      margin-top:15px;
      .connect-left{
        float:left;
        width:230px;
        margin:10px;
        height:230px;
        background:rgba(255,255,255,1);
        border-radius:20px;

      }
      .connect-right{
        float:right;
        width:70%;
           .connect-right-one {
             margin:10px;
             span{   
                width:398px;
                height:63px;
                font-size:28px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(34,34,34,1);
                line-height:36px;
              }
           }
            .connect-right-two {
             margin:10px;
             width:100%;
             float:left;
             :nth-child(1){  
                float:left; 
                height:21px;
                width:120px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
              }
              :nth-child(2){   
                float:right;
                width:130px;
                margin-right:15px;
                height:21px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
              }
           }
            .endtext{
             margin:10px;
             float:left;
             display: flex;
             width: 100%;
             .endtext-left{ 
               float:left;
               width:75%;
               .price{    
                width:197px;
                height:25px;
                font-size:24px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,22,124,1);
                line-height:36px;
               }
               .tebieprice{    
                height:21px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
               }
              }
              .endtext-right{
                  float:right;
                  width:100px;
                  right:10px;
                  text-align: center;
                  height:100px;
                  margin-top:10px;
                  background:rgba(255,255,255,1);
                  box-shadow:0px 0px 26px 0px rgba(12,3,6,0.18);
                  border-radius:50%;
                  .endtext-wode{
                    // width:51px;
                    // height:55px;
                    margin:0;
                    margin-top:20px;
                    font-size:26px;
                    font-family:SourceHanSansCN-Regular;
                    font-weight:bold;
                    color:rgba(255,0,110,1);
                    line-height:30px;
                  }
                  .endtext-xupi{
                      // height:55px;
                      margin:0;
                      font-size:26px;
                      font-family:SourceHanSansCN-Regular;
                      font-weight:bold;
                      color:rgba(255,0,110,1);
                      line-height:30px;

                  }
               } 
           }

      }
    }
  }
  .publicgoods{
    text-align: center;
    padding:25px;
    background-color:#f5f5f5;
    span{
      width:138px;
      height:34px;
      font-size:36px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(34,34,34,1);
      line-height:36px;

    }
  }
  .listofgoods{
    padding:15px;
    background-color: #f5f5f5;
    margin-bottom: 50px;
    .goodsconnect{
        display: flex;
        margin-bottom:20px;
        height:311px;
        background:rgba(255,255,255,1);
        border-radius:20px;
        .connect-left{
        float:left;
        width:230px;
        margin:10px;
        height:230px;
        background:rgba(255,255,255,1);
        border-radius:20px;
      }
      .connect-right{
        float:right;
        width:70%;
           .connect-right-one {
             margin:10px;
             span{   
                width:398px;
                height:63px;
                font-size:28px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(34,34,34,1);
                line-height:36px;
              }
           }
            .connect-right-two {
             margin:10px;
             width:100%;
             float:left;
             :nth-child(1){  
                float:left; 
                height:21px;
                width:120px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
              }
              :nth-child(2){   
                float:right;
                width:130px;
                margin-right:15px;
                height:21px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
              }
           }
            .endtext{
             margin:10px;
             float:left;
             display: flex;
             width: 100%;
             .endtext-left{ 
               float:left;
               width:78%;
               .price{    
                width:197px;
                height:25px;
                font-size:24px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,22,124,1);
                line-height:36px;
               }
               .tebieprice{    
                height:21px;
                font-size:22px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(181,181,181,1);
                line-height:36px;
               }
              }
              .endtext-right{
                  float:right;
                  width:100px;
                  right:10px;
                  text-align: center;
                  height:100px;
                  margin-top:10px;
                  background:rgba(255,255,255,1);
                  box-shadow:0px 0px 26px 0px rgba(12,3,6,0.18);
                  border-radius:50%;
                  .endtext-wode{
                    // width:51px;
                    // height:55px;
                    margin:0;
                    margin-top:20px;
                    font-size:26px;
                    font-family:SourceHanSansCN-Regular;
                    font-weight:bold;
                    color:rgba(255,0,110,1);
                    line-height:30px;
                  }
                  .endtext-xupi{
                      // height:55px;
                      margin:0;
                      font-size:26px;
                      font-family:SourceHanSansCN-Regular;
                      font-weight:bold;
                      color:rgba(255,0,110,1);
                      line-height:30px;

                  }
               } 
           }

      }

    }
    

  }
}
</style>
