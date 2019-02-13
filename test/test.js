import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper()

test('slide to given height', withPage, async t => t.is(
  await t.evaluate('./test/helpers/givenHeight.js'),
  100
))

test('slide to natural height', withPage, async t => t.is(
  await t.evaluate('./test/helpers/naturalHeight.js'),
  35
))

test('toggle', withPage, async t => t.deepEqual(
  await t.evaluate('./test/helpers/toggle.js'),
  [35, 0]
))

test('toggle when padding and began open', withPage, async t => t.is(
  await t.evaluate('./test/helpers/toggleWithPadding.js'),
  40
))
