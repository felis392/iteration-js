/**
 * Limit the number of eleme.js.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} maxSize Maximum number of eleme.js.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function limit<T>(iterable: Iterable<T>, maxSize: number): Iterable<T>;
export default limit;
