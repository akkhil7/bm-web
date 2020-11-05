<script>
export default {
  name: 'PaymentFailure',
  mounted() {
    setTimeout(() => {
      this.$router.push('/pricing')
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
            title="Payment failed"
            type="is-danger"
            has-icon
            :closable="false"
            aria-close-label="Close message"
          >
            The payment didn't go through... <br />
            Please wait while we redirect you back to the pricing page.
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
