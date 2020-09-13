/**
 * Concatenate iterable objects.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<Iterable.<T>>} subsequents Iterable objects.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function concat<T>(iterable: Iterable<T>, ...subsequents: Array<Iterable<T>>): Iterable<T>;
export default concat;
