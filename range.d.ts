/**
 * It is a sequence that repeats in steps from the start value to the end value.
 * @param {number} start First value. Should be an integer.
 * @param {number} end The ending value, but not included. Should be an integer.
 * @returns {Iterable.<number>} The new iterable. Cannot reuse.
 */
export declare function range(start: number, end: number): Iterable<number>;
export default range;
