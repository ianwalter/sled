import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper(['./dist/sled.iife.js'])

test('slide to given height', withPage, async (t, page) => {
  const height = await page.evaluate(() => {
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(p)
    const sled = new Sled(p)
    sled.slide('100px')
    return p.getBoundingClientRect().height
  })
  t.is(height, 100)
})

test('slide to natural height', withPage, async (t, page) => {
  const height = await page.evaluate(() => {
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(p)
    const sled = new Sled(p)
    sled.slide()
    return p.getBoundingClientRect().height
  })
  t.is(height, 35)
})

test('toggle', withPage, async (t, page) => {
  let height = await page.evaluate(() => {
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.height = 0
    document.body.appendChild(p)
    window.sled = new Sled(p)
    window.sled.toggle()
    return p.getBoundingClientRect().height
  })
  t.is(height, 35)

  height = await page.evaluate(() => {
    window.sled.toggle()
    return window.sled.el.getBoundingClientRect().height
  })
  t.is(height, 0)
})

test('toggle when padding and began open', withPage, async (t, page) => {
  let height = await page.evaluate(() => {
    const p = document.createElement('p')
    p.innerHTML = `
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    `
    p.style.padding = '20px'
    document.body.appendChild(p)
    window.sled = new Sled(p)
    window.sled.toggle()
    return p.getBoundingClientRect().height
  })
  t.is(height, 40)
})
