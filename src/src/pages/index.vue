<template>
  <div id="home">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">首页</mt-tab-item>
      <mt-tab-item id="order">订单</mt-tab-item>
      <mt-tab-item id="user">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        selected:"home"
    };
  },
  watch:{
      selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
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
</style>
