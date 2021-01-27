const ProgramEnum = {
	AE: 'Architectural Engineering',
	BME: 'Biomedical Engineering',
	CHE: 'Chemical Engineering',
	CIVE: 'Civil Engineering',
	CE: 'Computer Engineering',
	ECE: 'Electrical Engineering',
	ENVE: 'Environmental Engineering',
	GEOE: 'Geological Engineering',
	MGTE: 'Management Engineering',
	ME: 'Mechanical Engineering',
	MTE: 'Mechatronics Engineering',
	NE: 'Nanotechnology Engineering',
	SE: 'Software Engineering',
	SYDE: 'System Design Engineering'
};

const FacultyEnum = {
	ENG: 'Engineering'
};

const CourseGroupEnum = {
	LIST_1: 'List 1',
	CSE_LIST_A: 'CSE List A',
	CSE_LIST_B: 'CSE List B',
	CSE_LIST_C: 'CSE List C',
	CSE_LIST_D: 'CSE List D',
	TECH_LIST_A: 'TECH List A',
	TECH_LIST_B: 'TECH List B',
	TECH_LIST_C: 'TECH List C',
	TECH_LIST_D: 'TECH List D',
	TE: 'Technical Electives',
	NSE: 'Natural Science Electives',
	CSLIST: 'CS Courses',
	ECELIST: 'ECE Courses',
	SCE: 'Science Electives',
	LE: 'Linkage Electives',
	WKRPT: 'Work-term Reports',
	PD: 'Professional Development Courses',
	CEAB: 'Canadian Engineering Accreditation Board Requirements',
	ETHICS: 'Ethics Requirement',
	FREE_ELEC: 'Free Elective',
	FREE_RANGE: 'Range of Groups'
};

const AcademicYearsEnum = {
	1617: '2016-2017'
};

const UW_API_PATH = 'https://api.uwaterloo.ca/v2';
const UW_API_KEY = '80b0fad48576cfe67a4de474ebeea851';

module.exports = {
	ProgramEnum,
	FacultyEnum,
	CourseGroupEnum,
	UW_API_PATH,
	UW_API_KEY,
	AcademicYearsEnum
};