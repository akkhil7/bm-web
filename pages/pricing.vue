<script>
export default {
  name: 'Plan',
  data() {
    return {
      isAnnually: true,
      isMonthly: false,
    }
  },
  computed: {
    getAnnualBtnClass() {
      return this.isAnnually ? 'is-primary' : ''
    },
    price() {
      return this.isAnnually ? '$39.99' : '$3.99'
    },
    monthlyOrYearly() {
      return this.isAnnually ? 'yearly' : 'monthly'
    },
  },
  methods: {
    toggleAnnual() {
      this.isAnnually = true
      this.isMonthly = false
    },
    toggleMonthly() {
      this.isAnnually = false
      this.isMonthly = true
    },
    getBtnClass(value) {
      return value ? 'is-primary' : ''
    },
  },
}
</script>
<template>
  <div class="wrapper">
    <!-- <Navbar /> -->
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <h1 class="title">Introducing Markie Pro</h1>
            <p class="subtitle">Familiarize yourself with the flexible pricing plans given below.</p>
          </div>
        </div>
        <div class="columns is-multiline center">
          <div class="column is-narrow">
            <div class="switch-btn-wrapper">
              <b-button
                :type="getBtnClass(isAnnually)"
                @click="toggleAnnual"
                rounded
                >Annually</b-button
              >
              <b-button
                :type="getBtnClass(isMonthly)"
                @click="toggleMonthly"
                rounded
                >Monthly</b-button
              >
            </div>
          </div>
          <div class="column is-12 center">
            <p class="info">Save upto 16% by paying annually.</p>
          </div>
        </div>
        <div class="columns is-gapless is-multiline plan-wrapper">
          <div class="column is-4"></div>
          <div class="column is-4 price-wrapper">
            <h1 class="plan-name">Basic</h1>
            <div class="price">
              <span class="title"> Free </span>
            </div>
          </div>
          <div class="column is-4 price-wrapper pro-plan">
            <h1 class="plan-name">Pro</h1>
            <b-tag v-if="isAnnually"> SAVE $7 </b-tag>
            <div class="price">
              <span class="title"> {{ price }} </span>
              <span class="period"> {{ monthlyOrYearly }} </span>
            </div>
          </div>
          <div class="column is-4">
            <p class="feature-label">
              Smart Bookmarks (automatic categorization & tagging)
            </p>
            <p class="feature-label">Article mode</p>
            <p class="feature-label">Highlighting</p>
            <p class="feature-label">Permanent storage of articles</p>
            <p class="feature-label">Bookmark recommendations</p>
            <p class="feature-label">Ad-free experience</p>
          </div>
          <div class="column is-4">
            <p class="feature-value">
              <span class="feature-value-text">10 smart bookmarks / month</span>
            </p>
            <p class="feature-value">
              <span class="feature-value-text">Unlimited</span>
            </p>
            <p class="feature-value">
              <span class="feature-value-text">5 highlights / month</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" icon="check-bold"> </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" type="is-danger" icon="close-thick">
              </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" type="is-danger" icon="close-thick">
              </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value buy-btn">
              <b-button type="is-primary"> Get started </b-button>
            </p>
          </div>
          <div class="column is-4 pro-plan">
            <p class="feature-value">
              <!-- <b-icon size="is-medium" type="is-primary" icon="check-bold"> </b-icon> -->
              <span class="feature-value-text">Unlimited smart bookmarks</span>
            </p>
            <p class="feature-value">
              <!-- <b-icon size="is-medium" type="is-primary" icon="check-bold"> </b-icon> -->
              <span class="feature-value-text">Unlimited</span>
            </p>
            <p class="feature-value">
              <!-- <b-icon size="is-medium" type="is-primary" icon="check-bold"> </b-icon> -->
              <span class="feature-value-text">Unlimited highlights</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" type="is-light" icon="check-bold">
              </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" type="is-light" icon="check-bold">
              </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value">
              <b-icon size="is-medium" type="is-light" icon="check-bold">
              </b-icon>
              <span> &nbsp;</span>
            </p>
            <p class="feature-value buy-btn">
              <b-button> Upgrade </b-button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.center {
  justify-content: center;
  text-align: center;
}
.switch-btn-wrapper {
  background-color: #fff;
  padding: 0.1rem;
  border-radius: 290486px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  button {
    border: none;
    transition: all 200ms ease-out;
  }
  .is-primary {
    background-color: #6030e1;
    font-weight: 300;
  }
  button:focus,
  button:active {
    box-shadow: none !important;
  }
}
.wrapper {
  margin: 2em 0;
}
.info {
  color: #6030e1;
  font-weight: 600;
}

.plan-wrapper {
  margin: 1em 0;
  .feature-label {
    padding: 1.2em 0;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 60px;
  }
  .feature-value {
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    .feature-value-text {
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .price-wrapper {
    text-align: center;
    .price {
      text-align: center;
      margin: 0.5em 0;
      .title {
        font-weight: 400;
      }
    }
    .period {
      font-size: 0.9em;
      color: #fff;
      font-weight: 200;
    }
    .plan-name {
      font-size: 2rem;
      margin: 1em 0;
      font-weight: 800;
    }
  }
  .buy-btn {
    border: none;
    height: 100px;
    button {
      width: 60%;
      font-weight: 600;
      background-color: #6030e1; 
    }
  }
  .pro-plan {
    position: relative;
    background-color: #6030e1;
    .feature-value {
      border-bottom-color: rgba(255, 255, 255, 0.2);
    }
    .price .title,
    .price .period,
    .plan-name,
    .feature-value-text {
      color: white;
    }
    .tag {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.7);
      font-weight: 600;
    }
    .buy-btn {
      button {
        color: #6030e1;
        font-weight: 600;
        background-color: white;
      }
    }
  }

}
</style>