import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import './demo.css'
import Slide from './'

//
hljs.registerLanguage('javascript', javascript)
document.querySelectorAll('code').forEach(el => {
  el.innerHTML = el.innerHTML.trimRight()
  hljs.highlightBlock(el)
})

// Extract the toggle method from a new Slide instance for the menu element.
const slide = new Slide(document.querySelector('#menu'))
const toggle = slide.toggle.bind(slide)

// Call the menu toggle method when the toggle button is clicked.
document.querySelector('#toggleButton').addEventListener('click', toggle)
