class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  getNodeValue() {
    return this.value;
  }
  getLeftNodeRef() {
    return this.left;
  }
  getRightNodeRef() {
    return this.right;
  }
  addLeftNode(value) {
    this.left = new TreeNode(value);
    return this.left;
  }
  addRightNode(value) {
    this.right = new TreeNode(value);
    return this.right;
  }
}

export default TreeNode;
