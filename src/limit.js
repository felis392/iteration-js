/**
 * Limit the number of elements.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} maxSize Maximum number of elements.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function limit(iterable, maxSize) {
	return function* (source, cap) {
		let count = 0;
		for (const i of source)
			if (count < cap) {
				count++;
				yield i;
			}
			else
				break;
	}(iterable, maxSize);
}

export default limit;
