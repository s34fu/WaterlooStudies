const fs = require('fs');

fs.readFile('../WaterlooStudies/src/Backend/Database/Courses.js', 'utf8', (err, data) => {
	if (err) throw err;
	const parsedData = JSON.parse(data);
	// console.log(parsedData);
	const set = new Set();
	for(const obj in parsedData){
		const category = obj.split(' ')[0];
		// const number = obj.split(' ')[1];
		set.add(category);
	}
	console.log(set);
});