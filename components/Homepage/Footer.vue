<template>
  <section class="wrapper section">
    <div class="container">
      <div class="columns is-mobile is-multiline is-vcentered">
        <div class="column is-10 is-offset-1">
          <div class="columns is-mobile is-multiline">
            <div class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop">
              <h6 class="title">Downloads</h6>
              <p class="sub-category">for Chrome</p>
              <p class="sub-category">for Firefox <em>(soon)</em></p>
              <p class="sub-category">for Edge <em>(soon)</em></p>
            </div>
            <div class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop">
              <h6 class="title">Resources</h6>
              <p class="sub-category">Features</p>
              <p class="sub-category">Report a bug</p>
            </div>
            <div class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop">
              <h6 class="title">Company</h6>
              <p class="sub-category">About</p>
              <p class="sub-category">Careers</p>
              <p class="sub-category">Blog</p>
            </div>
            <div class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop">
              <h6 class="title">Follow Us</h6>
              <p class="sub-category"> Twitter</p>
              <p class="sub-category"> Instagram</p>
              <p class="sub-category"> Facebook</p>
            </div>
            <div class="footer-item column is-half-mobile is-one-third-tablet is-one-fifth-desktop">
              <h6 class="title">Legal</h6>
              <p class="sub-category"> Privacy Policy</p>
              <p class="sub-category"> Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div class="footer--logo column is-4 is-offset-4">
          <img src="~assets/icon_128.png" />
          <p> Copyright © 2020, Markie AI </p>
        </div>
      </div>
    </div>
  </section>
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
    color: rgba(0,0,0,0.5);
    font-size: 0.9em;
  }
}
.wrapper {
  background-color: whitesmoke;
  margin-top: 4em;
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
    color: rgba(0,0,0,0.5);
  }
}
</style>