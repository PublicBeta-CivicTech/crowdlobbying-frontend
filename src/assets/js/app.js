window.$ = window.jQuery = require('jquery')
window.slick = require('slick-carousel')

import 'what-input'
import { MDCSelect } from '@material/select'
import appMenu from './modules/menu'

// MDC: Initialize material design components
// MDCSelect
document.querySelectorAll('.mdc-select').forEach(elm => {
  new MDCSelect(elm)
})

// App namespace
window.app = {
  menu: appMenu,
}

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
