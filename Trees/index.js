import TreeTraversal from "./Traversal.js";
import TreeNode from "./makeTree.js";

const Tree = new TreeNode(20);

const RightAddedNode = Tree.addRightNode(30);
const leftAddedNode = Tree.addLeftNode(40);

RightAddedNode.addLeftNode(13);
RightAddedNode.addRightNode(14);

leftAddedNode.addLeftNode(90);
leftAddedNode.addRightNode(32);
console.group("Inorder");
TreeTraversal.inOrder(Tree);
console.groupEnd();

console.group("Preorder");
TreeTraversal.preOrder(Tree);
console.groupEnd();



console.group("postOrder");
TreeTraversal.postOrder(Tree);
console.groupEnd();
