const { UW_API_KEY, UW_API_PATH } = require('../src/Backend/Enums');
const { Courses } = require('../src/Backend/Database');
const axios = require('axios');

(async () => {
	const totalRecords = Object.keys(Courses).length;
	let recordsProcessed = 0;
	let rtn = {};
	for(const obj in Courses){
		const category = obj.split(' ')[0];
		const number = obj.split(' ')[1];
		const courseKey = category + ' ' + number;
		console.log('processing..', courseKey);
		const header = {
			params: { 
				key: UW_API_KEY,
			}
		};
		try {
			const response = await axios.get(`${UW_API_PATH}/courses/${category}/${number}.json`, header);
			if(response.data.data){
				const { prerequisites } = response.data.data;
				let children = [];
				if(prerequisites){
					const split = prerequisites.split(';').map(s => s.trim());
					split.forEach(s => {
						children.push({
							text: { name: s }
						});
					});
				}
				if(!rtn[courseKey]) rtn[courseKey] = {};
				rtn[courseKey].text = { name: courseKey };
				if(children.length > 0) rtn[courseKey].children = children; 
			}else{
				console.error(response);
				throw 'failed to fetch data from response';
			}
			recordsProcessed++;
			console.log(`finished. ${totalRecords - recordsProcessed} remaining.`,);
		} catch(error){
			console.error(error);
		}
	}
	console.log(rtn);
})();