'use strict';

import test from 'ava';
import {rstrip} from './index';

test('stripping newlines #1', t => {
	const s = 'line 1\n';
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #2', t => {
	const s = 'line 1\r';
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #3', t => {
	const s = 'line 1\r\n';
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #1 (Buffer)', t => {
	const s: Buffer = new Buffer('line 1\n');
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #2 (Buffer)', t => {
	const s: Buffer = new Buffer('line 1\r');
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #3 (Buffer)', t => {
	const s: Buffer = new Buffer('line 1\r\n');
	t.is(rstrip(s), 'line 1');
});
