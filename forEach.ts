/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => any} consumer Consumer function.
 * @returns {void} Nothing.
 */
export function forEach<T>(iterable: Iterable<T>, consumer: (v: T) => unknown) {
	for (const i of iterable)
		consumer(i);
}

export default forEach;
