// @deno-types="./takeWhile.d.ts"
import { takeWhile } from './takeWhile.js';

/**
 * Limit the number of eleme.js.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} maxSize Maximum number of eleme.js.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function limit<T>(
  iterable: Iterable<T>,
  maxSize: number
): Iterable<T> {
  return takeWhile(iterable, (_, index) => index < maxSize);
}

export default limit;
