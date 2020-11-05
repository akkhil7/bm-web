export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  const test = function (regexp) {
    return regexp.test(window.navigator.userAgent)
  }
  let name
  if (test(/edg/i)) name = 'edge'
  else if (test(/firefox|fxios/i)) name = 'firefox'
  else if (test(/opr\//i)) name = 'opera'
  else if (test(/chrome|chromium|crios/i)) name = 'chrome'
  else if (test(/safari/i)) name = 'safari'
  else name = 'other'
  inject('detectBrowser', name)
}
