export declare class Iteration<T> {
  static on<T>(iterable: Iterable<T>): Iteration<T>;
  concat(...subsequent: Array<Iterable<T>>): Iteration<T>;
  dropWhile(predicate: (v: T) => boolean): Iteration<T>;
  forEach(consumer: (v: T) => any): void;
  findFirst(predicate?: (v: T) => boolean): T | undefined;
  filter(predicate: (v: T) => boolean): Iteration<T>;
  limit(maxSize: number): Iteration<T>;
  map<U>(mapper: (v: T) => U): Iteration<U>;
  peek(consumer: (v: T) => any): Iteration<T>;
  reduce<U>(accumulator: (result: U, element: T) => U, initial?: U): U | undefined;
  skip(n: number): Iteration<T>;
  takeWhile(predicate: (v: T) => boolean): Iteration<T>;
  zip(another: Iterable<T>): Iteration<Array<T>>;
}

export declare function concat<T>(
  iterable: Iterable<T>,
  ...subsequents: Array<Iterable<T>>
): Iterable<T>;

export declare function dropWhile<T>(
  iterable: Iterable<T>,
  predicate: (v: T) => boolean
): Iterable<T>;

export declare function filter<T>(
  iterable: Iterable<T>,
  predicate: (v: T) => boolean
): Iterable<T>;

export declare function findFirst<T>(
  iterable: Iterable<T>,
  predicate?: (v: T) => boolean
): T | undefined;

export declare function forEach<T>(
  iterable: Iterable<T>,
  consumer: (v: T) => any
): void;

export declare function iterate<T>(
  seed: T,
  hasNext: (v: T) => boolean,
  next: (v: T) => T
): Iterable<T>;

export declare function limit<T>(
  iterable: Iterable<T>,
  maxSize: number
): Iterable<T>;

export declare function map<T, U>(
  iterable: Iterable<T>,
  transformer: (v: T) => U
): Iterable<U>;

export declare function peek<T>(
  iterable: Iterable<T>,
  consumer: (v: T) => any
): Iterable<T>;

export declare function reduce<T, U>(
  iterable: Iterable<T>,
  accumulator: (result: U, element: T) => U,
  initial?: U
): U | undefined;

export declare function skip<T>(
  iterable: Iterable<T>,
  n: number
): Iterable<T>;

export declare function takeWhile<T>(
  iterable: Iterable<T>,
  predicate: (v: T) => boolean
): Iterable<T>;

export declare function range(
  start: number,
  end: number
): Iterable<number>;

export declare function rangeClosed(
  start: number,
  end: number
): Iterable<number>;

export declare function zip<T>(
  iterable: Iterable<T>,
  another: Iterable<T>
): Iterable<Array<T>>;
