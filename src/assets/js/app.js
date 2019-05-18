window.$ = window.jQuery = require('jquery')
window.slick = require('slick-carousel')
window._ = require('underscore')

import copyToClipboard from './utils/copy-to-clipboard'
import { MDCTextField } from '@material/textfield'
import { MDCSelect } from '@material/select'
import { scrollOffset } from './utils/scroll'
import act from './modules/act'
import actionButton from './modules/action-button'
import menu from './modules/menu'
import cantonChooser from './modules/canton-chooser'
import { signConsole } from '@pixelherz/js-utils/fun'

// Global namespaces
window.app = {
  act,
  actionButton,
  cantonChooser,
  menu,
}
window.utils = {
  copy: copyToClipboard,
  scrollTo: require('scroll-to-element'),
}
// Console signature
signConsole(pkg)

// MDC: Initialize material design components
// MDCSelect
document.querySelectorAll('.mdc-select').forEach(elm => {
  const select = new MDCSelect(elm)
  // Init canton chooser
  if (elm.getAttribute('id') === 'canton-select') {
    app.cantonChooser.init(select)
  }
})
// MDCTextField
document.querySelectorAll('.mdc-text-field').forEach(elm => {
  new MDCTextField(elm)
})

// Hide main menu if esc key pressed
document.addEventListener('keyup', app.menu.keyListener)

// Global scroll handler
const scrollHandler = _.throttle(() => {
  const action = scrollOffset().y > 50 ? 'add' : 'remove'
  document.querySelector('.header').classList[action]('use-background', 'mini')
}, 100)
window.addEventListener('scroll', scrollHandler)

// Doc ready handler
$(document).ready(() => {
  // Init menu
  app.menu.init()
  // Init slick carousel
  $('.messages-carousel__cards')
    .slick({
      autoplay: true,
      autoplaySpeed: 1500,
      variableWidth: true,
      centerMode: true,
      slidesToShow: 5,
    })
    .addClass('is-ready')
})
