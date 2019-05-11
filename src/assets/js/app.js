window.$ = window.jQuery = require('jquery')
window.slick = require('slick-carousel')

import 'what-input'
import copyToClipboard from './utils/copyToClipboard'
import { MDCSelect } from '@material/select'
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
