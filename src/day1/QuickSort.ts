// we could return the number[] but the quick_sort function is returning void
function qs(arr: number[], lo: number, hi: number): void {

    // Base Case - end recursing
    if (lo >= hi) {
        return ;
    }

    const pivotIdx = partition(arr, lo, hi);

    // recures quick_sort without including pivotIdx
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

// the partition returns the pivot to the quick_sort function
function partition(arr: number[], lo: number, hi: number): number {

    const pivot = arr[hi];

    let idx = lo - 1;

    // Weak sort from index 0 to but not including hi
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // Examine this further.
    idx++    
    arr[hi] = arr[idx];
    arr[idx] = pivot

    return idx;
}


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}