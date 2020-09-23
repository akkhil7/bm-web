<template>
  <div v-if="!isReverse" class="columns is-vcentered">
    <div class="column is-6">
      <div class="text-content">
        <h1 class="title">{{ title }}</h1>
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
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isReverse', 'img', 'title', 'subtitle'],
}
</script>

<style lang="scss" scoped>
 .subtitle {
   color: #86868b;
   margin-top: 0.5em !important;
 }
 .img-container {
   text-align: center;
   img {
     border-radius: 10px;
     border:1px solid rgba(0,0,0,0.15);
     box-shadow: 0 0 10px 0 rgba(0,0,0,0.12);
   }
 }
</style>