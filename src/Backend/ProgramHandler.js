const { ProgramService } = require('./Service');

const getProgramsByFaculty = async(faculty) => {
	const programs = await ProgramService.getPrograms();
	return programs.filter(program => program.faculty == faculty);
};

module.exports = {
	getProgramsByFaculty
};