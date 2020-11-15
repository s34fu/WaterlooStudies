const { FacultyService } = require('./Service');

const getFaculties = async() => {
    return await FacultyService.getFaculties();
};

module.exports = {
    getFaculties
};