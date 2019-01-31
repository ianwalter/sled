import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper(['./dist/sled.iife.js'])

test('slide to given height', withPage, async (t, page) => {
  t.pass()
})

test('slide to natural height', withPage, async (t, page) => {
  t.pass()
})
