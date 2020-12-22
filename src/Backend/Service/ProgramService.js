const { Programs } = require('../Database');

const getPrograms = async() => {
	return new Promise((resolve) => {
		resolve(Programs);
	});
};

module.exports = {
	getPrograms
};