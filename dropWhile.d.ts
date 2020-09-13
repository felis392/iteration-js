/**
 * Discards the element while the condition is met. And it returns the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate Predicate to determine whether to discard the value.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function dropWhile<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
export default dropWhile;
