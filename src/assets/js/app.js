window.$ = window.jQuery = require('jquery')
window.slick = require('slick-carousel')

import 'what-input'
import appMenu from './modules/menu'

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
