export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    // use an ArrayList queue to perform this search
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {

        // empty list === undefined, nothing at all would result in null
        const curr = queue.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }
        //search 
        if (curr.value === needle) {
            return true;
        }
        queue.push(curr.left);
        queue.push(curr.right);
    }

    return false;

}