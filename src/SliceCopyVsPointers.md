When you slice a Uint8Array, you create a new array that is a copy of a portion of the original array. This means that any changes you make to the new array will not affect the original array. Here's an example:

```js
const originalArray = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const newArray = originalArray.slice(0, 5); // Copy the first 5 elements of the original array

console.log(originalArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newArray); // [1, 2, 3, 4, 5]

newArray[0] = 0;

console.log(originalArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newArray); // [0, 2, 3, 4, 5]
```

As you can see, changing an element in the new array does not affect the original array.

On the other hand, when you create a Buffer using Buffer.alloc(), you allocate a new block of memory of a certain size, and when you write to this buffer using the .write() method, you are writing to this block of memory at a specific offset. This means that you are not modifying the original Buffer or any other Buffer that might share the same underlying memory. Here's an example:

```js
const originalBuffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const newBuffer = Buffer.alloc(5);

originalBuffer.copy(newBuffer, 0, 0, 5); // Copy the first 5 elements of the original buffer to the new buffer

console.log(originalBuffer); // <Buffer 01 02 03 04 05 06 07 08 09 0a>
console.log(newBuffer); // <Buffer 01 02 03 04 05>

newBuffer.writeUInt8(0, 0); // Write 0 to the first byte of the new buffer

console.log(originalBuffer); // <Buffer 01 02 03 04 05 06 07 08 09 0a>
console.log(newBuffer); // <Buffer 00 02 03 04 05>
```

As you can see, writing to the new Buffer does not affect the original Buffer.

In terms of runtime complexity, slicing a Uint8Array is a linear operation, because you have to copy each element from the original array to the new array. The runtime complexity of pointing to a new spot in a Buffer using .write() is constant, because you are just modifying a specific byte in the block of memory allocated by the Buffer.