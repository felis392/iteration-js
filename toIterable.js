/**
 * Convert an Iterable object to an Iterable object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterable<T>} The new Iterable. Cannot reuse.
 */
export function toIterable(iterable) {
    return function* (source) {
        for (const i of source)
            yield i;
    }(iterable);
}
export default toIterable;
