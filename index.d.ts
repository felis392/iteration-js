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
/**
 * Concatenate iterable objects.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<Iterable.<T>>} subsequents Iterable objects.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function concat<T>(iterable: Iterable<T>, ...subsequents: Array<Iterable<T>>): Iterable<T>;
/**
 * Discards the element while the condition is met. And it returns the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate Predicate to determine whether to discard the value.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function dropWhile<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function filter<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
/**
 * Returns the first element that matches the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {undefined | ((v: T) => boolean)} predicate If omit the condition, always true.
 * @return {?T} The first element that satisfies the condition. Null if not found.
 */
export declare function findFirst<T>(iterable: Iterable<T>, predicate?: (v: T) => boolean): T | null;
/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export declare function flatten<T>(iterable: Iterable<T | Iterable<unknown>>, depth?: number): Iterable<T>;
/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {void} Nothing.
 */
export declare function forEach<T>(iterable: Iterable<T>, consumer: (v: T) => void): void;
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
/**
 * Limit the number of eleme.js.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} maxSize Maximum number of eleme.js.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function limit<T>(iterable: Iterable<T>, maxSize: number): Iterable<T>;
/**
 * Maps the element to another type.
 *
 * @template T element type
 * @template S another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => S} mapper Transformer function.
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export declare function map<T, U>(iterable: Iterable<T>, mapper: (v: T) => U): Iterable<U>;
/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => void} consumer Consumer function.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function peek<T>(iterable: Iterable<T>, consumer: (v: T) => void): Iterable<T>;
/**
 * It is a sequence that repeats in steps from the start value to the end value.
 * @param {number} start First value. Should be an integer.
 * @param {number} end The ending value, but not included. Should be an integer.
 * @returns {Iterable.<number>} The new iterable. Cannot reuse.
 */
export declare function range(start: number, end: number): Iterable<number>;
/**
 * It is a sequence that repe.js in steps from the start value to the end value.
 * @param {number} start First value. Should be an integer.
 * @param {number} end The ending value. Should be an integer.
 * @returns {Iterable.<number>} The new iterable. Cannot reuse.
 */
export declare function rangeClosed(start: number, end: number): Iterable<number>;
/**
 * Performs a reduction on the eleme.js of a iterable object using the initial value,
 * cumulative, and associative functions.
 *
 * @template T element type
 * @template U result type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(result: U | null, element: T) => U} accumulator A function that transforms and calculates the result.
 * @param {?U} initial Initial value.
 * @returns {U | null} Result value.
 */
export declare function reduce<T, U>(iterable: Iterable<T>, accumulator: (result: U | null, element: T) => U, initial?: U | null): U | null;
/**
 * Remove n elements from the beginning.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {number} n The number of elements to skip from the beginning.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function skip<T>(iterable: Iterable<T>, n: number): Iterable<T>;
/**
 * Returns the eleme.js until the condition is no longer met. Discard the rest.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(v: T) => boolean} predicate A predicate that determines whether the value is still returned.
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function takeWhile<T>(iterable: Iterable<T>, predicate: (v: T) => boolean): Iterable<T>;
/**
 * Combines each element of a iterable object.
 *
 * The first element of the returned array is the value of the first Iterable object.
 * The second element is the value of the second Iterable object.
 *
 * If one is shorter than the other, the return length is equal to that length.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {Iterable.<T>} another Iterable object.
 * @returns {Iterable.<Array.<T>>} The new iterable. Cannot reuse.
 */
export declare function zip<T>(iterable: Iterable<T>, another: Iterable<T>): Iterable<Array<T>>;
