const { CourseService } = require('./Service');

const getRequiredCourseGroupsByProgram = async(programName) => {
    const courseGroups = await CourseService.getAllRequiredCourseGroups();
    const courseGroupsByProgram = courseGroups.filter(courseGroup => courseGroup.programName == programName);
    return courseGroupsByProgram[0];
};

module.exports = {
    getRequiredCourseGroupsByProgram
};