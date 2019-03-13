export default class Sled {
  constructor (el, isOpen) {
    this.el = el
    this.isOpen = isOpen || (el && el.clientHeight)
  }

  slide (height = this.el.scrollHeight + 'px') {
    this.el.style.height = height
  }

  toggle () {
    if (this.isOpen) {
      this.isOpen = false
      this.slide('0px')
    } else {
      this.isOpen = true
      this.slide()
    }
  }
}
