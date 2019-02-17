"use strict";

import {rstrip} from "../index";

test("stripping newlines #1", () => {
	const s = "line 1\n";
	expect(rstrip(s)).toBe("line 1");
});

test("stripping newlines #2", () => {
	const s = "line 1\r";
	expect(rstrip(s)).toBe("line 1");
});

test("stripping newlines #3", () => {
	const s = "line 1\r\n";
	expect(rstrip(s)).toBe("line 1");
});

test("stripping newlines #1 (Buffer)", () => {
	const s: Buffer = new Buffer.from("line 1\n");
	expect(rstrip(s)).toBe("line 1");
});

test("stripping newlines #2 (Buffer)", () => {
	const s: Buffer = new Buffer.from("line 1\r");
	expect(rstrip(s)).toBe("line 1");
});

test("stripping newlines #3 (Buffer)", () => {
	const s: Buffer = new Buffer.from("line 1\r\n");
	expect(rstrip(s)).toBe("line 1");
});
