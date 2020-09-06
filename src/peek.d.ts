export declare function peek<T>(
	iterable: Iterable<T>,
	consumer: (v: T) => any
): Iterable<T>;

export default peek;
