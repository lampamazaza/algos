var Node = function (key, value) {
  this.key = key
  this.value = value
  this.left = null
  this.right = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  const left = new Node(0, 0)
  const right = new Node(0, 0)
  left.right = right
  right.left = left

  this.capacity = capacity
  this.size = 0
  this.left = left
  this.right = right
  this.map = {}
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key]
  if (node !== undefined) {
    this.unLinkNode(node)
    this.linkNewNode(node)
    return this.map[key].value
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.map[key]
  if (node !== undefined) {
    node.value = value
    this.unLinkNode(node)
    this.linkNewNode(node)
  } else {
    const newNode = new Node(key, value)
    this.map[key] = newNode
    this.linkNewNode(newNode)
    this.size++
  }

  if (this.size > this.capacity) {
    this.size--
    delete this.map[this.left.right.key]
    this.unLinkNode(this.left.right)
  }
}

LRUCache.prototype.linkNewNode = function (newNode) {
  newNode.right = this.right
  newNode.left = this.right.left

  newNode.left.right = newNode
  newNode.right.left = newNode
}

LRUCache.prototype.unLinkNode = function (node) {
  node.left.right = node.right
  node.right.left = node.left
}
LRUCache.prototype.print = function () {
  let node = this.left
  let result = []
  while(node !== null) {
    result.push(`(${node.key},${node.value})`)
    node = node.right
  }
  return result.join(" -> ")
}
