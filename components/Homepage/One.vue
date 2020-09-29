<template>
  <section class="section hero bg-gradient is-fullheight">
  <div class="svg-bg"></div>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <img src="~assets/icon_128.png" class="logo" alt="Logo">
          <p class="logo--text">Markie</p>
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
            <b-button class="navbar-item sign-in-btn">
              Sign In / Register
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
            <b-button class="get-markie-btn"> Download for Chrome →</b-button>
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


<style lang="scss" scoped>
.bg-gradient {
  background-color: #523a78;
  background-image: linear-gradient(316deg, #635bff 0%, #552fbc 14%, #190F26 90%),;
}

.sign-in-btn {
  background-color: rgba(255,255,255,0.2);
  font-weight: 600;
  border: none;
}

.svg-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  width: 100vw;
  position: absolute;
  margin-top: -3em;
  opacity: 0.5;
}

.preview-container {
  text-align: right;
  .demo-img {
    box-shadow: 0 0 100px 0 rgba(255,255,255,0.4), 0 50px 30px -10px rgba(0, 0, 0, 0.35);
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

.download-btn {
  background-color: rgba(0,0,0,0.2);
  color: #fff;
}

.download-btn:hover {
  color: #fff;
  transition: all 250ms ease;
  box-shadow: 0 1px 10px 0 rgba(255,255,255,0.2);
}

.download-btn:active, .download-btn:hover, .get-markie-btn:active, .get-markie-btn:hover {
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