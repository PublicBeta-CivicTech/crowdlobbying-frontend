window.$ = window.jQuery = require('jquery')
window.slick = require('slick-carousel')
window._ = require('underscore')

import 'what-input'
import copyToClipboard from './utils/copyToClipboard'
import { MDCSelect } from '@material/select'
import { scrollOffset } from './utils/scroll'
import appMenu from './modules/menu'

// MDC: Initialize material design components
// MDCSelect
document.querySelectorAll('.mdc-select').forEach(elm => {
  new MDCSelect(elm)
})

// Global namespaces
window.app = {
  menu: appMenu,
}
window.utils = {
  copy: copyToClipboard,
}

// Global scroll handler
const scrollHandler = _.debounce(() => {
  const action = scrollOffset().y > 50 ? 'add' : 'remove'
  document.querySelector('.header').classList[action]('use-background')
}, 50)
window.addEventListener('scroll', scrollHandler)

// Doc ready handler
$(document).ready(() => {
  // Init slick carousel
  $('.messages-carousel__cards')
    .slick({
      autoplay: true,
      autoplaySpeed: 1500,
      variableWidth: true,
      centerMode: true,
    })
    .addClass('is-ready')
})
