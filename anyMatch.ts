/**
 * Check if any of the elements match.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
 * @return {boolean} Returns true if either element meets the conditions. Returns false whenever Iterable is empty.
 */
export function anyMatch<T>(
  iterable: Iterable<T>,
  predicate: (value: T, index: number) => boolean
): boolean{
  let index = 0;
  for (const i of iterable)
    if (predicate(i, index++))
      return true;
  return false;
}

export default anyMatch;
