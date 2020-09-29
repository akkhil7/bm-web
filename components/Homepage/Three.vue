<template>
  <section class="wrapper section">
    <div class="container">
      <div class="columns is-multiline is-vcentered">
        <div class="cta column is-10 is-offset-1">
            <div class="cta--triangles"></div>
            <div class="container">
              <h1 class="title cta--title">Get started with Markie AI</h1>
              <p class="subtitle cta--subtitle">Take bookmarking to the next level.</p>
              <b-button class="cta--btn">Download for Free</b-button>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  position: relative;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23635bff'/%3E%3Cstop offset='1' stop-color='%23752ced' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234903d0'/%3E%3Cstop offset='1' stop-color='%234903d0' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231d0a5c'/%3E%3Cstop offset='1' stop-color='%231d0a5c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c187ff'/%3E%3Cstop offset='1' stop-color='%23c187ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b1b91'/%3E%3Cstop offset='1' stop-color='%233b1b91' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2307011f'/%3E%3Cstop offset='1' stop-color='%2307011f' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 40px 0 rgba(0,0,0,0.25);
  text-align: center;
  .container {
    margin: 2em 0;
  }
}

.cta--title {
  font-size: 2.75em;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 5px rgba(0,0,0,0.5);
}

.cta--subtitle {
  color: #fff;
  text-shadow: 0 1px 5px rgba(0,0,0,0.5);
}

.cta--btn {
  border: none;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.125);
  color: #635bff;
  font-weight: 600;
}

.cta--btn:hover  {
  background-color: rgba(255,255,255,0.8);
  transform: translateY(-1px);
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
  transition: all 250ms ease;
}

.cta--triangles {
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
  border-radius: 10px;
}
</style>