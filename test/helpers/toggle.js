import Sled from '../..'

let heights = []

const p = document.createElement('p')
p.innerHTML = `
  Lorem ipsum is placeholder text commonly used in the graphic, print, and
  publishing industries for previewing layouts and visual mockups.
`
p.style.height = 0
document.body.appendChild(p)
const sled = new Sled(p)
sled.toggle()
heights.push(p.getBoundingClientRect().height)

sled.toggle()
heights.push(sled.el.getBoundingClientRect().height)

window.run(resolve => resolve(heights))
