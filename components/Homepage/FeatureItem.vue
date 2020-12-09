<template>
  <div v-if="!isReverse || isMobile" class="columns is-vcentered">
    <div class="column is-6">
      <div class="text-content">
        <h1 class="title">
          {{ title }} <b-tag v-if="isPro" class="pro-tag">PRO</b-tag>
        </h1>
        <p class="subtitle" v-html="subtitle" />
      </div>
    </div>
    <div class="img-container column is-6">
      <img v-if="!isVideo" :src="img" />
      <video
        v-else
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        preload="auto"
        class="img-container"
      >
        <source type="video/mp4" :src="img" />
      </video>
    </div>
  </div>
  <div v-else class="columns is-vcentered">
    <div class="img-container column is-6">
      <img v-if="!isVideo" :src="img" />
      <video
        v-else
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        preload="auto"
        class="img-container"
      >
        <source type="video/mp4" :src="img" />
      </video>
    </div>
    <div class="column is-6">
      <div class="text-content">
        <h1 class="title">
          {{ title }}<b-tag v-if="isPro" class="pro-tag">PRO</b-tag>
        </h1>
        <p class="subtitle" v-html="subtitle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    isVideo: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobile() {
      const breakpoints = ['sm', 'md']
      return breakpoints.includes(this.$mq)
    },
  },
}
</script>

<style lang="scss" scoped>
.subtitle {
  color: #86868b;
  margin-top: 0.5em !important;
}
.img-container {
  text-align: center;
  position: relative;
  z-index: 100;
  img,
  video {
    border-radius: 10px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
<style lang="scss">
.pro-tag {
  font-weight: 600 !important;
  background-color: #6030e1 !important;
  color: white !important ;
  margin-left: 0.5em !important;
}
</style>
