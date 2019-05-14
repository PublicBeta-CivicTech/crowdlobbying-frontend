/**
 * Menu controller
 * Handler for menu, nav, burger
 */

// State: indicates whether menu is enabled.
// 'Enabled' means: menu is displayed even if visually hidden.
let isEnabled = false
// State: indicates whether menu is active.
// 'Active' means: menu is visible or about to become visible.
let isActive = false
// Style: hide-animation duration in ms
// NOTE: Value should correspond with animation duration in styles
// s. ./src/assets/scss/organisms/_menu.scss
const outAnimDuration = 300
// Timeout ids
let timeoutId = null

// Name of the 'active' class
const activeClass = 'is-active'
// Name of the 'has-menu' class added to body
const hasMenuClass = 'has-menu'
// Name of the 'force-background' class added to header
const forceBgClass = 'force-background'

// Initialize menu
const init = () => {
  _stateCtrl(false)
}

// Toggle menu state (active|inactive)
const toggle = () => {
  _stateCtrl(!isActive)
}

// Hide menu
const hide = () => {
  _stateCtrl(false)
}

// Key listener (hide menu if esc pressed)
const keyListener = e => {
  if (e.key === 'Escape') {
    hide()
  }
}

// Controller for state updates
const _stateCtrl = activate => {
  clearTimeout(timeoutId)
  if (activate && isEnabled) {
    _updateActiveState(activate)
  } else if (activate) {
    _updateEnableState(true)
    timeoutId = setTimeout(_stateCtrl, 20, activate)
  } else if (isActive) {
    _updateActiveState(activate)
    timeoutId = setTimeout(_stateCtrl, outAnimDuration, activate)
  } else {
    _updateEnableState(false)
  }
}

// Handle enable state updates
const _updateEnableState = enable => {
  isEnabled = enable
  // Determine classList action (add or remove enable class)
  const action = isEnabled ? 'add' : 'remove'
  // Toggle menu state
  const menu = document.getElementById('menu')
  menu && menu.classList[action]('is-enabled')
}

// Handle active state updates
const _updateActiveState = activate => {
  isActive = activate
  // Determine classList action (add or remove active class)
  const action = isActive ? 'add' : 'remove'
  // Toggle body state
  const body = document.body
  body && body.classList[action](hasMenuClass)
  // Toggle hamburger icon state
  const burger = document.getElementById('hamburger')
  burger && burger.classList[action](activeClass)
  // Toggle menu state
  const menu = document.getElementById('menu')
  menu && menu.classList[action](activeClass)
  // Toggle header state
  const header = document.getElementById('header')
  header && header.classList[action](forceBgClass)
}

export default { hide, init, toggle, keyListener }
