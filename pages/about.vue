<template>
  <div>
    <Navbar :fixed-on-scroll="false" :inverse="true" />
    <div class="wrapper">
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-6">
            <div class="column is-6 is-offset-3">
              <h3 class="title">About</h3>
              <p>
                Hi, I'm Akhil. I am the creator of Markie. I developed Markie
                with the idea of solving 2 main problems in mind. Also, I
                believed that this would help others too.
              </p>
              <p>
                Being the curious minds that we all are, we read a lot on the
                internet; we stumble upon various pieces of interesting
                information on a regular basis. But it's hard to keep track of
                everything within the limited time we have. Hence, we bookmark
                these informative bits. Having too many bookmarks poses us with
                two main problems -
              </p>
              <ul>
                <li>1. The problem of organizing the bookmarks.</li>
                <li>2. The problem of forgetting about these bookmarks.</li>
              </ul>
              <p>
                With the advent of artificial intelligence, I guess I was able
                to solve these 2 major problems in browser bookmarking.
                Everything else is becoming AI incorporated, so why not
                bookmarking as well?
              </p>
              <p>
                I have a lot of plans for Markie and what this means for the
                roadmap is that I will focus on perfecting the already existing
                features first, before introducing new major features to Markie.
                And that includes extending browser support to more major
                browsers.
              </p>
              <p>
                Updates (major and minor) will be rolled out continuously, as
                and when needed.
              </p>
              <p>
                If you have any questions for me, please feel free to reach out
                to me personally at
                <a href="mailto:akhil@getmarkie.com">akhil@getmarkie.com </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 2em;
}
p {
  margin: 1em 0;
  font-size: 1.1em;
}
</style>
