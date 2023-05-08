// The crystal ball problem
// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way.

// Yes, that's correct. When we find the slope (i.e., the derivative) equal to zero,
// it means that the rate of change of the total number of throws T(n, k) with respect
// to the interval size k is neither increasing nor decreasing at that point.
// This point corresponds to a minimum or maximum of the function.

// In the context of the crystal ball problem, we are looking for a minimum,
// which represents the optimal interval size k that minimizes the total number
// of throws in the worst-case scenario. By finding the point where the derivative
// is zero, we identify the value of k that achieves this minimum, ensuring the
// most efficient strategy when using two balls.

// The mathematical basis for jumping sqrt(n) is rooted in minimizing the worst-case
// scenario for the number of throws. Let's analyze this.

// If we divide the building into intervals of size k, there will be n/k intervals.
// In the worst case, the first ball will break after trying every k floors, which
// takes n/k throws. Then, the second ball will be thrown from the last safe floor,
// one floor at a time. In the worst case, the second ball will be thrown k-1 times
// before it breaks. Thus, the total number of throws in the worst case is:
    
// T(n, k) = n/k + k - 1
    
// To find the optimal k that minimizes T(n, k), we need to find the minimum of this function.
// We can do this by taking the derivative of T(n, k) with respect to k, and setting it to zero:
    
// d(T(n, k))/dk = -n/k^2 + 1 = 0
    
// Solving for k, we get:
    
// k^2 = n
// k = sqrt(n)
    
// This shows that, to minimize the number of throws in the worst case, we should use intervals
// of size sqrt(n). However, this method assumes that you have a limited number of balls,
// like two. If you have more balls, there are more efficient methods for solving the crystal
// ball problem.

// Runtime = O(sqrt(n))

export default function two_crystal_balls(breaks: boolean[]): number {
    
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        // if breaks[i] is true then break (seeing that breaks is an array of false until true)
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}