<template>
  <div class="slider-margin">
    <div class="slider-header">Top News</div>
    <div class="slider">
      <div class="slider-images">
        <div
          class="slider-image"
          v-for="(image, index) in images.slice(sliderIndex, sliderIndex + 3)"
          :key="'image' + index"
        >
          <img src="@/assets/images/slider.png" alt="slide" />
          <p class="slide-header">
            {{ image }}A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
          </p>
          <p class="slide-text">{{ image }}1h ago · by Troy Corlson</p>
        </div>
      </div>
      <div class="previous-button" @click="prevImage">
        <img src="@/assets/images/left.png" alt="left" />
      </div>
      <div class="next-button" @click="nextImage">
        <img src="@/assets/images/right.png" alt="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["1 image ", "2 image ", "3 image ", "4 image ", "5 image "],
      sliderIndex: 0,
    };
  },

  mounted() {},

  methods: {
    nextImage() {
      if (this.images.length > this.sliderIndex + 3) {
        this.sliderIndex++;
      }
    },
    prevImage() {
      if (this.sliderIndex !== 0) {
        this.sliderIndex--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-header {
  font-size: 32px;
  font-weight: 700;
  margin-left: 100px;
  margin-top: 93px;
  margin-bottom: 49px;
}
.slider-margin {
  margin-bottom: 58px;
}
</style>
