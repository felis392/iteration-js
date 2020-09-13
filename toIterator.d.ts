/**
 * Convert an Iterable object to an Iterator object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterator<T, undefined, unknown>} The new Iterator. Cannot reuse.
 */
export declare function toIterator<T>(iterable: Iterable<T>): Iterator<T, undefined, unknown>;
export default toIterator;
