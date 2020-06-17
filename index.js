export default class Sled {
  constructor (el, isOpen) {
    this.el = el
    this.isOpen = isOpen || (el && el.clientHeight)
  }

  slide (height = this.el.scrollHeight + 'px') {
    if (this.isOpen) {
      this.el.style.height = height
    } else {
      // Remove the transition and save it for later since height might be auto
      // and it would be ignored.
      const transition = this.el.style.transition
      this.el.style.transition = ''

      // Wait for the element to be rendered without the transition.
      window.requestAnimationFrame(() => {
        // Re-apply the transition and set the height to a fixed height of
        // whatever it currently computes to.
        this.el.style.transition = transition
        this.el.style.height = this.el.scrollHeight + 'px'

        // Wait for the element to be rendered with the new styles and then set
        // the passed height.
        window.requestAnimationFrame(() => (this.el.style.height = height))
      })
    }
  }

  open () {
    this.isOpen = true

    // Add a transitionend listener so that the height can be set to auto after
    // the height transition has ended (and a fixed height is no longer
    // necessary for the CSS transition).
    const listener = () => {
      this.el.removeEventListener('transitionend', listener)
      this.el.style.height = 'auto'
    }
    this.el.addEventListener('transitionend', listener)

    this.slide()
  }

  close () {
    this.isOpen = false
    this.slide(0)
  }

  toggle () {
    if (this.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }
}
