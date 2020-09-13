// @deno-types="./dropWhile.d.ts"
import { dropWhile } from './dropWhile.js';
/**
 * Remove n elements from the beginning.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} n The number of elements to skip from the beginning.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function skip(iterable, n) {
    return dropWhile(iterable, (_, index) => index < n);
}
export default skip;
