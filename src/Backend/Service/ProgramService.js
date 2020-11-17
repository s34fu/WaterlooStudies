const Enums = require('../Enums');

const getPrograms = async() => {
	return new Promise((resolve) => {
		resolve([
			{
				faculty: Enums.FacultyEnum.ENG,
				name: Enums.ProgramEnum.MGTE
			},
			{
				faculty: Enums.FacultyEnum.ENG,
				name: Enums.ProgramEnum.CHE
			}
		]);
	});
};

module.exports = {
	getPrograms
};