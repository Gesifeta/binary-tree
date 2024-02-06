//Binary Tree Practice
//to create tree node that contains left,right and value properties
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//to create Binary tree which contains root
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // insert nodes to binary tree;

    insert(value) {
        let newNode = new TreeNode(value)
        //check if the node binary tree is empty, if empty
        // point to the newly created node
        if (this.root === null) return this.root = newNode;
        //check of node value is greater or less than value to be inserted
        //to hold current node;

        let current = this.root;
        while (true) {
            if (current.value === value) return ""
            if (current.value < value) {
                if (!current.right) {
                    current.right = newNode;
                    return this.root
                }
                current = current.right
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this.root
                } else
                    current = current.left
            }
        }
    }

}
let tree = new BinaryTree();
console.log(tree.insert(45))
console.log(tree.insert(55))
console.log(tree.insert(5))
console.log(tree.insert(405))
console.log(tree.insert(15))
console.log(tree.insert(45))
console.log(tree.insert(55))
console.log(tree.insert(14))
console.log(tree.insert(54))