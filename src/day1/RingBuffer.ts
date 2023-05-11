// Also called an ArrayBuffer.
class RingBuffer<T> {
    private buffer: T[];
    private startIndex: number;
    private endIndex: number;

    constructor(private size: number = 10) {
        this.buffer = new Array<T>(size);
        this.startIndex = 0;
        this.endIndex = 0;
    }

    push(value: T): void {
        this.buffer[this.endIndex] = value;
        this.endIndex = (this.endIndex + 1) % this.size;

        if (this.endIndex === this.startIndex) {
            this.startIndex = (this.startIndex + 1) % this.size;
        }
    }

    pop(): T | undefined {
        if (this.startIndex === this.endIndex) {
            return undefined;
        }

        const value = this.buffer[this.startIndex];
        this.startIndex = (this.startIndex + 1) % this.size;
        return value;
    }

    get(index: number): T | undefined {
        if (index >= this.size || index < 0) {
            return undefined;
        }

        const bufferIndex = (this.startIndex + index) % this.size;
        return this.buffer[bufferIndex];
    }

    resize(newSize: number): void {
      if (newSize < 1) {
          throw new Error("RingBuffer size must be greater than 0");
      }
  
      const newBuffer: T[] = new Array<T>(newSize);
      let newIndex = 0;
  
      for (let i = this.startIndex; i !== this.endIndex; i = (i + 1) % this.size) {
          if (newIndex < newSize) {
              newBuffer[newIndex++] = this.buffer[i];
          } else {
              break;
          }
      }
  
      this.buffer = newBuffer;
      this.size = newSize;
      this.startIndex = 0;
      this.endIndex = newIndex;
  
      if (newIndex === newSize && newSize > this.size) {
          this.startIndex = (this.startIndex + newSize - this.size) % newSize;
      }
  }
  
      
}

export default RingBuffer;