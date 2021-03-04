const { TermService } = require('./Service');

const getAllAvailableTerms = async () => {
	return await TermService.getAllAvailableTerms();
};

const getCurrentTerm = async () => {
	try {
		const result = await TermService.getCurrentTerm();
		return result;
	}catch(e){
		console.error(e);
		return null;
	}
};

const getPast5AcademicYearTerms = async () => {
	return await TermService.getPast5AcademicYearTerms();
};

const getCoursesByTermCodeAndSubjectCode = async (termCode, subjectCode) => {
	try {
		const courses = await TermService.getCoursesByTermCodeAndSubjectCode(termCode, subjectCode);
		courses.sort((a,b) => parseInt(a.catalogNumber) - parseInt(b.catalogNumber));
		return courses;
	} catch (e) {
		console.error(e);
		return null;
	}
};

module.exports = {
	getCurrentTerm,
	getAllAvailableTerms,
	getPast5AcademicYearTerms,
	getCoursesByTermCodeAndSubjectCode,
};