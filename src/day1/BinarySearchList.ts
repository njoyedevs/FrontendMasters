// [lo, hi) - low is inclusive and high is exclusive always so that 
// we can account for the middle in low and not in high

// the lords loop (do/while)

export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi-lo)/2);
        const v = haystack[m];

        if(v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }

    } while (lo < hi);

    return false;

}