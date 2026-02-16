class TreeTraversal {
  static inOrder(rootNode) {
    if (!rootNode) return;
    TreeTraversal.inOrder(rootNode.left);
    console.log(rootNode.getNodeValue());
    TreeTraversal.inOrder(rootNode.right);
  }

  static preOrder(rootNode) {
    if (!rootNode) return;
    console.log(rootNode.getNodeValue());
    TreeTraversal.preOrder(rootNode.left);
    TreeTraversal.preOrder(rootNode.right);
  }
  static postOrder(rootNode) {
    if (!rootNode) return;
    TreeTraversal.postOrder(rootNode.left);
    TreeTraversal.postOrder(rootNode.right);
    console.log(rootNode.getNodeValue());
  }
}

export default TreeTraversal;
