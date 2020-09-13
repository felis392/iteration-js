/**
 * Returns the first element that matches the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {undefined | ((value: T, index: number) => boolean)} predicate If omit the condition, always true.(index origin is Zero)
 * @return {?T} The first element that satisfies the condition. Null if not found.
 */
export function findFirst(iterable, predicate = (_) => true) {
    let index = 0;
    for (const i of iterable)
        if (predicate(i, index++))
            return i;
    return null;
}
export default findFirst;
