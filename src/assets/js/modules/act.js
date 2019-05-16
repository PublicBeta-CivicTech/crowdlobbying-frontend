// Name of class 'selected'
const seletedClass = 'selected'
// Marker for the currently selected message element
let selectedMessageElm = null

// Select/toggle message controller
const selectMessage = e => {
  e = e || window.event
  const elm = e && e.target && e.target.closest('.act__message')
  if (selectedMessageElm === elm) {
    _unselectMessage(elm)
  } else {
    _unselectMessage(selectedMessageElm)
    _selectMessage(elm)
  }
}

// Select message
const _selectMessage = elm => {
  selectedMessageElm = elm
  elm.classList.add(seletedClass)
}

// Unselect message
const _unselectMessage = elm => {
  selectedMessageElm = null
  elm && elm.classList.remove(seletedClass)
}

export default { selectMessage }
