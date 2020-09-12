/**
 * Returns the first element that matches the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {undefined | ((v: T) => boolean)} predicate If omit the condition, always true.
 * @return {?T} The first element that satisfies the condition. Null if not found.
 */
export function findFirst(iterable, predicate = (_) => true) {
	for (const i of iterable)
		if (predicate(i))
			return i;
	return null;
}

export default findFirst;
