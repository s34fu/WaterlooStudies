const { RequiredCoursesByFaculty, CoursePrereq, Courses } = require('../Database');

const getAllRequiredCourseGroups = async () => {
	return new Promise(resolve => resolve(RequiredCoursesByFaculty));
};

const getPrereqByCourseCode = async(courseCode) => {
	let obj = {};
	if(courseCode in CoursePrereq){
		const course = CoursePrereq[courseCode];
		// copy only the text part
		obj.text = course.text;
		if(course.children){
			// deal with children part
			course.children.forEach(async c => {
				let subChildren = await getPrereqByCourseCode(c.text.name);
				subChildren = subChildren == null ? c : subChildren;
				if(obj.children){
					obj.children.push(subChildren);
				}else{
					obj.children = [subChildren];
				}
			});
		}
	}else{
		return null;
	}
	return new Promise(resolve => resolve(obj));
};

const getCourseTitleByCourseCode = async(courseCode) => {
	return new Promise(resolve => resolve(Courses[courseCode]));
};

module.exports = {
	getAllRequiredCourseGroups,
	getPrereqByCourseCode,
	getCourseTitleByCourseCode
};
