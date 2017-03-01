'use strict';

import * as assert from 'assert';
import {rstrip} from './index';

describe('Testing rstrip', () => {
	it('stripping newlines #1', () => {
		let s = 'line 1\n';
		assert.equal(rstrip(s), 'line 1');
	});

	it('stripping newlines #2', () => {
		let s = 'line 1\r';
		assert.equal(rstrip(s), 'line 1');
	});

	it('stripping newlines #3', () => {
		let s = 'line 1\r\n';
		assert.equal(rstrip(s), 'line 1');
	});
});
