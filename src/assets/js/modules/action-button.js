const overlayActiveClass = 'has-overlay'

// Show overlay
const showOverlay = e => {
  // Catch event object
  e = e || window.event
  // Extract attributes form element
  const elm = e && e.target && e.target.closest('.action-button')
  const autoHide = elm && elm.getAttribute('data-overlay-autohide') === 'true'
  const state = (elm && elm.getAttribute('data-overlay-state')) || ''
  const label = (elm && elm.getAttribute('data-overlay-label')) || ''
  // Update the overlay (state, label text)
  const overlayElm = elm && elm.querySelector('.action-button__overlay')
  if (overlayElm) {
    overlayElm.classList.add(state)
    overlayElm.innerText = label
  }
  // Add the 'overlay active' class
  elm && elm.classList.add(overlayActiveClass)
  // Auto-remove the 'overlay active' class delayed
  if (autoHide) {
    setTimeout(_hideOverlay, 2000, elm)
  }
}

// Hide overlay
const _hideOverlay = elm => {
  elm && elm.classList.remove(overlayActiveClass)
}

export default { showOverlay }
