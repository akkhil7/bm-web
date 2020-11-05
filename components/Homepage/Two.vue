<template>
  <section class="wrapper section">
    <div class="bg-square">
      <svg
        viewBox="0 0 631 153"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Group</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Group">
            <rect
              id="Rectangle"
              stroke="#B499DF"
              fill="#CEC9FF"
              transform="translate(348.000000, 64.500000) scale(-1, 1) translate(-348.000000, -64.500000) "
              x="65.5"
              y="0.5"
              width="565"
              height="128"
            ></rect>
            <rect
              id="Rectangle"
              stroke="#EE8846"
              fill-opacity="0.5"
              fill="#FFE2D2"
              x="0.5"
              y="105.5"
              width="492"
              height="47"
            ></rect>
          </g>
        </g>
      </svg>
    </div>
    <div class="container">
      <div class="columns is-multiline is-vcentered">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="feature-item column is-10 is-offset-1"
        >
          <FeatureItem
            :is-reverse="index % 2 === 1"
            :img="item.img"
            :title="item.title"
            :subtitle="item.subtitle"
            :is-pro="item.isPro"
          />
        </div>
      </div>
    </div>
    <div class="bg-square-reverse">
      <svg
        viewBox="0 0 631 153"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Group</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Group">
            <rect
              id="Rectangle"
              stroke="#B499DF"
              fill="#CEC9FF"
              transform="translate(348.000000, 64.500000) scale(-1, 1) translate(-348.000000, -64.500000) "
              x="65.5"
              y="0.5"
              width="565"
              height="128"
            ></rect>
            <rect
              id="Rectangle"
              stroke="#EE8846"
              fill-opacity="0.5"
              fill="#FFE2D2"
              x="0.5"
              y="105.5"
              width="492"
              height="47"
            ></rect>
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.bg-square {
  position: relative;
  svg {
    position: absolute;
    left: -20vw;
    opacity: 0.25;
    width: 60vw;
    min-width: 400px;
    transform: skew(0deg, 20deg) translate3d(0, 0, 0);
    @media (min-width: 768px) {
      opacity: 0.15;
    }
  }
}
.bg-square-reverse {
  position: relative;
  svg {
    position: absolute;
    right: -20vw;
    opacity: 0.25;
    width: 60vw;
    min-width: 400px;
    transform: skew(0deg, 20deg) translate3d(0, 0, 0);
    @media (min-width: 768px) {
      opacity: 0.15;
    }
  }
}
.feature-item {
  margin-top: 4em;
  margin-bottom: 4em;
}
</style>

<script>
import Feature1 from '../../assets/Feature_1.svg'
import Feature2 from '../../assets/Feature_2.svg'
import Feature3 from '../../assets/Feature_3.svg'
import Feature4 from '~/assets/Feature_4.svg'

export default {
  data() {
    return {
      items: [
        {
          img: Feature1,
          title: 'Smart Bookmarks',
          subtitle: `Your bookmarks are automatically categorized and tagged using Artificial Intelligence.`,
          isPro: false,
        },
        {
          img: Feature4,
          title: 'Bookmark Recommendations',
          subtitle: `Markie shows you similar bookmarks when you bookmark a page. You will probably forget about the bookmark you saved ages ago but Markie won't 😉.`,
          isPro: true,
        },
        {
          img: Feature2,
          title: 'Article View',
          subtitle: `Markie converts your bookmarks into text-only mode for later reading. 
          You can also highlight important portions of the page in this mode.`,
          isPro: false,
        },
        {
          img: Feature3,
          title: 'Filtering & Searching',
          subtitle: `You can search for your bookmark by its tag, category or even a keyword.`,
          isPro: false,
        },
      ],
    }
  },
}
</script>
