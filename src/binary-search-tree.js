const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }
  
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootElement) {
      return null;
    }
    return this.rootElement;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    let node = new Node(data);
    if (!this.rootElement) {
      return this.rootElement = node;
    }
    
    let currentNode = this.rootElement;

    while (currentNode !== null) {
      if (node.data < currentNode.data) {
        if (!currentNode.left) {
          return currentNode.left = node;
        }
        currentNode = currentNode.left;

      } else if (node.data > currentNode.data) {
        if (!currentNode.right) {
          return currentNode.right = node;
        }
        currentNode = currentNode.right;
      }
    }
    return currentNode;
    
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchData(this.rootElement, data);

    function searchData(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
    
      return data > node.data ?
        searchData(node.right, data) :
        searchData(node.left, data);
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findData(this.rootElement, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      
      return data > node.data ?
        findData(node.right, data) :
        findData(node.left, data);
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootElement = removeNode(this.rootElement, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node = node.right
        }
        if (node.right === null) {
          return node = node.left
        }
        let maxLeftElem = node.left;
        while (maxLeftElem.right) {
          maxLeftElem = maxLeftElem.right
        }
        node.data = maxLeftElem.data
        node.left = removeNode(node.left, maxLeftElem.data)
        return node
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootElement.left) {
      return this.rootElement.data
    }
    let nodeMin = this.rootElement.left;
    while (nodeMin.left) {
      nodeMin = nodeMin.left
    }
    return nodeMin.data
    
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootElement.right) {
      return this.rootElement.data
    }
    let nodeMax = this.rootElement.right;
    while (nodeMax.right) {
      nodeMax = nodeMax.right
    }
    return nodeMax.data
  }
}

module.exports = {
  BinarySearchTree
};