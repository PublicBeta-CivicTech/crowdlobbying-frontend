export const scrollOffset = () => {
  const doc = document.documentElement
  return {
    x: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
    y: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
  }
}
