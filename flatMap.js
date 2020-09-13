// @deno-types="./flatten.d.ts"
import flatten from './flatten.js';
// @deno-types="./map.d.ts"
import map from './map.js';
/**
 * Maps the element to another type and flat.
 *
 * @template T element type
 * @template U another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => Iterable.<U>} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<U>} The new iterable. Cannot reuse.
 */
export function flatMap(iterable, mapper) {
    return flatten(map(iterable, mapper), 1);
}
export default flatMap;
