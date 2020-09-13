/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export function flatten<T>(
  iterable: Iterable<T | Iterable<unknown>>,
  depth: number = 1
): Iterable<T> {
  return function* _flatten(
    source: Iterable<T | unknown>,
    depth: number
  ): Iterable<T | Iterable<unknown>> {
    for (const i of source) {
      if (depth > 0) {
        yield* _flatten(i as Iterable<unknown>, depth - 1);
      } else {
        yield i as T;
      }
    }
  }(iterable, depth) as Iterable<T>;
}

export default flatten;
