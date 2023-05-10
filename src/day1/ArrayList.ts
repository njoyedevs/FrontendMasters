export default class ArrayList<T> {
    private data: T[];
    public length: number;

    constructor(initialCapacity?: number) {
        this.data = new Array(initialCapacity || 0);
        this.length = 0;
    }

    prepend(item: T): void {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }

        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[idx] = item;
        this.length++;
    }

    append(item: T): void {
        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        let index = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            for (let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            this.length--;
            return item;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        const removedItem = this.data[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;

        return removedItem;
    }
}
