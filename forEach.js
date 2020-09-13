/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {void} Nothing.
 */
export function forEach(iterable, consumer) {
    for (const i of iterable)
        consumer(i);
}
export default forEach;
