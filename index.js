export default class Sled {
  constructor (el) {
    this.el = el
  }

  slide (height = this.el.scrollHeight + 'px') {
    this.el.style.height = height
  }

  toggle () {
    const beganOpen = typeof this.isOpen === 'undefined' && this.el.clientHeight
    if (this.isOpen || beganOpen) {
      this.isOpen = false
      this.slide('0px')
    } else {
      this.isOpen = true
      this.slide()
    }
  }
}
