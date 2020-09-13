// @deno-types="./iterate.d.ts"
import { iterate } from './iterate.js';

/**
 * It is a sequence that repeats in steps from the start value to the end value.
 * @param {number} start First value. Should be an integer.
 * @param {number} end The ending value, but not included. Should be an integer.
 * @returns {Iterable.<number>} The new iterable. Cannot reuse.
 */
export function range(
  start: number,
  end: number
): Iterable<number> {
  start = Math.floor(start);
  end = Math.floor(end);
  return start < end
    ? iterate(start, i => i < end, i => i + 1)
    : iterate(start, i => i > end, i => i - 1);
}

export default range;
