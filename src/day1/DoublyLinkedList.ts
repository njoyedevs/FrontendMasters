type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
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
    
        if (idx === this.length) {
            this.append(item);
            return;
        }
    
        let currentNode = this.head;
        let currentIdx = 0;
    
        while (currentNode && currentIdx < idx) {
            currentNode = currentNode.next;
            currentIdx++;
        }
    
        if (currentNode && currentNode.prev) {
            const newNode: Node<T> = { value: item, next: currentNode, prev: currentNode.prev };
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            this.length++;
        }
    }

    append(item: T): void {
        const node: Node<T> = { value: item, prev: this.tail };
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        if (!this.head) {
            this.head = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === item) {
                if (currentNode.prev) {
                    currentNode.prev.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }

                if (currentNode.next) {
                    currentNode.next.prev = currentNode.prev;
                } else {
                    this.tail = currentNode.prev;
                }

                this.length--;
                return item;
            }

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
    
        let currentNode = this.head;
        let currentIdx = 0;
    
        while (currentNode && currentIdx < idx) {
            currentNode = currentNode.next;
            currentIdx++;
        }
    
        if (currentNode) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            } else {
                this.head = currentNode.next;
            }
    
            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this.tail = currentNode.prev;
            }
    
            this.length--;
            return currentNode.value;
        }
    
        return undefined;
    }
}
