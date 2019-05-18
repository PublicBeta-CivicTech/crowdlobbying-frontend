// The select element (type MDCSelect)
// s. https://material.io/develop/web/components/input-controls/select-menus/
let cantonSelect = null
// Selected canton (type int)
let selectedCantonId = null
// Cards wrapper class name
const classWrapper = 'officials__list'
// Cards
const cardElms = []

// Init the select
const init = select => {
  _cloneCards()
  cantonSelect = select || null
  cantonSelect &&
    cantonSelect.listen('MDCSelect:change', () => {
      selectedCantonId = parseInt(cantonSelect.value) || null
      _filterCards()
    })
}

// Clone cards
const _cloneCards = () => {
  const cardsNode = document.querySelector(`.${classWrapper}`)
  cardsNode &&
    cardsNode.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        cardElms.push(node)
      }
    })
}

// Remove all cards
const _removeCards = () => {
  const cardsNode = document.querySelector(`.${classWrapper}`)
  if (cardsNode) {
    while (cardsNode.firstChild) {
      cardsNode.removeChild(cardsNode.firstChild)
    }
  }
}

// Update card state
const _filterCards = () => {
  _removeCards()
  const cardsNode = document.querySelector(`.${classWrapper}`)
  cardElms.forEach(card => {
    const regionId = parseInt(card.getAttribute('data-region')) || null
    if ((regionId && regionId === selectedCantonId) || !selectedCantonId) {
      cardsNode && cardsNode.appendChild(card)
    }
  })
}

export default { init }
