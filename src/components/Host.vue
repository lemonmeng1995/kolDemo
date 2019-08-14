<template>
<div id="host">
 <div class="div">   
     <ul>
         <span></span>
         <span></span>
         <span></span>
     </ul>
   </div>
</div>
  
</template>

<script>
export default {
    name:"Host",
    data(){
        
    }

}
</script>

<style lang="scss" scoped>
   *{
       margin: 0px;
       padding: 0px;
     }
     .div{
       width: 500px;
       height: 500px;
       margin:  auto;
     }
     ul{
       padding: 34% 30%;
     }
     /*CSS3新增元素选择第几个子元素*/
     span:nth-child(1){
       position: absolute;/*绝对定位把行内元素转化为定位元素*/
       width: 215px;
       height: 125px;
       background-color: rgba(0, 0, 0, 0.5) ;
     }
    span:nth-child(2){
      position: absolute;
      width: 215px;
      height: 125px;
      background-color: rgba(0,0,0,0.5);
      transform: rotate(60deg);/*定义2D选择*/
    }
    span:nth-child(3){
      position: absolute;
      width: 215px;
      height: 125px;
      background-color: rgba(0,0,0,0.5);
      transform: rotate(120deg);
    }

</style>