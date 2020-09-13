/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function peek<T>(
  iterable: Iterable<T>,
  consumer: (v: T) => void
): Iterable<T> {
	return function* (source, sideEffect) {
		for (const i of source) {
			sideEffect(i);
			yield i;
		}
	}(iterable, consumer);
}

export default peek;
