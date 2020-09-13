import { iterate } from '../iterate.js';
import { assert } from 'tiny-esm-test-runner';
const { is } = assert;

export function test() {
	const v = function*() {
		for (const i of iterate(12, (x) => x < 18, (x) => x + 1))
			yield i;
	}();

	is(12, v.next().value);
	is(13, v.next().value);
	is(14, v.next().value);
	is(15, v.next().value);
	is(16, v.next().value);
	is(17, v.next().value);
	is(undefined, v.next().value);
}
