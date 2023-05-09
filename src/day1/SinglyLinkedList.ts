type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        this.head = node;
        this.length++;

    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        let currentNode = this.head;
        let prevNode: Node<T> | undefined;
        let currentIdx = 0;

        while (currentIdx < idx) {
            prevNode = currentNode;
            currentNode = currentNode?.next;
            currentIdx++;
        }

        const newNode: Node<T> = { value: item, next: currentNode };
        if (prevNode) {
            prevNode.next = newNode;
        }
        this.length++;
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    remove(item: T): T | undefined {
        let currentNode = this.head;
        let prevNode: Node<T> | undefined;

        while (currentNode) {
            if (currentNode.value === item) {
                if (prevNode) {
                    prevNode.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }

                this.length--;
                return item;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        let currentNode = this.head;
        let currentIdx = 0;

        while (currentIdx < idx) {
            currentNode = currentNode?.next;
            currentIdx++;
        }

        return currentNode?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        if (idx === 0) {
            const headValue = this.head?.value;
            this.head = this.head?.next;
            this.length--;
            return headValue;
        }

        let currentNode = this.head;
        let prevNode: Node<T> | undefined;
        let currentIdx = 0;

        while (currentIdx < idx) {
            prevNode = currentNode;
            currentNode = currentNode?.next;
            currentIdx++;
        }

        if (prevNode && currentNode) {
            prevNode.next = currentNode.next;
            this.length--;
            return currentNode.value;
        }

        return undefined;
    }
}
