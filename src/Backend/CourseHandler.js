const { CourseService } = require('./Service');
const Enums = require('./Enums');

const getUniqueCourseGroupsByProgram = async programName => {
	const courseGroups = await getCourseGroupsByProgram(programName);
	let uniqueGroups = [];
	courseGroups.forEach(group => {
		if (group.name == Enums.CourseGroupEnum.FREE_RANGE) {
			group.acceptable.forEach(group => {
				if (!uniqueGroups.includes(group)) {
					uniqueGroups.push(group);
				}
			});
		} else {
			if (!uniqueGroups.includes(group.name)) {
				uniqueGroups.push(group.name);
			}
		}
	});
	return uniqueGroups;
};

const getCourseGroupsByProgram = async programName => {
	const courseGroups = await CourseService.getAllRequiredCourseGroups();
	const courseGroupsByProgram = courseGroups.filter(courseGroup => courseGroup.programName == programName)[0];
	return courseGroupsByProgram.courseGroups;
};

const getPrereqByCourseCode = async courseCode => {
	return await CourseService.getPrereqByCourseCode(courseCode);
};

const getCourseTitleByCourseCode = async courseCode => {
	try {
		return await CourseService.getCourseTitleByCourseCode(courseCode);
	} catch (e) {
		return null;
	}
};

module.exports = {
	getUniqueCourseGroupsByProgram,
	getCourseGroupsByProgram,
	getPrereqByCourseCode,
	getCourseTitleByCourseCode
};
