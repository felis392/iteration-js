/**
 * Maps the element to another type and flat.
 *
 * @template T element type
 * @template U another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => Iterable.<U>} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<U>} The new iterable. Cannot reuse.
 */
export declare function flatMap<T, U>(iterable: Iterable<T>, mapper: (value: T, index: number) => Iterable<U>): Iterable<U>;
export default flatMap;
