<template>
  <div class="wrapper">
    <Navbar :inverse="true" :fixed-on-scroll="false" />
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-narrow">
            <div class="sidebar">
              <h3 v-for="item in items" :key="item.key">
                <NuxtLink
                  :to="{ path: `/legal/${item.key}` }"
                  :class="isActive(item.key)"
                >
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </h3>
            </div>
          </div>
          <div class="column">
            <NuxtChild />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    const query = this.$route.query
    return {
      items: [
        {
          key: '',
          label: 'Terms and Conditions',
        },
        {
          key: 'privacy',
          label: 'Privacy Policy',
          path: 'privacy',
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
      selected: query.view,
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
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    isActive(key) {
      const path = this.$route.path
      let subPath = path.split('/legal')[1]
      subPath = subPath[0] === '/' ? subPath.substring(1) : subPath

      if (subPath === '' && key === '') {
        return 'active'
      } else if (subPath.includes(key)) {
        if (key === '' || key === '/') {
          return ''
        } else {
          return 'active'
        }
      } else return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}

.sign-in-btn {
  background-color: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600;
  border: none;
}

.sidebar {
  padding: 2em;
  padding-left: 0;
  box-shadow: 10px -10px 10px -5px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.5em;
    cursor: pointer;
    margin: 1em 0;
  }
  a {
    color: #4a4a4a;
    font-weight: 600;
    transition: all 200ms ease;
  }
  .active,
  a:hover {
    color: #6030e1;
  }
}

.hero-body {
  .title {
    color: white;
  }
}
</style>
