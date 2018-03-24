import './helpers/wx-globals'
import test from 'ava'

const Tina = require('..')

test('basic', (t) => {
  Tina.globals.Page = function () {
    console.log('tick')
  }

  Tina.Page.define({})

  t.pass()
})
