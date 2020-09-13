/**
 * Convert an Iterable object to an Iterable object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterable<T>} The new Iterable. Cannot reuse.
 */
export declare function toIterable<T>(iterable: Iterable<T>): Iterable<T>;
export default toIterable;
