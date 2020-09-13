/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function peek<T>(iterable: Iterable<T>, consumer: (value: T, index: number) => void): Iterable<T>;
export default peek;
