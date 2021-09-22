import {randItem} from '@pixelherz/js-utils/array'

// Name of class 'selected'
const seletedClass = 'selected'
// Id of the form's color field (hidden input)
const colorId = 'card-color'
// Id of the form's argument index field (hidden input)
const argumentIndexId = 'argument-index'
// Id of the form's argument string field (hidden input)
const argumentStringId = 'argument-string'
// Name of color attribute
const colorAttr = 'data-color'
// Name of argument index attribute
const indexAttr = 'data-index'
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
  const str = elm && elm.innerText
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
  // Get the card's message string
  const messageString = elm && elm.innerText
  // Get the message index if available
  const messageIndex = parseInt(elm && elm.getAttribute(indexAttr))
  // Get the card's color if available
  const color = (elm && elm.getAttribute(colorAttr)) || _initColor(elm)
  _updateForm(messageIndex, messageString, color)
  elm.classList.add(seletedClass)

  const visibleTextarea = document.querySelector('.act__textarea--visible');

  if(visibleTextarea) {
    visibleTextarea.classList.remove('act__textarea--visible');
  }
  const hiddenButton = document.querySelector('.act__custom-message--toggler-hidden');

  if(hiddenButton) {
    hiddenButton.classList.remove('act__custom-message--toggler-hidden');
  }

  const textarea = document.querySelector('.act__textarea textarea');

  if(textarea.value !== '') {
    textarea.dataset.text = textarea.value;
    textarea.value = '';
  }
}

// Unselect message
const _unselectMessage = elm => {
  selectedMessageElm = null
  _updateForm()
  elm && elm.classList.remove(seletedClass)
}

// Set a random color for the card given
const _initColor = elm => {
  const color = randItem(colors)
  elm && elm.setAttribute(colorAttr, color)
  return color
}

// Update the hidden fields of the form
const _updateForm = (argumentIndex = '', argumentString = '', color = '') => {
  const argumentIndexField =
    document && document.querySelector(`#${argumentIndexId}`)
  argumentIndexField && argumentIndexField.setAttribute('value', argumentIndex)
  const argumentStringField =
    document && document.querySelector(`#${argumentStringId}`)
  argumentStringField &&
  argumentStringField.setAttribute('value', argumentString)
  const colorField = document && document.querySelector(`#${colorId}`)
  colorField && colorField.setAttribute('value', color)
}

const addCustomMessage = () => {
  const toggler = document.querySelector('.act__custom-message--toggler');
  const textarea = document.querySelector('.act__textarea textarea');

  if (toggler.classList.contains('act__custom-message--toggler-hidden')) {
    textarea.dataset.text = textarea.value;
    textarea.value = '';
    toggler.classList.remove('act__custom-message--toggler-hidden');
  } else {
    textarea.value = textarea.dataset.text || '';
    toggler.classList.add('act__custom-message--toggler-hidden');
  }

  document.querySelectorAll('.act__message').forEach(message => {
    _unselectMessage(message)
    message.parentElement.querySelector('input').checked = false;
  });

  const target = toggler.closest('a').nextElementSibling;

  if (target) {
    target.classList.toggle('act__textarea--visible');
  }
}

export default {selectMessage, addCustomMessage}
