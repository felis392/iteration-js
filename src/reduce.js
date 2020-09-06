/**
 * Performs a reduction on the elements of a iterable object using the initial value,
 * cumulative, and associative functions.
 *
 * @template T element type
 * @template U result type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {U} initial Initial value.
 * @param {(result: U, element: T) => U} accumulator A function that transforms and calculates the result.
 * @returns {U} Result value.
 */
export function reduce(iterable, initial, accumulator) {
	let result = initial;
	for (const element of iterable)
		result = accumulator(result, element);
	return result;
}

export default reduce;
