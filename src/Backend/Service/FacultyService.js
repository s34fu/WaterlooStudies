const getFaculties = async() => {
    return new Promise((resolve) => {
        resolve([
            "Math",
            "Engineering",
            "Arts"
        ]);
    });
};

module.exports = {
    getFaculties
}