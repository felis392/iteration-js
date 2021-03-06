/**
 * Combines each element of a iterable object.
 *
 * The first element of the returned array is the value of the first Iterable object.
 * The second element is the value of the second Iterable object.
 *
 * If one is shorter than the other, the return length is equal to that length.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<T>} another Iterable object.
 * @returns {Iterable.<Array.<T>>} The new iterable. Cannot reuse.
 */
export function zip<T>(
  iterable: Iterable<T>,
  another: Iterable<T>
): Iterable<Array<T>> {
	function* gen(source: Iterable<T>): Generator<T, any, unknown> {
		for (const i of source)
			yield i;
	}
	return function* (
    source1: Generator<T, any, unknown>,
    source2: Generator<T, any, unknown>
  ): Iterable<Array<T>> {
		while (true) {
			const n1 = source1.next();
			const n2 = source2.next();
			if (n1.done || n2.done)
				break;
			yield [n1.value, n2.value];
		}
	}(gen(iterable), gen(another));
}

export default zip;
