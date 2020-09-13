/**
 * Convert an Iterable object to an Iterator object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterator<T, undefined, unknown>} The new Iterator. Cannot reuse.
 */
export function toIterator(iterable) {
    return function* (source) {
        for (const i of source)
            yield i;
        return undefined;
    }(iterable);
}
export default toIterator;
