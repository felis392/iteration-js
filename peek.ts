/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function peek<T>(
  iterable: Iterable<T>,
  consumer: (value: T, index: number) => void
): Iterable<T> {
	return function* (source, sideEffect) {
    let index = 0;
		for (const i of source) {
			sideEffect(i, index++);
			yield i;
		}
	}(iterable, consumer);
}

export default peek;
