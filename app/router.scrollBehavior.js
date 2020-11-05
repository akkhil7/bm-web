export default function (to, _, savedPosition) {
  if (to.path !== '/') {
    return { x: 0, y: 0 }
  } else {
    return savedPosition
  }
}
