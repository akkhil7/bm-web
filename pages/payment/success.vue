<script>
export default {
  name: 'PaymentFailure',
  mounted() {
    const { BM_APP_URI } = process.env
    setTimeout(() => {
      window.location.replace(`${BM_APP_URI}/account`)
    }, 3000)
  },
}
</script>

<template>
  <div>
    <Navbar :inverse="true" :fixed-on-scroll="false" />
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <b-message
            title="Payment confirmed"
            type="is-success"
            has-icon
            :closable="false"
            aria-close-label="Close message"
          >
            Your subscription is confirmed... <br />
            Please wait while we redirect you back to the dashboard.
          </b-message>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
}
// .notification {}
</style>
