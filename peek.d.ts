/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function peek<T>(iterable: Iterable<T>, consumer: (v: T) => void): Iterable<T>;
export default peek;
