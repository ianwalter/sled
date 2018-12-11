import './main.css'
import Slide from '../'

// Extract the toggle method from a new Slide instance for the menu element.
const slide = new Slide(document.querySelector('#menu'))
const toggle = slide.toggle.bind(slide)

// Call the menu toggle method when the toggle button is clicked.
document.querySelector('#toggleButton').addEventListener('click', toggle)
