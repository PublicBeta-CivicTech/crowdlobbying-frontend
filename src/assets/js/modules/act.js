import { randItem } from '@pixelherz/js-utils/array'

// Name of class 'selected'
const seletedClass = 'selected'
// Id of the forms color field (hidden input)
const colorId = 'card-color'
// Name of color attribute
const colorAttr = 'data-color'
// List of selected colors
const colors = [
  'pink',
  'purple',
  'purple-dark',
  'blue-dark',
  'blue',
  'cyan',
  'teal',
  'green',
  'orange-dark',
  'red',
]
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
  // Get the card's color if available
  const color = (elm && elm.getAttribute(colorAttr)) || _initColor(elm)
  _setColor(color)
  elm.classList.add(seletedClass)
}

// Unselect message
const _unselectMessage = elm => {
  selectedMessageElm = null
  _setColor('')
  elm && elm.classList.remove(seletedClass)
}

// Set a random color for the card given
const _initColor = elm => {
  const color = randItem(colors)
  elm && elm.setAttribute(colorAttr, color)
  return color
}

// Update the forms color field
const _setColor = color => {
  const formField = document && document.querySelector(`#${colorId}`)
  formField && formField.setAttribute('value', color)
}

export default { selectMessage }
