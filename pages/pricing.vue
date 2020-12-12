<script>
import { CURRENT_USER } from '../queries'
import { CREATE_STRIPE_SESSION } from '~/mutations'
const PRICE_ID_MONTHLY = process.env.PRICE_ID_MONTHLY
const PRICE_ID_YEARLY = process.env.PRICE_ID_YEARLY
export default {
  name: 'Plan',
  data() {
    return {
      isAnnually: true,
      isMonthly: false,
      showCard: false,
      priceId: PRICE_ID_YEARLY,
      monthlyPriceId: PRICE_ID_MONTHLY,
      yearlyPriceId: PRICE_ID_YEARLY,
      isStripeLoaded: false,
      currentUser: null,
      CREATE_STRIPE_SESSION,
      loading: false,
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
    isBasic() {
      if (!this.currentUser) return false
      return this.currentUser.setting.accountType === 'BASIC'
    },
    isPro() {
      if (!this.currentUser) return false
      return this.currentUser.setting.accountType === 'PRO'
    },
    isFreeBtnText() {
      if (this.currentUser) {
        return this.currentUser.setting.accountType === 'BASIC'
          ? 'Current Plan'
          : 'Get Started'
      } else {
        return 'Get Started'
      }
    },
    isProBtnText() {
      if (this.currentUser) {
        return this.currentUser.setting.accountType === 'Pro'
          ? 'Current Plan'
          : 'Upgrade'
      } else {
        return 'Upgrade'
      }
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
  },
  methods: {
    initStripe() {
      // use env here
      const { STRIPE_PUBLISHABLE_KEY } = process.env
      if (!this.stripe) {
        // eslint-disable-next-line
        this.stripe = Stripe(STRIPE_PUBLISHABLE_KEY)
      }
    },
    toggleAnnual() {
      this.isAnnually = true
      this.isMonthly = false
      this.priceId = this.yearlyPriceId
    },
    toggleMonthly() {
      this.isAnnually = false
      this.isMonthly = true
      this.priceId = this.monthlyPriceId
    },
    getBtnClass(value) {
      return value ? 'is-primary' : ''
    },
    goToStripeCheckout({ data }) {
      this.stripe
        .redirectToCheckout({
          sessionId: data.createStripeSession.session,
        })
        .then(this.handleResult)
    },
    handleResult() {},
    onError() {},
    onClickBasic() {
      if (!this.currentUser) {
        window.location.replace(`${process.env.BM_APP_URI}/signup`)
      }
    },
    goToLogin() {
      window.location.replace(`${process.env.BM_APP_URI}/signup`)
    },
  },
  head() {
    return {
      title: 'Markie - Pricing',
      script: [
        {
          hid: 'stripe',
          src: 'https://js.stripe.com/v3/',
          defer: true,
          // Changed after script load
          callback: () => {
            this.isStripeLoaded = true
            this.initStripe()
          },
        },
      ],
    }
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
  <div v-else>
    <Navbar :inverse="true" :fixed-on-scroll="false" />
    <section class="wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-12 hero-text">
            <h1 class="title">Introducing Markie Pro</h1>
            <p class="subtitle">
              Familiarize yourself with the flexible pricing plans given below.
            </p>
          </div>
        </div>
        <div class="columns is-multiline center is-mobile">
          <div class="column is-narrow">
            <div class="switch-btn-wrapper">
              <b-button
                :type="getBtnClass(isAnnually)"
                rounded
                @click="toggleAnnual"
                >Annually</b-button
              >
              <b-button
                :type="getBtnClass(isMonthly)"
                rounded
                @click="toggleMonthly"
                >Monthly</b-button
              >
            </div>
          </div>
          <div class="column is-12 center">
            <p class="info">Save upto 16% by paying annually</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-8">
            <b-tag class="announcement" type="is-success is-light"
              >Free PRO Membership for 1 year</b-tag
            >
          </div>
        </div>
        <div class="columns is-gapless is-multiline plan-wrapper">
          <div class="column is-4 feature-list">
            <div class="price-wrapper"></div>
            <div class="feature-label">
              Smart Bookmarks
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  Smart Bookmarks are bookmarks that are automatically
                  categorized and tagged using AI.
                </template>
              </b-tooltip>
            </div>
            <div class="feature-label">
              Standard Bookmarks
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  If the webpage cannot be parsed, then it will be saved as a
                  standard bookmark. This will not deplete your smart bookmarks
                  quota.
                </template>
              </b-tooltip>
            </div>
            <div class="feature-label">
              Article View
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  Markie automatically captures articles from websites and
                  presents a minimalistic view, just for reading.
                </template>
              </b-tooltip>
            </div>
            <div class="feature-label">
              Highlighting
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  You can highlight your favourite parts in the article view
                  mode.
                </template>
              </b-tooltip>
            </div>
            <div class="feature-label">
              Permanent storage of articles
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  Even if a page gets taken down, the articles stored in Markie
                  will stay forever.
                </template>
              </b-tooltip>
            </div>
            <div class="feature-label">
              Bookmark recommendations
              <b-tooltip type="is-white" position="is-top" multilined>
                <div class="help-circle">?</div>
                <template v-slot:content>
                  Markie shows you recommendations based on your previous
                  bookmarks.
                </template>
              </b-tooltip>
            </div>
            <!-- <p class="feature-label">Ad-free experience</p> -->
          </div>
          <div class="column is-4">
            <div class="price-wrapper">
              <h1 class="plan-name">Basic</h1>
              <div class="price">
                <span class="title"> Free </span>
              </div>
            </div>
            <p class="feature-value">
              <span class="feature-value-text">100 Smart Bookmarks</span>
            </p>
            <p class="feature-value">
              <span class="feature-value-text"
                >Unlimited Standard Bookmarks</span
              >
            </p>
            <p class="feature-value">
              <span class="feature-value-text">Unlimited Articles</span>
            </p>
            <p class="feature-value">
              <span class="feature-value-text">5 Highlights</span>
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
            <!-- <p class="feature-value">
              <b-icon size="is-medium" type="is-danger" icon="close-thick">
              </b-icon>
              <span> &nbsp;</span>
            </p> -->
            <p class="feature-value buy-btn">
              <b-button type="is-primary" @click="onClickBasic">
                {{ isFreeBtnText }}
              </b-button>
            </p>
          </div>
          <div class="column is-4 pro-plan">
            <div class="price-wrapper pro-plan">
              <h1 class="plan-name">Pro</h1>
              <b-tag v-if="isAnnually"> SAVE $7 </b-tag>
              <div class="price">
                <span class="title"> {{ price }} </span>
                <span class="period"> {{ monthlyOrYearly }} </span>
              </div>
            </div>
            <p class="feature-value">
              <!-- <b-icon size="is-medium" type="is-primary" icon="check-bold"> </b-icon> -->
              <span class="feature-value-text">Unlimited Smart Bookmarks</span>
            </p>
            <p class="feature-value">
              <span class="feature-value-text"
                >Unlimited Standard Bookmarks</span
              >
            </p>
            <p class="feature-value">
              <!-- <b-icon size="is-medium" type="is-primary" icon="check-bold"> </b-icon> -->
              <span class="feature-value-text">Unlimited Articles</span>
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
            <!-- <p class="feature-value">
              <b-icon size="is-medium" type="is-light" icon="check-bold">
              </b-icon>
              <span> &nbsp;</span>
            </p> -->
            <ApolloMutation
              v-if="currentUser"
              :style="{ width: '100%' }"
              :mutation="CREATE_STRIPE_SESSION"
              :variables="{
                input: {
                  priceId,
                },
              }"
              @done="goToStripeCheckout"
              @error="onError"
            >
              <template v-slot="{ mutate, loading: stripeLoading }">
                <p class="feature-value buy-btn">
                  <b-button
                    v-if="isBasic"
                    :loading="stripeLoading"
                    @click="mutate"
                  >
                    Upgrade
                  </b-button>
                  <b-button v-else> Current Plan </b-button>
                </p>
              </template>
            </ApolloMutation>
            <p v-else class="feature-value buy-btn">
              <b-button @click="goToLogin"> Upgrade </b-button>
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.announcement {
  display: flex;
  background-color: #cbf4c9 !important;
  color: #0e6245 !important;
  font-weight: bold;
  @media (min-width: 768px) {
    transform: translateX(-16px);
  }
}

.center {
  justify-content: center;
  text-align: center;
}
.hero-text {
  margin: 2em 0;
  text-align: center;
  .title {
    font-weight: 800;
    font-size: 4rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}

.feature-list {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
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
  margin: 50px 0;
}
.info {
  color: #6030e1;
  font-weight: 600;
}

.help-circle {
  display: flex;
  background: black;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin: 0 0.5em;
  border-radius: 50%;
  font-size: 0.8em;
  color: white;
  cursor: pointer;
}
.plan-wrapper {
  padding: 0.75rem;
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
    padding-top: 1em;
    height: 150px;
    width: 100%;
    text-align: center;
    .price {
      text-align: center;
      margin: 0.5em 0;
      position: relative;
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
      font-weight: 800;
    }
  }
  .buy-btn {
    border: none;
    height: 100px;
    button {
      width: 60%;
      font-weight: 600;
      border-color: #6030e1;
      color: #6030e1;
      background-color: white;
      border-width: 2px;
    }
  }
  .pro-plan {
    background-color: #6030e1;
    .feature-value {
      border-bottom-color: rgba(255, 255, 255, 0.2);
    }
    .price .title {
      font-size: 3.5rem;
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .price .period {
      margin-left: 0.25em;
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
        border: none;
      }
    }
  }
}
</style>
