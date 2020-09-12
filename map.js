/**
 * Maps the element to another type.
 *
 * @template T element type
 * @template S another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => S} transformer Transformer function.
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export function map(iterable, transformer) {
	return function* (source, mapper) {
		for (const i of source)
			yield mapper(i);
	}(iterable, transformer);
}

export default map;
