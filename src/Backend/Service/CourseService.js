const Enums = require('../Enums');

const getAllRequiredCourseGroups = async() => {
    return new Promise((resolve) => {
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
            }
        ]);
    });
};

module.exports = {
    getAllRequiredCourseGroups
};