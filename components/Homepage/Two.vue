<template>
  <section class="wrapper section">
    <div class="container">
      <div class="columns is-multiline is-vcentered">
        <div v-for="(item,index) in items" :key="index" class="feature-item column is-10 is-offset-1">
          <FeatureItem
            :isReverse="index % 2 === 1"
            :img="item.img"
            :title="item.title"
            :subtitle="item.subtitle"
          />
        </div>
          
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.feature-item  {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>

<script>
import Feature_1 from '../../assets/Feature_1.svg'
import Feature_2 from '../../assets/Feature_2.svg'
import Feature_3 from '../../assets/Feature_3.svg'

export default {
  data() {
    return {
      items: [
        {
          img: Feature_1,
          title: 'Automatic categorization',
          subtitle: `Sort your bookmarks automatically with tags and categories to easily find them for future referencing.`,
        },
        {
          img: Feature_2,
          title: 'Add Highlights',
          subtitle: `The ability to convert pages into text-only mode for later reading. 
          You can also highlight important portions of the page in this mode.`
        }, 
        {
          img: Feature_3,
          title: 'Filtering & Searching',
          subtitle: `You can search for an old bookmark by its tags, category or even a keyword.`
        }
      ]
    }
  }
}
</script>