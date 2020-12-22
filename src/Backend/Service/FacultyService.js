const { Faculties } = require('../Database');

const getFaculties = async() => {
	return new Promise((resolve) => {
		resolve(Faculties);
	});
};

module.exports = {
	getFaculties
};