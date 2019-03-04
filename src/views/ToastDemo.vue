<template>
  <div class="home">
    <div class="btn-group">
      <div class="btn" @click="showToast()">show1</div>
      <div class="btn" @click="showToast2()">show2</div>
      <div class="btn" @click="closeToast()">close!!!</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ToastDemo",
  data() {
    return {
    }
  },
  mounted() {
    this.$toast.warning('警告');
  },
  methods: {
    showToast() {
      let _this = this;
      this.$toast({
        message: '测试数据1',
        type: 'success',
        duration: 2000,
        animate: 1,
        onClose: function() {
          console.log('closed callback1', _this);
        }
      });
    },

    showToast2() {
      this.$toast({
        message: '测试数据2',
        type: 'loading',
        animate: 2,
        onClose: function() {
          console.log('closed callback2');
        }
      });
    },

    closeToast() {
      this.$toast.close();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
