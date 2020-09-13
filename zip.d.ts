/**
 * Combines each element of a iterable object.
 *
 * The first element of the returned array is the value of the first Iterable object.
 * The second element is the value of the second Iterable object.
 *
 * If one is shorter than the other, the return length is equal to that length.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<T>} another Iterable object.
 * @returns {Iterable.<Array.<T>>} The new iterable. Cannot reuse.
 */
export declare function zip<T>(iterable: Iterable<T>, another: Iterable<T>): Iterable<Array<T>>;
export default zip;
