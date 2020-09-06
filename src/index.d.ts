export declare function dropWhile<T>(
	iterable: Iterable<T>,
	predicate: (v: T) => boolean
): Iterable<T>;

export declare function filter<T>(
	iterable: Iterable<T>,
	predicate: (v: T) => boolean
): Iterable<T>;

export declare function forEach<T>(
	iterable: Iterable<T>,
	consumer: (v: T) => any
): void;

export declare class Iteration<T> {
	static on<T>(iterable: Iterable<T>): Iteration<T>;
	forEach(consumer: (v: T) => any): void;
	filter(predicate: (v: T) => boolean): Iteration<T>;
	dropWhile(predicate: (v: T) => boolean): Iteration<T>;
	takeWhile(predicate: (v: T) => boolean): Iteration<T>;
	map<S>(mapper: (v: T) => S): Iteration<S>;
	peek(consumer: (v: T) => any): Iteration<T>;
}

export declare function map<T,S>(
	iterable: Iterable<T>,
	transformer: (v: T) => S
): Iterable<S>;

export declare function peek<T>(
	iterable: Iterable<T>,
	consumer: (v: T) => any
): Iterable<T>;

export declare function peek<T>(
	iterable: Iterable<T>,
	consumer: (v: T) => any
): Iterable<T>;

export declare function peek<T>(
	iterable: Iterable<T>,
	consumer: (v: T) => any
): Iterable<T>;

export declare function takeWhile<T>(
	iterable: Iterable<T>,
	predicate: (v: T) => boolean
): Iterable<T>;

export declare function iterate<T>(
	seed: T,
	hasNext: (v: T) => boolean,
	next: (v: T) => T
): Iterable<T>;

export declare function range(
	start: number,
	end: number
): Iterable<number>;

export declare function rangeClosed(
	start: number,
	end: number
): Iterable<number>;
