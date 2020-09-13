/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines if a value is legal.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function filter(iterable, predicate) {
    return function* (source, filterCondtion) {
        let index = 0;
        for (const i of source) {
            if (filterCondtion(i, index++))
                yield i;
        }
    }(iterable, predicate);
}
export default filter;
