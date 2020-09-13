/**
 * Maps the element to another type.
 *
 * @template T element type
 * @template S another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => S} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export function map<T, U>(
  iterable: Iterable<T>,
  mapper: (value: T, index: number) => U
): Iterable<U> {
  return function* (source, mapper) {
    let index = 0;
    for (const i of source)
      yield mapper(i, index++);
  }(iterable, mapper);
}

export default map;
