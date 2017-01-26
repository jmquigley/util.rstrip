module.exports = s => {
	return s.toString().replace(/\r\n$|\n$|\r$/, '');
};
