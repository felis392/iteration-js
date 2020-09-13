/**
 * Maps the element to another type.
 *
 * @template T element type
 * @template S another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => S} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export declare function map<T, U>(iterable: Iterable<T>, mapper: (value: T, index: number) => U): Iterable<U>;
export default map;
