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
     * @param {(v: T) => boolean} predicate Predicate to determine whether to discard the value.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    dropWhile(predicate: (v: T) => boolean): Iteration<T>;
    /**
     * Returns only the elements that satisfy the condition.
     * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    filter(predicate: (v: T) => boolean): Iteration<T>;
    /**
     * Returns the first element that matches the condition.
     * @param {undefined | ((v: T) => boolean)} predicate If omit the condition, always true.
     * @return {?T} The first element that satisfies the condition. Null if not found.
     */
    findFirst(predicate: (v: T) => boolean): T | null;
    /**
     * Perform the iteration.
     * @param {(v: T) => void} consumer Consumer function.
     * @returns {void} Nothing.
     */
    forEach(consumer: (v: T) => void): void;
    /**
     * Limit the number of elements.
     * @param {number} maxSize Maximum number of elements.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    limit(maxSize: number): Iteration<T>;
    /**
     * Maps the element to another type.
     * @template U another type.
     * @param {(v: T) => U} mapper Transformer function.
     * @returns {Iteration.<U>} The new Iteration. Cannot reuse.
     */
    map<U>(mapper: (v: T) => U): Iteration<U>;
    /**
     * Apply the consumption function to the element.
     *
     * This is intended for logging during debugging, for example.
     * @param {(v: T) => any} consumer Consumer function.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    peek(consumer: (v: T) => void): Iteration<T>;
    /**
     * Performs a reduction on the elements of a iterable object using the initial value,
     * cumulative, and associative functions.
     * @template U result type.
     * @param {(result: U | null, element: T) => U} accumulator A function that transforms and calculates the result.
     * @param {?U} initial Initial value.
     * @returns {U | null} Result value.
     */
    reduce<U>(accumulator: (result: U | null, element: T) => U, initial?: U | null): U | null;
    /**
     * Remove n elements from the beginning.
     * @param {number} n The number of elements to skip from the beginning.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    skip(n: number): Iteration<T>;
    /**
     * Returns the elements until the condition is no longer met. Discard the rest.
     * @param {(v: T) => boolean} predicate A predicate that determines whether the value is still returned.
     * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
     */
    takeWhile(predicate: (v: T) => boolean): Iteration<T>;
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
