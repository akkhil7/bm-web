<script>
export default {
  name: 'Navbar',
  data() {
    return {
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
  },
}
</script>
<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <img src="~assets/icon_128.png" class="logo" alt="Logo" />
        <p class="logo--text">Markie</p>
        <span
          @click="toggleMenu"
          class="navbar-burger burger"
          data-target="navbarMenuHeroC"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <transition name="nav-slide">
        <div v-show="shouldShowMenu" id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Features </a>
            <a class="navbar-item"> Pricing </a>
            <a class="navbar-item"> Support </a>
            <b-button class="navbar-item sign-in-btn">
              Sign In / Register
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

.navbar-menu {
  .navbar-item {
    color: #fff;
    margin: 0.5em;
    background-color: transparent;
  }
  .navbar-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}

.navbar {
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top: 1em;
  .navbar-menu {
    overflow: hidden;
    padding: 0.5em 1em;
    border-radius: 5px;
    margin: 1em;
    background-color: transparent;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.2);
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
      color: white !important;
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
  box-shadow: 0 0 40px 20px rgba(172, 94, 255, 0.15);
}

.logo--text {
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-left: 0.5em;
}
</style>