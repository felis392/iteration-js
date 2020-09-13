/**
 * Performs a reduction on the eleme.js of a iterable object using the initial value,
 * cumulative, and associative functions.
 *
 * @template T element type
 * @template U result type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(result: U | null, element: T) => U} accumulator A function that transforms and calculates the result.
 * @param {?U} initial Initial value.
 * @returns {U | null} Result value.
 */
export function reduce<T, U>(
  iterable: Iterable<T>,
  accumulator: (result: U | null, element: T) => U,
  initial: U | null = null
): U | null {
  let result = initial === undefined ? null : initial;
  for (const element of iterable)
    result = accumulator(result, element);
  return result;
}

export default reduce;
