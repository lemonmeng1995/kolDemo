<template>
  <div id="index">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
          <img slot="icon" src="../assets/images/homesele.png" v-if="this.selected=='home'">
          <img slot="icon" src="../assets/images/homeon.png" v-else>
          首页
      </mt-tab-item>
      <mt-tab-item id="order">
          <img slot="icon" src="../assets/images/ordersele.png" v-if="this.selected=='order'">
          <img slot="icon" src="../assets/images/orderon.png" v-else>
          订单
      </mt-tab-item>
      <mt-tab-item id="user">
         <img slot="icon" src="../assets/images/ourssele.png" v-if="this.selected=='user'">
         <img slot="icon" src="../assets/images/ourson.png" v-else>
          我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
         selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'user',
    };
  },
  watch:{
      selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
       sessionStorage.setItem('selected', JSON.stringify(val))
      switch(val){
        case 'home':
          this.$router.push('/home');
        break;
        case 'order':
          this.$router.push('/order');
        break;
        case 'user':
          this.$router.push('/user');
        break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#index{
    .mint-tabbar{
        border-top:1px solid #e4e4e4;
        position: fixed;
    }
}
</style>
