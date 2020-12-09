<script>
import { CURRENT_USER } from '../queries'
export default {
  name: 'Navbar',
  props: {
    inverse: {
      type: Boolean,
      default: false,
    },
    fixedOnScroll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    let computedClassName = 'navbar'
    if (!this.fixedOnScroll) {
      computedClassName += ' not-fixed'
    }
    if (this.inverse) {
      computedClassName += ' inverse'
    }
    return {
      showMenu: false,
      loading: false,
      currentUser: null,
      className: computedClassName,
    }
  },
  computed: {
    shouldShowMenu() {
      const breakpoints = ['sm', 'md', 'lg']
      return breakpoints.includes(this.$mq) ? this.showMenu : true
    },
    signInOrDashboard() {
      return !this.currentUser ? 'Sign In' : 'Dashboard'
    },
  },
  mounted() {
    this.loading = true
    this.$apollo
      .query({
        query: CURRENT_USER,
      })
      .then(({ data }) => {
        this.currentUser = data.currentUser
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
    if (this.fixedOnScroll) {
      this.handleDebouncedScroll = this.handleScroll
      window.addEventListener('scroll', this.handleDebouncedScroll)
    }
  },
  beforeDestroy() {
    if (this.fixedOnScroll) {
      window.removeEventListener('scroll', this.handleDebouncedScroll)
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.className = 'navbar inverse'
      } else {
        this.className = this.inverse ? 'navbar inverse' : 'navbar'
      }
    },
    smoothScroll(id) {
      const myEl = document.getElementById(id)
      if (myEl) {
        this.$smoothScroll({
          scrollTo: myEl,
          updateHistory: true,
          hash: '#' + id,
        })
      } else {
        this.$router.push(`/#${id}`)
      }
    },
    onClickSignInOrDashboard() {
      const { BM_APP_URI } = process.env
      if (!this.currentUser) {
        window.location.replace(`${BM_APP_URI}/login`)
      } else {
        window.location.replace(`${BM_APP_URI}/dashboard`)
      }
    },
  },
}
</script>
<template>
  <div v-if="loading">
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </div>
  <header v-else :class="className">
    <div class="container">
      <div class="navbar-brand">
        <img src="~assets/icon_128.png" class="logo" alt="Logo" />
        <NuxtLink to="/"><p class="logo--text">Markie</p></NuxtLink>
        <span
          class="navbar-burger burger"
          data-target="navbarMenuHeroC"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <transition name="nav-slide">
        <div v-show="shouldShowMenu" id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" @click="smoothScroll('features')">
              Features
            </a>
            <NuxtLink to="/pricing" class="navbar-item">Pricing</NuxtLink>
            <a class="navbar-item" @click="smoothScroll('faq')"> FAQ </a>
            <b-button
              class="navbar-item sign-in-btn"
              @click="onClickSignInOrDashboard"
            >
              {{ signInOrDashboard }}
            </b-button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.navbar-brand,
.navbar-menu {
  display: flex;
  align-items: center;
}

.not-fixed {
  position: relative !important;
}

.navbar-menu {
  .navbar-item {
    margin: 0.5em;
    background-color: transparent;
    font-weight: 600;
  }
  .navbar-item:hover {
    color: #6030e1;
  }
}

.navbar {
  position: fixed;
  transition: background-color 200ms ease;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 1em;
  overflow: hidden;
  .navbar-menu {
    overflow: hidden;
    padding: 0.5em 1em;
    border-radius: 5px;
    margin: 1em;
    background-color: transparent;
    box-shadow: 0 8px 16px 0 rgba(10, 10, 10, 0.2);
    @media (min-width: 1024px) {
      padding: 0;
      margin: 0;
      box-shadow: none;
    }
  }
  .navbar-burger {
    span {
      height: 2px;
      width: 20px;
      color: black !important;
    }

    color: white !important;
  }
}

.nav-slide-enter-active,
.nav-slide-leave-active {
  transition: all 0.5s;
}
.nav-slide-enter, .nav-slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
  padding: 0;
  box-shadow: none;
  transform: skewX(-20deg) translateY(-50px);
}
.sign-in-btn {
  background-color: rgba(255, 255, 255, 0.1) !important;
  font-weight: 600;
  border: none;
}

.logo {
  height: 48px;
  width: 48px;
  border-radius: 8px;
}

.logo--text {
  font-size: 24px;
  font-weight: 600;
  color: #363636;
  margin-left: 0.5em;
}
.inverse {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 40px 20px rgba(30, 19, 45, 0.05);
  .logo {
    box-shadow: none;
  }
  .logo--text {
    color: rgb(30, 19, 45);
  }
  .navbar-menu {
    .navbar-item {
      color: rgb(30, 19, 45);
      transition: all 200ms ease;
      font-weight: 600;
    }
    .navbar-item:hover {
      color: #6030e1;
      background-color: white;
    }
  }
  .navbar-burger {
    span {
      color: rgb(30, 19, 45) !important;
    }

    color: rgb(30, 19, 45) !important;
  }
}
</style>
