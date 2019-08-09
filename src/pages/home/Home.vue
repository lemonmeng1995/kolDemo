<template>
  <div>
    <div>首页123</div>

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
