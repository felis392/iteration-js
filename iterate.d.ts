/**
 * Returns a iterable, generated by iteratively applying the specified next function
 * to the initial elements, subject to the given hasNext predicate being satisfied.
 *
 * The iteration ends as soon as the hasNext predicate returns false.
 * @template T element type
 * @param {T} seed initial value
 * @param {(v: T) => boolean} hasNext A predicate that applies to the element that determines whether the iteration should end.
 * @param {(v: T) => T} next A function applied to the previous element to create a new element
 * @returns {Iterable.<T>} the new iterable.
 */
export declare function iterate<T>(seed: T, hasNext: (v: T) => boolean, next: (v: T) => T): Iterable<T>;
export default iterate;
