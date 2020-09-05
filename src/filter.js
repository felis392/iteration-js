/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function filter(iterable, predicate) {
	return function* (source, filterCondtion) {
		for (const i of source) {
			if (filterCondtion(i))
				yield i;
		}
	}(iterable, predicate);
}

export default filter;
