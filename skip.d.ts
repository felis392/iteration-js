/**
 * Remove n elements from the beginning.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} n The number of elements to skip from the beginning.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function skip<T>(iterable: Iterable<T>, n: number): Iterable<T>;
export default skip;
