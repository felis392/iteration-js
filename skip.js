/**
 * Remove n elements from the beginning.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} n The number of elements to skip from the beginning.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function skip(iterable, n) {
	return function* (source, skips) {
		let count = 0;
		for (const i of source)
			if (count < skips)
				count++;
			else
				yield i;
	}(iterable, n);
}

export default skip;
