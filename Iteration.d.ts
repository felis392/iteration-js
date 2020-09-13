/** private key */
declare const $iterable: unique symbol;
/**
 * A wrapper class for chaining operations such as iterable collections and infinite lists.
 * @template T element type.
 */
export declare class Iteration<T> {
    /** @type {Iterable.<T>} */
    [$iterable]: Iterable<T>;
    /**
     * @param {Iterable.<T>} iterable Iterable object.
     */
    constructor(iterable: Iterable<T>);
    /**
     * Initialize this with a iterable object.
     * @template S element type.
     * @param {Iterable.<S>} iterable Iterable object.
     * @returns {Iteration.<S>} the new Iteration object. Cannot reuse.
     */
    static on<S>(iterable: Iterable<S>): Iteration<S>;
    /**
     * Concatenate iterable objects.
     * @param {Iterable.<Iterable.<T>>} subsequents Iterable objects.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    concat(...subsequents: Array<Iterable<T>>): Iteration<T>;
    /**
     * Discards the element while the condition is met. And it returns the rest.
     * @param {(value: T, index: number) => boolean} predicate Predicate to determine whether to discard the value.(index origin is Zero)
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    dropWhile(predicate: (value: T, index: number) => boolean): Iteration<T>;
    /**
     * Returns only the elements that satisfy the condition.
     * @param {(value: T, index: number) => boolean} predicate A predicate that determines if a value is legal.(index origin is Zero)
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    filter(predicate: (value: T, index: number) => boolean): Iteration<T>;
    /**
     * Returns the first element that matches the condition.
     * @param {undefined | ((value: T, index: number) => boolean)} predicate If omit the condition, always true.(index origin is Zero)
     * @return {?T} The first element that satisfies the condition. Null if not found.
     */
    findFirst(predicate?: (value: T, index: number) => boolean): T | null;
    /**
     * Perform the iteration.
     * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
     * @returns {void} Nothing.
     */
    forEach(consumer: (value: T, index: number) => void): void;
    /**
     * Limit the number of elements.
     * @param {number} maxSize Maximum number of elements.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    limit(maxSize: number): Iteration<T>;
    /**
     * Maps the element to another type.
     * @template U another type.
     * @param {(value: T, index: number) => S} mapper Transformer function.(index origin is Zero)
     * @returns {Iteration.<U>} The new Iteration. Cannot reuse.
     */
    map<U>(mapper: (value: T, index: number) => U): Iteration<U>;
    /**
     * Apply the consumption function to the element.
     *
     * This is intended for logging during debugging, for example.
     * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    peek(consumer: (value: T, index: number) => void): Iteration<T>;
    /**
     * Performs a reduction on the elements of a iterable object using the initial value,
     * cumulative, and associative functions.
     * @template U result type.
     * @param {(result: U | null, element: T, index: number) => U} accumulator A function that transforms and calculates the result.(index origin is Zero)
     * @param {?U} initial Initial value.
     * @returns {U | null} Result value.
     */
    reduce<U>(accumulator: (result: U | null, element: T, index: number) => U, initial?: U | null): U | null;
    /**
     * Remove n elements from the beginning.
     * @param {number} n The number of elements to skip from the beginning.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    skip(n: number): Iteration<T>;
    /**
     * Returns the elements until the condition is no longer met. Discard the rest.
     * @param {(value: T, index: number) => boolean} predicate A predicate that determines whether the value is still returned.(index origin is Zero)
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    takeWhile(predicate: (value: T, index: number) => boolean): Iteration<T>;
    /**
    * Convert to an Iterable object.
    * @returns {Iterable<T>} The new Iterable. Cannot reuse.
    */
    toIterable(): Iterable<T>;
    /**
    * Convert to an Iterator object.
    * @returns {Iterator<T, undefined, unknown>} The new Iterator. Cannot reuse.
    */
    toIterator(): Iterator<T, undefined, unknown>;
    /**
     * Combines each element of a iterable object.
     *
     * The first element of the array is the value of the first Iterable object.
     * The second element is the value of the second Iterable object.
     *
     * If one is shorter than the other, the return length is equal to that length.
     * @param {Iterable.<T>} another Iterable object.
     * @returns {Iteration.<Array.<T>>} The new Iteration. Cannot reuse.
     */
    zip(another: Iterable<T>): Iteration<Array<T>>;
}
export default Iteration;
