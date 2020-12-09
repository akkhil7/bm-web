<template>
  <div class="wrapper section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-1">
          <h1 class="title">Frequently asked questions</h1>
        </div>
        <div class="column is-6">
          <p class="question">How can I use Markie?</p>
          <p class="answer">
            You can use Markie by installing the Markie browser extension for
            your browser.
          </p>
          <p class="question">Which browsers do you support?</p>
          <p class="answer">
            Currently, we are providing support for Chrome, Firefox and Edge
            (latest version). <br />
            <em>Note: Support for more browsers coming soon. </em>
          </p>
          <p class="question">Should I be worried about security or privacy?</p>
          <p class="answer">
            No, you need not worry about your browsing data being monitored or
            stored in our servers. Markie captures and sends the HTML of the
            page to our secure server only when you bookmark.
          </p>
          <p class="question">Where can I view my bookmarks?</p>
          <p class="answer">
            You can view all your bookmarks, search and filter through them
            through our
            <a href="https://app.getmarkie.com/dashboard">web app</a>.
          </p>
          <p class="question">Do you have a free version?</p>
          <p class="answer">
            Yes, we have a pretty decent free version with most of the major
            features. Head over to the
            <NuxtLink to="/pricing"> pricing page </NuxtLink> for more details.
          </p>
          <p class="question">Can Markie sync with my browser bookmarks?</p>
          <p class="answer">
            Not at the moment ☹️. But we are working on bringing that feature
            asap.
          </p>
          <p class="question">Didn't answer your question?</p>
          <p class="answer">
            You can always mail us at
            <a href="mailto:support@getmarkie.com">support@getmarkie.com</a>. We
            will be happy to answer any question that you might have.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 120px;
}
.title {
  font-weight: 700;
  font-size: 1.8em;
}
.question {
  font-size: 1.2em;
  font-weight: 600;
}
.answer {
  color: #6b7280;
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>
