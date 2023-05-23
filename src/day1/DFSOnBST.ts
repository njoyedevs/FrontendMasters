function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr.right, needle);
    }

    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    // no guarantee that the tree will be split so we have to walk the tree making the time complexity possibly O(n)
    return search(head, needle);
}