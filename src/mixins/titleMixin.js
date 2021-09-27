function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    const result = typeof title === 'function' ? title.call(vm) : title
    return result + ' - La Casa de Tesoro'
  } else {
    return 'La Casa de Tesoro'
  }
}
export default {
  created () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}
