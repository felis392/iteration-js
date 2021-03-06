/**
 * Check if any of the elements match.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
 * @return {boolean} Returns true if either element meets the conditions. Returns false whenever Iterable is empty.
 */
export declare function anyMatch<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): boolean;
export default anyMatch;
