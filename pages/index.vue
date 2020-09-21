<template>
  <section class="section hero bg-gradient is-fullheight">
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <img src="~assets/icon_128.png" class="logo" alt="Logo">
          <p class="logo--text">Markie <span class="logo-text">AI</span></p>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Features
            </a>
            <a class="navbar-item">
              Pricing
            </a>
            <a class="navbar-item">
              Support
            </a>
            <b-button class="navbar-item get-markie-btn">
              Get Markie
            </b-button>
          </div>
        </div>
      </div>
    </header>
    </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-narrow">
          <h1 class="title">
            Intelligent <br /> bookmarking <br />
            for everyone
          </h1>
          <h2 class="subtitle">
            <b-button> Download for Chrome →</b-button>
          </h2>
        </div>
        <div class="column preview-container">
          <img src="~assets/Demo_1.svg" class="demo-img" alt="Markie AI Preview" />
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',

  components: {

  },
}
</script>

<style lang="scss" scoped>
.bg-gradient {
  background-color: #523a78;
  background-image: linear-gradient(316deg, #635bff 0%, #552fbc 14%, #190F26 90%);
}

.preview-container {
  text-align: right;
  .demo-img {
    box-shadow: 0 0 100px 0 rgba(255,255,255,0.4), 0 80px 40px -30px rgba(0, 0, 0, 0.45);
    border-radius: 12px;
  }
}

.get-markie-btn {
  background-color: #fb8332;
  color: white;
  font-weight: 500;
  transition: all 250ms ease;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.02);
}

.get-markie-btn:active, .get-markie-btn:hover {
  background-color: #fa6400 !important;
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

.navbar-brand, .navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-menu {
  .navbar-item {
    color: #fff;
    margin: 0 0.5em;
  }
  .navbar-item:hover {
    background-color: rgba(0,0,0,0.1);
    border-radius: 5px;
  }
}

.hero-body {
  .title, .subtitle {
    color: white;
  }
  .title {
    font-size: 5em;
  }
  .subtitle {
    color: whitesmoke;
    margin-top: 1em;
  }
}


//primary - #635BFF
</style>