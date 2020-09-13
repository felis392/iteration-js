/**
 * Convert an Iterable object to an Iterable object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterable<T>} The new Iterable. Cannot reuse.
 */
export function toIterable<T>(
  iterable: Iterable<T>
): Iterable<T> {
  return function* (source): Generator<T, void, unknown> {
    for (const i of source)
      yield i;
  }(iterable);
}

export default toIterable;
