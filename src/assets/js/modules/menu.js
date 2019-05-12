/**
 * Menu controller
 * Handler for menu, nav, burger
 */

// State: indicates whether menu is active
let isActive = false

// Name of the 'active' class
const activeClass = 'is-active'
// Name of the 'has-menu' class added to body
const hasMenuClass = 'has-menu'
// Name of the 'force-background' class added to header
const forceBgClass = 'force-background'

// Toggle menu state (active|inactive)
const toggle = () => {
  _updateState(!isActive)
}

// Hide menu
const hide = () => {
  _updateState(false)
}

// Handle state updates
const _updateState = setActive => {
  isActive = setActive
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

export default { hide, toggle }
