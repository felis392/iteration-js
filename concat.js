/**
 * Concatenate iterable objects.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<Iterable.<T>>} subsequents Iterable objects.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function concat(iterable, ...subsequents) {
	return function* (source1, sources) {
		for (const i of source1)
			yield i;
		for (const source of sources)
			if (source == null) continue;
			else
				for (const i of source)
					yield i;
	}(iterable, subsequents);
}

export default concat;
