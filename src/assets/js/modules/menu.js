/**
 * Menu controller
 * Handler for menu, nav, burger
 */

// Toggle menu state (active|inactive)
const toggle = e => {
  e = e || window.event
  if (e && e.target) {
    // toggle hamburger icon state
    const burger = e.target.closest('.hamburger')
    burger && burger.classList.toggle('is-active')
  }
}

export default { toggle }
