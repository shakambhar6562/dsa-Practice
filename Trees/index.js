import InOrderTraversal from "./InorderTraversal.js";
import TreeNode from "./makeTree.js";

const Tree = new TreeNode(20);

const RightAddedNode = Tree.addRightNode(30);
const leftAddedNode = Tree.addLeftNode(40);

RightAddedNode.addLeftNode(13);
RightAddedNode.addRightNode(14);

leftAddedNode.addLeftNode(90);
leftAddedNode.addRightNode(32);

InOrderTraversal.print(Tree)
