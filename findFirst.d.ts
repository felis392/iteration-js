/**
 * Returns the first element that matches the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {undefined | ((value: T, index: number) => boolean)} predicate If omit the condition, always true.(index origin is Zero)
 * @return {?T} The first element that satisfies the condition. Null if not found.
 */
export declare function findFirst<T>(iterable: Iterable<T>, predicate?: (value: T, index: number) => boolean): T | null;
export default findFirst;
