/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines if a value is legal.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function filter<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
export default filter;
