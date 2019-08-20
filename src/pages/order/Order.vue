<template>
   <div id="myorder">
       <div class="myorder-search">
            <i  class="el-icon-search"></i>
             <el-input
            placeholder="请输入内容"
            v-model="input">
        </el-input>
       </div>
       <div class="myorder-status">
            <div class="status">待付款<span>(602)</span></div>
            <div class="status">待发货<span>(602)</span></div>
            <div class="status">待收货<span>(602)</span></div>
            <div class="status">已完成<span>(602)</span></div>
       </div>
       
   </div>
    
</template>

<script>
export default {
    name:"Order",
    data(){
        return{
            input:""
            
        }
    }

}
</script>

<style lang="scss" scoped>
#myorder{
    width:100%;
    .myorder-search{
        width:710px;
        margin:0 auto;
        height:64px;
        line-height: 64px;
        background:rgba(238,238,238,1);
        border-radius:32px;
        border:0;
        margin-top:15px;
        display:flex;
        overflow: hidden;
        .el-icon-search{
            width:40px;
            height:23px;
            font-size: 34px;
            margin-top:20px;
            margin-left:40px;
            color:rgba(187,187,187,1);  
        }
        .el-input{
            border:0;
            background-color:rgba(238,238,238,1);
            width:90%;
        }
        /deep/ .el-input__inner{
            border:0;
            background-color: #eee

        }
   

    }
    .myorder-status{
        display: flex;
        .status{
            width:150px;
            margin:20px;
            height:26px;
            font-size:28px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(62,62,62,1);
            line-height:40px;
            span{
                font-size:18px;

            }

        }

    }
 

}

</style>
