/**
 * Performs a reduction on the eleme.js of a iterable object using the initial value,
 * cumulative, and associative functions.
 *
 * @template T element type
 * @template U result type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(result: U | null, element: T, index: number) => U} accumulator A function that transforms and calculates the result.(index origin is Zero)
 * @param {?U} initial Initial value.
 * @returns {U | null} Result value.
 */
export declare function reduce<T, U>(iterable: Iterable<T>, accumulator: (result: U | null, element: T, index: number) => U, initial?: U | null): U | null;
export default reduce;
