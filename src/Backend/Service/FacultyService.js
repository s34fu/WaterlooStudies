const Enums = require('../Enums');

const getFaculties = async() => {
    return new Promise((resolve) => {
        resolve([
            Enums.FacultyEnum.ENG
        ]);
    });
};

module.exports = {
    getFaculties
};