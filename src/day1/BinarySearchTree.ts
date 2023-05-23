class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: TreeNode | null;
    
    constructor() {
        this.root = null;
    }
    
    insert(value: number): void {
        this.root = this._insert(this.root, value);
    }
    
    _insert(node: TreeNode | null, value: number): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }
    
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        }
        
        return node;
    }
    
    find(value: number): boolean {
        return this._find(this.root, value);
    }
    
    _find(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        
        if (value === node.value) {
            return true;
        }
        
        if (value < node.value) {
            return this._find(node.left, value);
        } else {
            return this._find(node.right, value);
        }
    }

    delete(value: number): void {
        this.root = this._delete(this.root, value);
    }

    _delete(node: TreeNode | null, value: number): TreeNode | null {
        if (node == null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            }
            node.value = this._minValue(node.right);
            node.right = this._delete(node.right, node.value);
        }
        return node;
    }

    _minValue(node: TreeNode): number {
        let minValue = node.value;
        while (node.left != null) {
            minValue = node.left.value;
            node = node.left;
        }
        return minValue;
    }
}
