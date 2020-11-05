<script>
export default {
  computed: {
    chromeLink() {
      return process.env.CHROME_EXT_LINK
    },
    mozLink() {
      return process.env.MOZ_EXT_LINK
    },
    edgeLink() {
      return process.env.EDGE_EXT_LINK
    },
    webAppLink() {
      return process.env.BM_APP_URI
    },
  },
}
</script>

<template>
  <div>
    <Navbar :fixed-on-scroll="false" :inverse="true" />
    <div class="wrapper">
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-6">
            <div class="column is-10 is-offset-1">
              <h3 class="title">Installation</h3>
              <div class="columns">
                <div class="step-item column is-4">
                  <div class="icon-wrapper blue">
                    <b-icon
                      type="is-info"
                      class="icon-el"
                      custom-size="mdi-48px"
                      icon="store"
                    />
                  </div>
                  <h6 class="title">1. Install the extension</h6>
                  <p>
                    Download the extension from your browser's extension store.
                    You can download Markie for
                    <a :href="chromeLink">Chrome</a>,
                    <a :href="mozLink">Firefox</a> and
                    <a :href="edgeLink">Edge</a>.
                  </p>

                  <div class="side-note-wrapper">
                    <p class="side-note">
                      <strong>For Chrome users:</strong> You will want to pin
                      Markie to your browser toolbar so that it is easily
                      accessible.
                    </p>
                    <br />
                    <p class="side-note">To pin the extension -</p>

                    <ul>
                      <li>
                        1. Click on <b-icon size="is-small" icon="puzzle" /> to
                        open extension menu.
                      </li>
                      <li>
                        2. Click on <b-icon size="is-small" icon="pin" /> near
                        <strong> Markie </strong> to pin Markie to the toolbar
                      </li>
                      <li>
                        3. Now, you should be able to see
                        <img class="markie-icon" src="~assets/icon_128.png" />
                        icon in your browser toolbar.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="step-item column is-4">
                  <div class="icon-wrapper green">
                    <b-icon
                      type="is-success"
                      class="icon-el"
                      custom-size="mdi-48px"
                      icon="check-bold"
                    />
                  </div>
                  <h6 class="title">2. Use it</h6>
                  <p>
                    Start bookmarking pages using the Markie extension. Click on
                    the
                    <img class="markie-icon" src="~assets/icon_128.png" /> icon
                    in your browser toolbar to start bookmarking.
                  </p>
                </div>
                <div class="step-item column is-4">
                  <div class="icon-wrapper purple">
                    <b-icon
                      type="is-primary"
                      class="icon-el"
                      custom-size="mdi-48px"
                      icon="earth"
                    />
                  </div>
                  <h6 class="title">3. Visit Web App</h6>
                  <p>
                    Visit the <a :href="webAppLink">web app</a> to manage your
                    bookmarks, filter and edit them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 1em 0;
  .title {
    margin-bottom: 50px;
  }

  .icon-wrapper {
    height: 150px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 10px solid black;
    margin-bottom: 2em;
  }
  .green {
    border-bottom-color: #49c674;
  }
  .purple {
    border-bottom-color: #6030e1;
  }
  .blue {
    border-bottom-color: #197df0;
  }
  .side-note-wrapper {
    margin-top: 1em;
    font-size: 0.85em;
  }

  .side-note {
    strong {
      color: #6030e1;
    }
    ul,
    li {
      margin-top: 1em;
    }
  }
  .step-item .title {
    font-size: 1.5rem;
  }
  .step-img {
    margin-bottom: 1em;
  }
  .markie-icon {
    height: 16px;
    width: 16px;
    border-radius: 3px;
  }
  .large {
    height: 48px;
    width: 48px;
  }
}
</style>
