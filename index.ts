export function rstrip(s: string): string {
	return s.toString().replace(/\r\n$|\n$|\r$/, '');
};
