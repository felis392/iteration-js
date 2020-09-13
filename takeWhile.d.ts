/**
 * Returns the eleme.js until the condition is no longer met. Discard the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines whether the value is still returned.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function takeWhile<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
export default takeWhile;
