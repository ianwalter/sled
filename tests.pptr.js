import { test } from '@ianwalter/bff-puppeteer'
import Sled from '.'

function createParagraph () {
  const p = document.createElement('p')
  p.innerHTML = `
    Lorem ipsum is placeholder text commonly used in the graphic, print, and
    publishing industries for previewing layouts and visual mockups.
  `
  return p
}

test('slide to given height', async ({ expect }) => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.slide('100px')
  expect(p.getBoundingClientRect().height).toBe(100)
})

test('slide to natural height', async ({ expect }) => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.slide()
  expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
})

test('toggle', async ({ expect }) => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.toggle()
  expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
  sled.toggle()
  expect(p.getBoundingClientRect().height).toBe(0)
})

test('toggle when padding and began open', async ({ expect }) => {
  const p = createParagraph()
  p.style.padding = '20px'
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.toggle()
  expect(p.getBoundingClientRect().height).toBe(40)
})

test('open and close', async ({ expect }) => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.open()
  expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
  sled.close()
  expect(sled.el.getBoundingClientRect().height).toBe(0)
})
