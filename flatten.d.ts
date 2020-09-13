/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export declare function flatten<T>(iterable: Iterable<T | Iterable<unknown>>, depth?: number): Iterable<T>;
export default flatten;
