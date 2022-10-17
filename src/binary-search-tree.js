const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor(){
    this.tree =null
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addNew(this.tree, data)
    function addNew(node, data) {
      if (!node){
        return new Node(data)
      }
      if (data < node.data){
        node.left = addNew(node.left, data)
      } else {
        node.right = addNew(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchNew(this.tree, data)
    function searchNew(node, data) {
      if (!node){
        return false
      }
      if (node.data == data){
        return true
      }
      if (data < node.data){
        return searchNew(node.left, data)
      } else {
        return searchNew(node.right, data)
      }
    }
  }

  find(data) {
    return findNew(this.tree, data)
    function findNew(node, data) {
      if (!node){
        return null
      }
      if (node.data == data){
        return node
      }
      if (data < node.data){
        return findNew(node.left, data)
      } else {
        return findNew(node.right, data)
      }
    }
  }

  remove(data) {
    this.tree = removeNew(this.tree, data)
    function removeNew(node,data){
      if (!node){
        return null
      }
      if (data < node.data){
        node.left = removeNew(node.left, data)
        return node
      } else if (data > node.data){
        node.right = removeNew(node.right, data)
        return node
      } else {
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left){
          node = node.right
          return node
        }

        if (!node.right){
          node = node.left
          return node
        }
        let minRight = node.right
        while (minRight.left){
          minRight =minRight.left
        }
        node.data = minRight.data
        node.right = removeNew(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.tree){
      return
    }
    let node = this.tree
    while(node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.tree){
      return
    }
    let node = this.tree
    while(node.right){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};