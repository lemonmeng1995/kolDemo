<template>
  <div id="home">
    <el-row>
      <el-col :span="24">
        <div>
          <el-input placeholder="请输入产品标题/产品ID号搜索产品" prefix-icon="el-icon-search" v-model="input"></el-input>
        </div>
      </el-col>
    </el-row>
    <!-- <div id="block">
      <el-carousel height="50px" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
           <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div class="homebanner">
      <el-row >
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><img  :src="image.imagesOne" /></div>
            <p>店铺授权</p>
          </div>
        </el-col>
      <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><img  :src="image.imagesTwo" fit="cover"/></div>
            <p>一键铺货</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><img  :src="image.imagesOne" fit="cover"/></div>
            <p>财富中心</p>
          </div>
        </el-col>
         <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="bannerimage"><img :src="image.imagesTwo" fit="cover"/></div>
            <p>帮助中心</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      input: "",
      image:{       
        imagesOne:require("../../assets/images/1.png"),
        imagesTwo:require("../../assets/images/2.png")
      }
    };
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
#home {
  #block {
    overflow: hidden;
    border-radius: 10px;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 50px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  #block /deep/ {
    .el-carousel__indicator--horizontal {
      padding: 4px 8px;
    }
    .el-carousel__button {
      display: block;
      width: 50px;
      border-radius: 50px;
      opacity: 0.48;
      height: 50px;
      border: none;
      outline: 0;
      padding: 0;
      margin: 0;
      cursor: pointer;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      background-color: #f5f5f5;
    }
    .is-active .el-carousel__button {
      background-color: #ff7a45;
      opacity: 1;
    }
  }

  .homebanner{
    width:100%;
    height:400px;
    margin-top:10px;
    background-color: #e8e8e8;
    border-radius: 10px;
    .bannerimage{
      margin-top:10px;
    }
    p{
      margin:0px;
      padding:0px;
      font-size:14px
    }
    .grid-content img{
        width: 300px; 
        height: 300px
    }
  }
}
</style>
