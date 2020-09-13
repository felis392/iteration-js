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
export function reduce(iterable, accumulator, initial = null) {
    let index = 0;
    let result = initial === undefined ? null : initial;
    for (const element of iterable)
        result = accumulator(result, element, index++);
    return result;
}
export default reduce;
