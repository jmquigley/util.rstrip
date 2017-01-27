'use strict';

const test = require('ava');
const rstrip = require('./index');

test('stripping newlines #1', t => {
	let s = 'line 1\n';
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #2', t => {
	let s = 'line 1\r';
	t.is(rstrip(s), 'line 1');
});

test('stripping newlines #3', t => {
	let s = 'line 1\r\n';
	t.is(rstrip(s), 'line 1');
});
