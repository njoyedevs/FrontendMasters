export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data =[];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
    
        if (lIdx >= this.length) {
            return;
        }
    
        let minIdx = idx;
        if (this.data[lIdx] < this.data[minIdx]) {
            minIdx = lIdx;
        }
        if (rIdx < this.length && this.data[rIdx] < this.data[minIdx]) {
            minIdx = rIdx;
        }
    
        if (minIdx !== idx) {
            const temp = this.data[idx];
            this.data[idx] = this.data[minIdx];
            this.data[minIdx] = temp;
            this.heapifyDown(minIdx);
        }
    }
    
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
    
        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx]; // This should be this.data[idx] instead of this.data[p]
    
        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }
    
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}