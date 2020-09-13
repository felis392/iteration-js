import concat from './concat.js';
import dropWhile from './dropWhile.js';
import findFirst from './findFirst.js';
import filter from './filter.js';
import forEach from './forEach.js';
import limit from './limit.js';
import map from './map.js';
import peek from './peek.js';
import skip from './skip.js';
import takeWhile from './takeWhile.js';
import zip from './zip.js';
import reduce from './reduce.js';

/** private key */
const $iterable = Symbol('iterable');

/**
 * A wrapper class for chaining operations such as iterable collections and infinite lists.
 * @template T element type.
 */
export class Iteration {
	/**
	 * @param {Iterable.<T>} iterable Iterable object.
	 */
	constructor(iterable) {
		this[$iterable] = iterable;
	}

	/**
	 * Initialize this with a iterable object.
	 * @param {Iterable.<T>} iterable Iterable object.
	 * @returns {Iteration.<T>} the new Iteration object. Cannot reuse.
	 */
	static on(iterable) {
		return new Iteration(iterable);
	}

	/**
	 * Concatenate iterable objects.
	 * @param {Iterable.<Iterable.<T>>} subsequents Iterable objects.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	concat(...subsequents) {
		return Iteration.on(concat(this[$iterable], ...subsequents));
	}

	/**
	 * Discards the element while the condition is met. And it returns the rest.
	 * @param {(v: T) => boolean} predicate Predicate to determine whether to discard the value.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	dropWhile(predicate) {
		return Iteration.on(dropWhile(this[$iterable], predicate));
	}

	/**
	 * Returns only the elements that satisfy the condition.
	 * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	filter(predicate) {
		return Iteration.on(filter(this[$iterable], predicate));
	}

	/**
	 * Returns the first element that matches the condition.
	 * @param {undefined | ((v: T) => boolean)} predicate If omit the condition, always true.
	 * @return {?T} The first element that satisfies the condition. Null if not found.
	 */
	findFirst(predicate) {
		return findFirst(this[$iterable], predicate);
	}

	/**
	 * Perform the iteration.
	 * @param {(v: T) => any} consumer Consumer function.
	 * @returns {void} Nothing.
	 */
	forEach(consumer) {
		forEach(this[$iterable], consumer);
	}

	/**
	 * Limit the number of elements.
	 * @param {number} maxSize Maximum number of elements.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	limit(maxSize) {
		return Iteration.on(limit(this[$iterable], maxSize));
	}

	/**
	 * Maps the element to another type.
	 * @template U another type.
	 * @param {(v: T) => U} mapper Transformer function.
	 * @returns {Iteration.<U>} The new Iteration. Cannot reuse.
	 */
	map(mapper) {
		return Iteration.on(map(this[$iterable], mapper));
	}

	/**
	 * Apply the consumption function to the element.
	 *
	 * This is intended for logging during debugging, for example.
	 * @param {(v: T) => any} consumer Consumer function.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	peek(consumer) {
		return Iteration.on(peek(this[$iterable], consumer));
	}

	/**
	 * Performs a reduction on the elements of a iterable object using the initial value,
	 * cumulative, and associative functions.
	 * @template U result type.
	 * @param {U} initial Initial value.
	 * @param {(result: U, element: T) => U} accumulator A function that transforms and calculates the result.
	 * @returns {U} Result value.
	 */
	reduce(initial, accumulator) {
		return reduce(this[$iterable], initial, accumulator);
	}

	/**
	 * Remove n elements from the beginning.
	 * @param {number} n The number of elements to skip from the beginning.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	 skip(n) {
		return Iteration.on(skip(this[$iterable], n));
	}

	/**
	 * Returns the elements until the condition is no longer met. Discard the rest.
	 * @param {(v: T) => boolean} predicate A predicate that determines whether the value is still returned.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	takeWhile(predicate) {
		return Iteration.on(takeWhile(this[$iterable], predicate));
	}

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
	zip(another) {
		return Iteration.on(zip(this[$iterable], another));
	}
}