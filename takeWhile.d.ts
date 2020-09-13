/**
 * Returns the eleme.js until the condition is no longer met. Discard the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate A predicate that determines whether the value is still returned.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function takeWhile<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
export default takeWhile;
