export declare class Iteration<T> {
	static on(iterable: Iterable<T>): Iteration<T>;
	[Symbol.iterator](): Iterable<T>;
	forEach(consumer: (v: T) => any): void;
	filter(predicate: (v: T) => boolean): Iteration<T>;
	dropWhile(predicate: (v: T) => boolean): Iteration<T>;
	takeWhile(predicate: (v: T) => boolean): Iteration<T>;
	map<S>(mapper: (v: T) => S): Iteration<S>;
	peek(consumer: (v: T) => any): Iteration<T>;
}

export default Iteration;
