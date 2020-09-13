/**
 * Check if all the elements match.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
 * @return {boolean} Returns true if all elements meet the condition. Returns true whenever Iterable is empty.
 */
export function allMatch<T>(
  iterable: Iterable<T>,
  predicate: (value: T, index: number) => boolean
): boolean{
  let index = 0;
  for (const i of iterable)
    if (!predicate(i, index++))
      return false;
  return true;
}

export default allMatch;
