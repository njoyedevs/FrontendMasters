type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {

        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;

    }
    pop(): T | undefined {

        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            // Need the as Node<T> to appease type script?
            const head = this.head;
            this.head = undefined;

            return head?.value;
        }

        // Need the as Node<T> to appease type script?
        const head = this.head as Node<T>;
        this.head = head.prev;

        // In more traditional languages you would free up
        // the head space in memory here
        
        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}