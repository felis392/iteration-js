import forEach from './forEach.js';
import filter from './filter.js';
import dropWhile from './dropWhile.js';
import takeWhile from './takeWhile.js';
import map from './map.js';
import peek from './peek.js';

/** private key */
const $iterable = Symbol('iterable');

/**
 * A wrapper class for chaining operations such as iterable collections and infinite lists.
 *  @template T element type
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
	 * @returns {Iteration.<T>} the new Iteration object.
	 */
	static on(iterable) {
		return new Iteration(iterable);
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
	 * Returns only the elements that satisfy the condition.
	 * @param {(v: T) => boolean} predicate A predicate that determines if a value is legal.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	filter(predicate) {
		return Iteration.on(filter(this[$iterable], predicate));
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
	 * Returns the elements until the condition is no longer met. Discard the rest.
	 * @param {(v: T) => boolean} predicate A predicate that determines whether the value is still returned.
	 * @returns {Iteration.<T>} The new Iteration. Cannot reuse.
	 */
	takeWhile(predicate) {
		return Iteration.on(takeWhile(this[$iterable], predicate));
	}

	/**
	 * Maps the element to another type.
	 * @template S another type
	 * @param {(v: T) => S} transformer Transformer function.
	 * @returns {Iteration.<S>} The new Iteration. Cannot reuse.
	 */
	map(mapper) {
		return Iteration.on(map(this[$iterable], mapper));
	}

	/**
	 * Apply the consumption function to the element.
	 *
	 * This is intended for logging during debugging, for example.
	 * @param {(v: T) => any} consumer Consumer function.
	 * @returns {Iteration.<S>} The new Iteration. Cannot reuse.
	 */
	peek(consumer) {
		return Iteration.on(peek(this[$iterable], consumer));
	}
}
