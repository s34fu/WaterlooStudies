const Enums = require('../Enums');

const getAllRequiredCourseGroups = async () => {
	return new Promise(resolve => {
		resolve([
			{
				programName: Enums.ProgramEnum.MGTE,
				courseGroups: [
					{
						name: Enums.CourseGroupEnum.LIST_1,
						total: 6
					},
					{
						name: Enums.CourseGroupEnum.LIST_A,
						total: 1
					},
					{
						name: Enums.CourseGroupEnum.FREE_ELEC,
						total: 2
					}
				]
			},
			{
				programName: Enums.ProgramEnum.CHE,
				courseGroups: [
					{
						name: Enums.CourseGroupEnum.LIST_A,
						total: 1
					},
					{
						name: Enums.CourseGroupEnum.LIST_B,
						total: 1
					},
					{
						name: Enums.CourseGroupEnum.LIST_C,
						total: 2
					},
					{
						name: Enums.CourseGroupEnum.FREE_RANGE,
						total: 2,
						acceptable: [
							Enums.CourseGroupEnum.LIST_A,
							Enums.CourseGroupEnum.LIST_C,
							Enums.CourseGroupEnum.LIST_D
						]
					}
				]
			}
		]);
	});
};

module.exports = {
	getAllRequiredCourseGroups
};
