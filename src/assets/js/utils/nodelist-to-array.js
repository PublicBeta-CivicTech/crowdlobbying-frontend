const nodeListToArray = nodeList => {
  return Array.prototype.slice.call(nodeList, 0)
}

export default nodeListToArray
