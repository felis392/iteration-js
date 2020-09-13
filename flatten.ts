/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export function flatten<T>(
  iterable: Iterable<T | Iterable<any>>,
  depth: number = 1
): Iterable<T> {
  return function* _flatten(
    source: Iterable<T | any>,
    depth: number
  ): Iterable<T | Iterable<any>> {
    for (const i of source) {
      if (depth > 0) {
        yield* _flatten(i as Iterable<any>, depth - 1);
      } else {
        yield i as T;
      }
    }
  }(iterable, depth) as Iterable<T>;
}

export default flatten;
