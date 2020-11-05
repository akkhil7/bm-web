<template>
  <div v-if="!isReverse || isMobile" class="columns is-vcentered">
    <div class="column is-6">
      <div class="text-content">
        <h1 class="title">
          {{ title }} <b-tag v-if="isPro" class="pro-tag">PRO</b-tag>
        </h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="img-container column is-6">
      <img :src="img" />
    </div>
  </div>
  <div v-else class="columns is-vcentered">
    <div class="img-container column is-6">
      <img :src="img" />
    </div>
    <div class="column is-6">
      <div class="text-content">
        <h1 class="title">
          {{ title }}<b-tag v-if="isPro" class="pro-tag">PRO</b-tag>
        </h1>
        <p class="subtitle">{{ subtitle }}</p>
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
  img {
    border-radius: 10px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  }
}
.pro-tag {
  font-weight: 600;
  background-color: #6030e1;
  color: white;
  margin-left: 0.5em;
}
</style>
