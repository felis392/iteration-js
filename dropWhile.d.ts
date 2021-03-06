/**
 * Discards the element while the condition is met. And it returns the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate to determine whether to discard the value.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function dropWhile<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
export default dropWhile;
