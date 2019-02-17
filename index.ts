export function rstrip(s: string | Buffer): string {
	if (s instanceof Buffer) {
		s = s.toString();
	}

	return s.replace(/\r\n$|\n$|\r$/, "");
}
