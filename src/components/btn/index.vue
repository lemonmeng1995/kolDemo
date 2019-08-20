<template>
      <div id="newbtn">
      <div class="btn">
        <span>{{text}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name:"Btn",
    props:{
        text:String,
        required:true

    },
    data(){
        return{

        }
    }

}
</script>

<style lang="scss" scoped>
   #newbtn {
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

</style>