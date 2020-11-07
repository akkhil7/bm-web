<template>
  <section class="section hero bg-gradient is-fullheight">
    <div class="svg-bg"></div>
    <div class="hero-head"></div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-12-tablet is-6-desktop">
            <h1 class="title">
              Intelligent <br />
              bookmarking <br />
              for everyone
            </h1>
            <mq-layout mq="hd+">
              <b-button :class="downloadButtonStyle" @click="onDownloadClick">
                {{ downloadMsg }} →</b-button
              >
            </mq-layout>
          </div>
          <div class="column is-12-tablet is-6-desktop preview-container">
            <img
              src="~assets/Demo_1.svg"
              class="demo-img"
              alt="Markie AI Preview"
            />
          </div>
          <div class="column is-12-tablet is-6-desktop">
            <mq-layout
              :style="{ textAlign: 'center' }"
              :mq="['sm', 'md', 'lg']"
            >
              <b-button :class="downloadButtonStyle" @click="onDownloadClick">
                {{ downloadMsg }} →</b-button
              >
            </mq-layout>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-gradient {
  position: relative;
  overflow: hidden;
  background-color: #523a78;
  background-image: linear-gradient(
    316deg,
    #635bff 0%,
    #552fbc 14%,
    #190f26 90%
  );
}

.container {
  width: 100%;
}

.sign-in-btn {
  background-color: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600;
  border: none;
}

.svg-bg {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")
    repeat 0 0;
  animation: slide 30s linear infinite;
  height: 200%;
  width: 200%;
  margin-left: -1.5rem;
  position: absolute;
  margin-top: -3em;
  opacity: 0.5;
}

@keyframes slide {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-400px, -400px, -400px);
  }
}

.preview-container {
  text-align: center;
  @media (min-width: 1024px) {
    text-align: right;
  }
  .demo-img {
    box-shadow: 0 0 100px 0 rgba(255, 255, 255, 0.4),
      0 50px 30px -10px rgba(0, 0, 0, 0.35);
    border-radius: 12px;
  }
}

.get-markie-btn {
  margin: 1em 0;
  text-align: center;
  background-color: #fb8332;
  color: white;
  font-weight: 500;
  transition: all 250ms ease;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02);
  width: 100%;
  @media (min-width: 600px) {
    width: auto;
  }
}

.no-support-btn {
  background-color: white;
  color: #6030e1;
  font-size: 0.8em;
  @media (min-width: 600px) {
    font-size: 1em;
  }
}

.download-btn {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
}

.download-btn:hover {
  color: #fff;
  transition: all 250ms ease;
  box-shadow: 0 1px 10px 0 rgba(255, 255, 255, 0.2);
}

.download-btn:active,
.download-btn:hover,
.get-markie-btn:active,
.get-markie-btn:hover {
  background-color: #fa6400 !important;
}

.no-support-btn:active,
.no-support-btn:hover {
  background-color: rgba(255, 255, 255, 1) !important;
  color: #6030e1 !important;
  filter: brightness(0.8);
}

.hero-body {
  .title,
  .subtitle {
    color: white;
  }
  .title {
    font-size: 3em;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 4em;
    }
    @media (min-width: 1024px) {
      font-size: 5em;
      text-align: left;
    }
  }
  .subtitle {
    color: whitesmoke;
    margin-top: 1em;
  }
}

//primary - #635BFF
</style>

<script>
import {
  CHROME_EXT_LINK,
  MOZ_EXT_LINK,
  EDGE_EXT_LINK,
} from '~/util/extensionLinks'

export default {
  computed: {
    supportedBrowsers() {
      return ['chrome', 'firefox', 'edge']
    },
    browserName() {
      return this.$detectBrowser
    },
    downloadMsg() {
      switch (this.browserName) {
        case 'chrome':
          return 'Download for Chrome'
        case 'firefox':
          return 'Download for Firefox'
        case 'edge':
          return 'Download for Edge'
        default:
          return 'Your browser is not supported by Markie'
      }
    },
    downloadButtonStyle() {
      if (this.supportedBrowsers.includes(this.browserName)) {
        return 'get-markie-btn'
      } else {
        return 'get-markie-btn no-support-btn'
      }
    },
  },
  methods: {
    onDownloadClick() {
      switch (this.browserName) {
        case 'chrome':
          window.open(CHROME_EXT_LINK, '_blank')
          break
        case 'firefox':
          window.open(MOZ_EXT_LINK, '_blank')
          break
        case 'edge':
          window.open(EDGE_EXT_LINK, '_blank')
          break
        default:
      }
    },
  },
}
</script>
