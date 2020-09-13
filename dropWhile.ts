/**
 * Discards the element while the condition is met. And it returns the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate to determine whether to discard the value.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function dropWhile<T>(
  iterable: Iterable<T>,
  predicate: (value: T, index: number) => boolean
): Iterable<T> {
  return function* (source, dropCondtion) {
    let index = 0;
    let matched = true;
    for (const i of source) {
      if (matched)
        matched = dropCondtion(i, index++);
      if (!matched)
        yield i;
    }
  }(iterable, predicate);
}

export default dropWhile;
