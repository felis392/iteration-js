/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {void} Nothing.
 */
export declare function forEach<T>(iterable: Iterable<T>, consumer: (value: T, index: number) => void): void;
export default forEach;
