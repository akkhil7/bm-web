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
        <div class="column is-12 cta-text">
          <h1 class="title">
            A beautiful interface to access and manage your bookmarks easily.
          </h1>
          <p class="subtitle">
            You can filter and search through your bookmarks and access them
            even faster.
          </p>
        </div>
        <div class="column is-8 is-offset-2">
          <video
            playsinline=""
            autoplay=""
            muted=""
            loop=""
            preload="auto"
            class="demo-img"
          >
            <source type="video/mp4" src="~assets/manage_bookmarks.mp4" />
          </video>
        </div>
        <div class="column is-12 cta-text">
          <h1 class="title">
            Introducing bookmark recommendations
            <b-tag class="pro-tag">PRO</b-tag>
          </h1>
          <p class="subtitle">
            View similar bookmarks right when you bookmark a page.
          </p>
        </div>
        <div class="column is-8 is-offset-2">
          <video
            playsinline=""
            autoplay=""
            muted=""
            loop=""
            preload="auto"
            class="demo-img"
          >
            <source type="video/mp4" src="~assets/similar_bookmarks.mp4" />
          </video>
        </div>
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
            :isVideo="item.isVideo"
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
  margin-bottom: 1.5em;
  .cta-text {
    text-align: center;
  }
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
.demo-img {
  margin: 2em 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
</style>

<script>
import Feature3 from '../../assets/Feature_3.png'
import Feature2 from '~/assets/Highlight.mp4'

export default {
  data() {
    return {
      items: [
        {
          img: Feature3,
          title: 'Smart Import',
          subtitle: `Markie will take your already existing bookmarks from <strong>Browser</strong> or <strong>Pocket</strong> and try to convert them to smart bookmarks.`,
          isPro: true,
          isVideo: false,
        },
        {
          img: Feature2,
          title: 'Article View & Highlighting',
          subtitle: `Markie converts your bookmarks into text-only mode for later reading. 
          You can also highlight important portions of the page in this mode.`,
          isPro: false,
          isVideo: true,
        },
      ],
    }
  },
}
</script>
