/**
 * Returns the eleme.js until the condition is no longer met. Discard the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines whether the value is still returned.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export function takeWhile(iterable, predicate) {
    return function* (source, takeCondtion) {
        let index = 0;
        for (const i of source) {
            if (takeCondtion(i, index++))
                yield i;
            else
                break;
        }
    }(iterable, predicate);
}
export default takeWhile;
