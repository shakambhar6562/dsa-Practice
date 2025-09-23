class InOrderTraversal {
  static print(rootNode) {
    if (!rootNode) return;
    InOrderTraversal.print(rootNode.left);
    console.log(rootNode.getNodeValue());
    InOrderTraversal.print(rootNode.right);
  }
}

export default InOrderTraversal;
