<template>
  <div>
    <One />
    <Two />
  </div>
</template>

<script>
import One from '../components/Homepage/One.vue';
import Two from '../components/Homepage/Two.vue'
export default {  
  name: 'Homepage',
  components: {
    One,
    Two,
  },
}
</script>