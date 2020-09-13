/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export function flatten(iterable, depth = 1) {
    return function* _flatten(source, depth) {
        for (const i of source) {
            if (depth > 0) {
                yield* _flatten(i, depth - 1);
            }
            else {
                yield i;
            }
        }
    }(iterable, depth);
}
export default flatten;
