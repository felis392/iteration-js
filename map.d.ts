/**
 * Maps the element to another type.
 *
 * @template T element type
 * @template S another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => S} mapper Transformer function.
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export declare function map<T, U>(iterable: Iterable<T>, mapper: (v: T) => U): Iterable<U>;
export default map;
