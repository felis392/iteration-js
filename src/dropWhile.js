/**
 * Discards the element while the condition is met. And it returns the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate Predicate to determine whether to discard the value.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function dropWhile(iterable, predicate) {
	return function* (source, dropCondtion) {
		let matched = true;
		for (const i of source) {
			if (matched)
				matched = dropCondtion(i);
			if (!matched)
				yield i;
		}
	}(iterable, predicate);
}

export default dropWhile;
