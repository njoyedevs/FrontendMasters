type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        // Should be this but typescript causes type error 
        // if (this.length === 1)
        if (!this.tail || !this.head) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;
        
        // free (not necessary in JavaScript due to garbage collection)
        head.next = undefined;

        // Can't do this in typescript due to types but is the right thing
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value
    }
    peek(): T | undefined {
        return this.head?.value
    }
}