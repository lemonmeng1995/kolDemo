<template>
  <div id="myselection">
    <div class="seletarbar">
      <div class="seletarbarbox">
        <ul class="ulul">
          <li
            v-for="(item,index) in menu"
            :key="index"
            :class="{active : (isActive == item.value ? true : false)}"
            @click="onisActive(item.value)"
          >{{item.name}}</li>
        </ul>
        <ul class="titleall">
          <li
            v-for="(item,index) in titlename"
            :key="index"
            :class="{activetitle : (isActivetitle == item.value ? true : false) }"
            @click="onisActivetitle(item.value)"
          >
            {{item.name}}
            <span class="numcss">({{item.num}})</span>
            <!-- <span class="line"></span> -->
          </li>
        </ul>
      </div>
      <div class="headersele">
        <div class="headerbox">
          <div class="header-left">
            <!-- <span class="gougou"></span> -->
            <img slot="icon" class="gougou" src="../../assets/images/hook.png" v-if="this.selected" @click="getHook">
            <img slot="icon" class="gougou" src="../../assets/images/ellipse.png" v-else @click="getHook">
            <span class="sele">全部选择</span>
          </div>
          <div class="header-right" @click="goOneclickshop">
            <span>一键铺货</span>
          </div>
        </div>
        <div class="myselelist">
          <div class="myselelistbox">
            <div class="list-top">
              <div class="list-top-left">
                <img class="ricr" slot="icon" src="../../assets/images/hook.png" v-if="this.selected" @click="getHook">
                <img class="ricr" slot="icon" src="../../assets/images/ellipse.png" v-else @click="getHook">

                <!-- <img src="@/images/myMenu/invite.png"/> -->
                <!-- <span class="ricr"></span> -->
                <span class="text">ID64125451</span>
              </div>
              <div class="list-top-right">
                <p>预览</p>
              </div>
            </div>
            <Listseletion></Listseletion>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listseletion from './listselection'
export default {
  name: "Myselection",
  components:{
        Listseletion
    },
  data() {
    return {
      radio: "已选品",
      isActive: "1",
      isActivetitle: "a",
      selected:true,
      menu: [
        {
          name: "已铺货",
          value: "1"
        },
        {
          name: "已选品",
          value: "2"
        },
        {
          name: "已下架",
          value: "3"
        }
      ],
      titlename: [
        {
          name: "全部",
          num: "602",
          value: "a"
        },
        {
          name: "公开",
          num: "602",
          value: "b"
        },
        {
          name: "特供",
          num: "602",
          value: "c"
        }
      ],
       image: {
                        ellipse: require("../../assets/images/ellipse.png"),
                         hook: require("../../assets/images/hook.png")
                    }
   
    };
  },
  methods: {
    onisActive(value) {
      this.isActive = value;
    },
    onisActivetitle(value) {
      this.isActivetitle = value;
    },
    getHook(){
      this.selected = !this.selected

    },
    goOneclickshop(){
      this.$router.push('/oneclickshop')
    }
  }
};
</script>

<style lang="scss" scopde>
* {
  margin: 0;
  padding: 0;
}
#myselection {
  width: 100%;
  .seletarbar {
    text-align: center;
    margin: 50px auto;
    .seletarbarbox {
      .ulul {
        overflow: hidden;
        width: 414px;
        height: 64px;
        line-height: 64px;
        border: 2px solid rgba(255, 22, 124, 1);
        border-radius: 32px;
        padding: 0px;
        margin: 0 auto;
        li {
          list-style: none;
          float: left;
          width: 138px;
          height: 64px;
          line-height: 64px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 22, 124, 1);
        }
        li.active {
          color: #fff;
          width: 138px;
          height: 64px;
          background: rgba(255, 22, 124, 1);
        }
      }
      .titleall {
        height: 74px;
        background: rgba(255, 255, 255, 1);
        text-align: center;
        overflow: hidden;
        margin-top: 40px;
        margin-left: 20px;

        li {
          list-style: none;
          float: left;
          width: 33%;
          height: 26px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(62, 62, 62, 1);
          line-height: 40px;
          .numcss {
            font-size: 18px;
          }
        }
        li.activetitle {
          width: 33%;
          height: 27px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(255, 22, 124, 1);
          line-height: 40px;
          .numcss {
            font-size: 18px;
          }
        }
      }
    }
    .headersele {
      width: 100%;
      background-color: #f3f3f3;
      .headerbox {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .header-left {
          height: 50px;
          text-align: center;
          line-height: 50px;
          position: relative;
          .gougou {
            width: 30px;
            height: 30px;
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .sele {
            width: 111px;
            margin-left:40px;
            height: 26px;
            font-size: 28px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(34, 34, 34, 1);
          }
        }
        .header-right {
          width: 134px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          background: linear-gradient(
            90deg,
            rgba(255, 180, 0, 1),
            rgba(254, 216, 0, 1)
          );
          border-radius: 25px;
          span {
            width: 94px;
            height: 23px;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 40px;
          }
        }
      }
      .myselelist {
        width: 100%;
        .myselelistbox {
          margin: 20px;
          height: 400px;
          background: rgba(255, 255, 255, 1);
          border-radius: 20px;
          .list-top {
            display: flex;
            justify-content: space-between;
            height: 100px;
            line-height: 100px;
            .list-top-left {
              margin-left:20px;
              position: relative;
              .ricr {
                width: 30px;
                height: 30px;
                border-radius: 50%;             
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }
              .text {
                margin-left:40px;
                width: 143px;
                height: 21px;
                font-size: 26px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(34, 34, 34, 1);
                line-height: 40px;
              }
            }
            .list-top-right {
              width: 76px;
              height: 100%;
              text-align: center;
              line-height: 100px;          
              border-radius: 20px;
              margin-right:20px;
              p {
                width: 76px;
                height: 40px;
                line-height: 40px;
                border: 1px solid rgba(255, 22, 124, 1);
                border-radius: 20px;
                position: relative; /*脱离文档流*/
                top: 25%; /*偏移*/
                color:rgba(255, 22, 124, 1);
              }
            }
          }
     
        }
      }
    }
  }
}
</style>