// how to add numbers 1 to 100, 100 + 1 = 101, all the way down to 50 + 51 = 101.
// Formula: 101 * 50 = (n + 1) * n/2
// Simplified: ( n(n + 1) ) / 2
// Drop constants: n(n + 1) = O(n^2 + n)
// Drop no significant values: O(n^2)
// Runtime of Bubble Sort: O(n^2)

// Accessing 

export default function bubble_sort(arr: number[]): void {

    for (let i=0; i<arr.length; ++i) {
        for (let j=0; j<arr.length - 1 - i; ++j) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}