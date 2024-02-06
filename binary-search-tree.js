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
            //check value to be inserted already exists, if true rerurn
            if (current.value === value) return ""
            //if value to be inserted is greater than current value move right
            //else move left
            if (current.value < value) {
                if (!current.right) {
                    //if current node is null, insert 
                    current.right = newNode;
                    return this.root
                }
                current = current.right
            }
            //else move to the left
            else {
                if (!current.left) {
                    current.left = newNode;
                    return this.root
                } else
                    current = current.left
            }
        }
    }
    search(item) {
        //grap root of a tree;
        let current = this.root;
        //check if the root is empty, if true return
        if (!current) return "Nothing to search"
        //Loop through the list until item is found
        while (true) {
            //to check if item is found
            if (!current) return "Item not found"
            //check if current value is less than item to be searched
            if (item > current.value) {
                if (current.value === item) {
                    //if it is equal returen
                    return current;
                }
                //else move to the nexxt right item;
                current = current.right;
            }
            //if current value is greater than the item to be searched
            //move to the left side 
            else {
                if (current.value === item) {
                    return current
                } else {
                    current = current.left
                }
            }
        }
    }
    inOrder() {
        //grab the root element
        let current = this.root;
        let inOrderResult = [];
        //create helper function the traverse trees
        function traverse(node) {
            if (node.left) traverse(node.left)
            inOrderResult.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(current);
        return inOrderResult;
    }
    breadthFirstTraversal() {
        //grab the current root
        let current = this.root;
        //create a place holder for new data
        let BreadthFirstData = [];
        //create a queue of nodes
        let queue = [current]
        //create helper function that traverses and check if the item as left or right data;
        while (queue.length) {
            //grab the data
            //take the first element for the queue and push
            current = queue.shift();

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            BreadthFirstData.push(current.value);

        }
        //start of by calling helper function

        return BreadthFirstData;
    }
    //starts from the root go all through last leaf items
    depthFirstTraversal() {
        // grab the root data
        let current = this.root;
        //create a placeholder of traversed data
        let depthFirstData = [];
        //create helper function to traverse
        function traverse(node) {
            //grab the root data;
            depthFirstData.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)

        }
        traverse(current)
        return depthFirstData;

    }
    postOrder() {
        let current = this.root, finalData = [];
        //create traverse helper function
        function traverse(node) {

            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            finalData.push(node.value)

        }
        traverse(current)
        return finalData;
    }
}
let tree = new BinaryTree();
tree.insert(10)
tree.insert(4)
tree.insert(12)
tree.insert(1)
tree.insert(11)
tree.insert(5)
console.log(tree.search(1))
/**                            8
                             /   \
                            /     \
                           /       \
                          5        250
                         / \       /  \
                        /   \     /    \
                       3    6   201    1200
                                /
                               /
                              25
                             /  \
                            /    \
                           15     30

///////////////////////////////////////////////////////////////////
                          5
                       /      \
                      /        \
                     2          8
                    /  \       /  \
                   /    \     /    \
                  1      4   6       9
                 /       /
                /       /
               0       3
                       */
console.log(tree.root)
console.log("In order")
console.log(tree.inOrder());
console.log("Breadth First Traversal")
console.log(tree.breadthFirstTraversal());
console.log("Depth First Traversal")
console.log(tree.depthFirstTraversal());
console.log(tree.postOrder());
module.exports = { BinaryTree }