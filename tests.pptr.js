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

test('slide to given height', async t => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.slide('100px')
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBe(100)
})

test('slide to natural height', async t => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.slide()
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
})

test('toggle', async t => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.toggle()
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
  sled.toggle()
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBe(0)
})

test('toggle when padding and began open', async t => {
  const p = createParagraph()
  p.style.padding = '20px'
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.toggle()
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBe(40)
})

test('open and close', async t => {
  const p = createParagraph()
  p.style.height = 0
  document.body.appendChild(p)
  const sled = new Sled(p)
  sled.open()
  await t.sleep(100)
  t.expect(p.getBoundingClientRect().height).toBeGreaterThan(34)
  sled.close()
  await t.sleep(100)
  t.expect(sled.el.getBoundingClientRect().height).toBe(0)
})
