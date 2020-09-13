/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {void} Nothing.
 */
export declare function forEach<T>(iterable: Iterable<T>, consumer: (v: T) => void): void;
export default forEach;
