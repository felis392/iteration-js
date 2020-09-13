/**
 * It is a sequence that repe.js in steps from the start value to the end value.
 * @param {number} start First value. Should be an integer.
 * @param {number} end The ending value. Should be an integer.
 * @returns {Iterable.<number>} The new iterable. Cannot reuse.
 */
export declare function rangeClosed(start: number, end: number): Iterable<number>;
export default rangeClosed;
