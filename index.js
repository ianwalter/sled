export default class Sled {
  constructor (el, isOpen) {
    this.el = el
    this.isOpen = isOpen || (el && el.clientHeight)
  }

  slide (height = this.el.scrollHeight + 'px') {
    this.el.style.height = height
  }

  open () {
    this.isOpen = true
    this.slide()
  }

  close () {
    this.isOpen = false
    this.slide('0px')
  }

  toggle () {
    if (this.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }
}
