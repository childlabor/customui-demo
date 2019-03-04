<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <div class="slider-box" v-if="true">
      <LaSlider
        ref='abc'
        height="100%"
        :initIndex="initIndex"
        :loop="loop"
        :arrow="arrow"
        :arrowColor="arrowColor"
        :autoplay="autoplay"
        :interval="interval"
        :direction="direction"
        :indicator="indicator"
        :indicatorColor="indicatorColor"
        :touchRatio="touchRatio"
        @changeIndex="changeIndex">
        <SliderItem v-for="(item, index) in 5" :key="index">
          <img :src="`https://raw.githubusercontent.com/836939563/printscreen/master/test/test${index +1}.jpg`" alt="">
          <!-- <div style="width: 100%;height: 100%; display: table;text-align: center;">
            <span style=" font-size: 30px;display: table-cell;vertical-align: middle;">
              {{index}}
            </span>
          </div> -->
        </SliderItem>
      </LaSlider>
    </div>
    <div class="btn-group">
      <div class="btn" @click="handleClickIndicator()">跳转3</div>
      <div class="btn" @click="logChangeIndex()">log index</div>
      <div class="btn" @click="handleClickNext()">next</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LaSliderDemo",

  data() {
    return {
      initIndex: 0,
      loop: true,
      arrow: true,
      arrowColor: 'light',
      autoplay: true,
      interval: 2000,
      direction: 'right',
      indicator: true,
      indicatorColor: 'light',
      touchRatio: 0.2,
      logIndex: null
    }
  },

  mounted() {

  },

  methods: {
    handleClickIndicator() {
      this.$refs.abc.handleIndicator(3);
    },

    handleClickNext() {
      this.$refs.abc.sliderNext();
    },

    changeIndex(res) {
      this.logIndex = res;
    },

    logChangeIndex() {
      console.log(this.logIndex);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
