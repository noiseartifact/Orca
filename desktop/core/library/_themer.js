'use strict'

const Operator = require('../operator')

function OperatorThemer (orca, x, y) {
  Operator.call(this, orca, x, y, '_', true)

  this.name = 'Themer'
  this.info = 'Modifies the theme'

  this.ports.input.channel = { x: -1, y: 0 }
  this.ports.input.red = { x: 1, y: 0 }
  this.ports.input.green = { x: 2, y: 0 }
  this.ports.input.blue = { x: 3, y: 0 }

  this.run = function () {
    // if (!this.bang()) { return }
    const options = [
      'background',
      'b_high',
      'b_med',
      'b_low',
      'b_inv', 
      'f_high',
      'f_med',
      'f_low',
      'f_inv'
    ]
    const theme = terminal.theme.active
    const channel = this.listen(this.ports.input.channel, true) % 9
    const red = this.listen(this.ports.input.red, true)
    const green = this.listen(this.ports.input.green, true)
    const blue = this.listen(this.ports.input.blue, true)
    theme[options[channel]] = toHex(red, green, blue)

    terminal.theme.load(theme, true)
  }

  function toHex(r, g, b) {
    let redComp = Math.ceil((255 * r) / 35).toString(16).padStart(2, '0')
    let greenComp = Math.ceil((255 * g) / 35).toString(16).padStart(2, '0')
    let blueComp = Math.ceil((255 * b) / 35).toString(16).padStart(2, '0')
    return '#' + redComp + blueComp + greenComp
  }
}

module.exports = OperatorThemer
