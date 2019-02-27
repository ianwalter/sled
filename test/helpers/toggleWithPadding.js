import Sled from '../..'

const p = document.createElement('p')
p.innerHTML = `
  Lorem ipsum is placeholder text commonly used in the graphic, print, and
  publishing industries for previewing layouts and visual mockups.
`
p.style.padding = '20px'
document.body.appendChild(p)
const sled = new Sled(p)
sled.toggle()

window.run(resolve => resolve(p.getBoundingClientRect().height))