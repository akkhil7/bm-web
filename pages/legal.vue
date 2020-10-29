<template>
  <div class="wrapper">
    <Navbar />
    <section>
      <div class="container">
      <div class="columns">
        <div class="column is-narrow">
          <div class="sidebar">
            <h3
              v-for="item in items"
              :key="item.key"
              @click="selectOption(item.key)"
              :class="getClass(item.key)"
            >
              <span>{{ item.label }}</span>
            </h3>
          </div>
        </div>
        <div class="column">
          <Terms v-if="selected === 'tnc'" />
          <PrivacyPolicy v-else-if="selected === 'privacy'" />
          <CookiePolicy v-else-if="selected === 'cookie'" />
          <Disclaimer v-else />
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          key: 'tnc',
          label: 'Terms and Conditions',
        },
        {
          key: 'privacy',
          label: 'Privacy Policy',
        },
        {
          key: 'cookie',
          label: 'Cookie Policy',
        },
        {
          key: 'disclaimer',
          label: 'Disclaimer',
        },
      ],
      selected: 'tnc',
      showMenu: false,
    }
  },
  computed: {
    shouldShowMenu() {
      const breakpoints = ['sm', 'md', 'lg']
      return breakpoints.includes(this.$mq) ? this.showMenu : true
    },
  },
  methods: {
    selectOption(key) {
      this.selected = key
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    getClass(key) {
      return this.selected === key ? 'active' : ''
    },
  },
}
</script>


<style lang="scss" scoped>
.wrapper {
  margin-bottom: 2em;
  overflow: hidden;
}

.sign-in-btn {
  background-color: rgba(255,255,255,0.1) !important;
  font-weight: 600;
  border: none;
}

.sidebar {
  padding: 2em;
  padding-left: 0;
  box-shadow: 10px -10px 10px -5px rgba(0,0,0,0.1);
  h3 {
    font-size: 1.5em;
    cursor: pointer;
    margin: 1em 0;
  }
  h3:hover, .active {
    color: #635bff;
  }
}

.hero-body {
  .title {
    color: white;
  }
}
</style>