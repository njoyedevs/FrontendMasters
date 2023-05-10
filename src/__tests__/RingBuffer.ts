import RingBuffer from "@code/RingBuffer";

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    buffer.push(12);
    expect(buffer.get(2)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(0)).toEqual(42);

    const resizeBuffer = new RingBuffer<number>(3);
    resizeBuffer.push(1);
    resizeBuffer.push(2);
    resizeBuffer.push(3);

    // Resize the buffer to a larger size
    resizeBuffer.resize(5);
    resizeBuffer.push(4);
    resizeBuffer.push(5);
    expect(resizeBuffer.pop()).toEqual(1);
    expect(resizeBuffer.pop()).toEqual(2);
    expect(resizeBuffer.pop()).toEqual(3);
    expect(resizeBuffer.pop()).toEqual(4);
    expect(resizeBuffer.pop()).toEqual(5);
    expect(resizeBuffer.pop()).toEqual(undefined);

    // Resize the buffer to a smaller size
    resizeBuffer.push(6);
    resizeBuffer.push(7);
    resizeBuffer.push(8);
    resizeBuffer.resize(2);
    expect(resizeBuffer.pop()).toEqual(7);
    expect(resizeBuffer.pop()).toEqual(8);
    expect(resizeBuffer.pop()).toEqual(undefined);
});


