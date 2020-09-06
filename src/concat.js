/**
 * Concatenate iterable objects.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<T>} subsequent Iterable object.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function concat(iterable, subsequent) {
	return function* (source1, source2) {
		for (const i of source1)
			yield i;
		for (const i of source2)
			yield i;
	}(iterable, subsequent);
}

export default concat;
