/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {void} Nothing.
 */
export function forEach(iterable, consumer) {
    let index = 0;
    for (const i of iterable)
        consumer(i, index++);
}
export default forEach;
