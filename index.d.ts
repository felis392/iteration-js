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
    * Check if all the elements match.
    *
    * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
    * @return {boolean} Returns true if all elements meet the condition. Returns true whenever Iterable is empty.
    */
    allMatch(predicate: (value: T, index: number) => boolean): boolean;
    /**
    * Check if any of the elements match.
    *
    * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
    * @return {boolean} Returns true if either element meets the conditions. Returns false whenever Iterable is empty.
    */
    anyMatch(predicate: (value: T, index: number) => boolean): boolean;
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
    * Maps the element to another type and flat.
    *
    * @template U another type
    * @param {Iterable.<T>} iterable Iterable object.
    * @param {(value: T, index: number) => Iterable.<U>} mapper Transformer function.(index origin is Zero)
    * @returns {Iteration.<U>} The new Iteration. Cannot reuse.
    */
    flatMap<U>(mapper: (value: T, index: number) => Iterable<U>): Iteration<U>;
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
/**
 * Check if all the elements match.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
 * @return {boolean} Returns true if all elements meet the condition. Returns true whenever Iterable is empty.
 */
export declare function allMatch<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): boolean;
/**
 * Check if any of the elements match.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate Predicate function used to inspect elements.(index origin is Zero)
 * @return {boolean} Returns true if either element meets the conditions. Returns false whenever Iterable is empty.
 */
export declare function anyMatch<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): boolean;
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
 * @param {(value: T, index: number) => boolean} predicate Predicate to determine whether to discard the value.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function dropWhile<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
/**
 * Returns only the elements that satisfy the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines if a value is legal.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function filter<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
/**
 * Returns the first element that matches the condition.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {undefined | ((value: T, index: number) => boolean)} predicate If omit the condition, always true.(index origin is Zero)
 * @return {?T} The first element that satisfies the condition. Null if not found.
 */
export declare function findFirst<T>(iterable: Iterable<T>, predicate?: (value: T, index: number) => boolean): T | null;
/**
 * Maps the element to another type and flat.
 *
 * @template T element type
 * @template U another type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => Iterable.<U>} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<U>} The new iterable. Cannot reuse.
 */
export declare function flatMap<T, U>(iterable: Iterable<T>, mapper: (value: T, index: number) => Iterable<U>): Iterable<U>;
/**
 * Flatten nested Iterable objects at any depth.
 * @template T
 * @param {Iterable.<T|Iterable.<any>>} iterable
 * @param {number} depth
 */
export declare function flatten<T>(iterable: Iterable<T | Iterable<any>>, depth?: number): Iterable<T>;
/**
 * Perform the iteration.
 *
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {void} Nothing.
 */
export declare function forEach<T>(iterable: Iterable<T>, consumer: (value: T, index: number) => void): void;
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
 * @param {(value: T, index: number) => S} mapper Transformer function.(index origin is Zero)
 * @returns {Iterable.<S>} The new iterable. Cannot reuse.
 */
export declare function map<T, U>(iterable: Iterable<T>, mapper: (value: T, index: number) => U): Iterable<U>;
/**
 * Apply the consumption function to the element.
 *
 * This is intended for logging during debugging, for example.
 * @template T element type
 * @param {Iterable.<T>} iterable Iterable object.
 * @param {(value: T, index: number) => void} consumer Consumer function. (index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function peek<T>(iterable: Iterable<T>, consumer: (value: T, index: number) => void): Iterable<T>;
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
 * @param {(result: U | null, element: T, index: number) => U} accumulator A function that transforms and calculates the result.(index origin is Zero)
 * @param {?U} initial Initial value.
 * @returns {U | null} Result value.
 */
export declare function reduce<T, U>(iterable: Iterable<T>, accumulator: (result: U | null, element: T, index: number) => U, initial?: U | null): U | null;
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
 * @param {(value: T, index: number) => boolean} predicate A predicate that determines whether the value is still returned.(index origin is Zero)
 * @returns {Iterable.<T>} The new iterable. Cannot reuse.
 */
export declare function takeWhile<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => boolean): Iterable<T>;
/**
 * Convert an Iterable object to an Iterable object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterable<T>} The new Iterable. Cannot reuse.
 */
export declare function toIterable<T>(iterable: Iterable<T>): Iterable<T>;
/**
 * Convert an Iterable object to an Iterator object.
 * @template T element type.
 * @param {Iterable.<T>} iterable Iterable object.
 * @returns {Iterator<T, undefined, unknown>} The new Iterator. Cannot reuse.
 */
export declare function toIterator<T>(iterable: Iterable<T>): Iterator<T, undefined, unknown>;
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
