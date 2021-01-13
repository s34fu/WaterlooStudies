const Enums = require('../Enums');

module.exports = [
	{
		programName: Enums.ProgramEnum.MGTE,
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.LIST_1,
				total: 6
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
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
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_B,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 2,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			}
		]
	},
	{
		programName: Enums.ProgramEnum.CIVE,
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 1 //max4
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_C,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_B,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_D,
				total: 1
			},
		]
	},
	{
		programName: Enums.ProgramEnum.CE,
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},				
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},		
			{
				name: Enums.CourseGroupEnum.NSE,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.ETHICS,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 8,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B,
					Enums.CourseGroupEnum.TECH_LIST_C,
					Enums.CourseGroupEnum.TECH_LIST_D
				]
			},	
			

		]
	},
	{
		programName: Enums.ProgramEnum.ME,
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_B,
				total: 1
			},					
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.FREE_ELEC,
				total: 1
			}
		]
	}
];
