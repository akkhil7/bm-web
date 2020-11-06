<script>
import {
  CHROME_EXT_LINK,
  MOZ_EXT_LINK,
  EDGE_EXT_LINK,
} from '~/util/extensionLinks'

export default {
  methods: {
    downloadFor(key) {
      switch (key) {
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
    goToLegal(key) {
      if (key) {
        this.$router.push(`legal/${key}`)
      } else {
        this.$router.push('legal')
      }
    },
    goToSocial(key) {
      switch (key) {
        case 'twitter':
          window.open('https://twitter.com/markiehq', '_blank')
          break
        case 'instagram':
          window.open('https://www.instagram.com/getmarkie/', '_blank')
          break
        case 'facebook':
          window.open('https://www.facebook.com/getmarkie/', '_blank')
          break
        default:
          break
      }
    },
    goToCompanyLinks(key) {
      switch (key) {
        case 'about':
          this.$router.push('about')
          break
        default:
          break
      }
    },
    goToResource(key) {
      switch (key) {
        case 'mail':
          window.location.href = 'mailto:support@getmarkie.com'
          break
        case 'installation':
          this.$router.push('installation')
          break
        default:
          break
      }
    },
  },
}
</script>
<template>
  <footer class="section">
    <div class="container">
      <div class="columns is-mobile is-multiline is-vcentered">
        <div class="column is-10 is-offset-1">
          <div class="columns is-mobile is-multiline">
            <div
              class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            >
              <h6 class="title">Downloads</h6>
              <p class="sub-category" @click="downloadFor('chrome')">
                for Chrome
              </p>
              <p class="sub-category" @click="downloadFor('firefox')">
                for Firefox
              </p>
              <p class="sub-category" @click="downloadFor('edge')">for Edge</p>
            </div>
            <div
              class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            >
              <h6 class="title">Resources</h6>
              <p class="sub-category" @click="goToResource('installation')">
                Installation
              </p>
              <p class="sub-category" @click="goToResource('mail')">
                Report a bug
              </p>
            </div>
            <div
              class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            >
              <h6 class="title">Company</h6>
              <p class="sub-category" @click="goToCompanyLinks('about')">
                About
              </p>
              <p class="sub-category" @click="goToCompanyLinks('blog')">
                Blog (coming soon)
              </p>
            </div>
            <div
              class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            >
              <h6 class="title">Follow Us</h6>
              <p class="sub-category" @click="goToSocial('twitter')">Twitter</p>
              <p class="sub-category" @click="goToSocial('instagram')">
                Instagram
              </p>
              <p class="sub-category" @click="goToSocial('facebook')">
                Facebook
              </p>
            </div>
            <div
              class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop"
            >
              <h6 class="title">Legal</h6>
              <p class="sub-category" @click="goToLegal()">Terms of Service</p>
              <p class="sub-category" @click="goToLegal('privacy')">
                Privacy Policy
              </p>
              <p class="sub-category" @click="goToLegal('cookie')">
                Cookie Policy
              </p>
              <p class="sub-category" @click="goToLegal('disclaimer')">
                Disclaimer
              </p>
            </div>
          </div>
        </div>
        <div class="footer--logo column is-4 is-offset-4">
          <img src="~assets/icon_128.png" />
          <p>Copyright © 2020, Markie - getmarkie.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer--logo {
  text-align: center;

  img {
    height: 48px;
    width: 48px;
    border-radius: 4px;
    filter: grayscale(100%);
    margin: 1em 0;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9em;
  }
}
footer {
  background-color: whitesmoke;
  margin-top: 100px;
}
.footer-item {
  .title {
    color: black;
    font-weight: 600;
    margin: 1em 0;
    font-size: 1em;
  }
  .sub-category {
    margin: 0.5em 0;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 200ms ease;
  }
  .sub-category:hover {
    color: #6030e1;
    font-weight: 500;
  }
}
</style>
