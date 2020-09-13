/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function filter<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
export default filter;
