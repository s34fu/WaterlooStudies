<template>
    <div class="container">
		<h1>Course Catalog</h1>
		<div>
			<p>Enter subject name</p>
			<b-input-group size="sm">
				<b-form-input v-model="userSubject" placeholder="ex: Management Science" list="availCoursesList"></b-form-input> 
					<datalist id="availCoursesList">
						<option v-for="(data, index) in availSubjects" :key="index">{{ data.subjectCode }} - {{ data.subjectName }}</option>
					</datalist>
			</b-input-group>
			<b-button variant="success" @click="showSubjectTable()">Enter</b-button>
		</div>
	</div>
	
</template>

<script>
const { Subjects } = require('@/Backend/Database');
const { CourseHandler } = require('@/Backend');
export default {
	name: 'CourseCatalogPage',
	// all class variables
	data() {
		return {
			availSubjects: [],
			userSubject: ''
		};
	},
	// all methods to use
	methods: {
		showSubjectTable: async function(){
			const userSubjectCode = this.userSubject.split('-')[0].trim();
			// validate user subject
			if(!(userSubjectCode in Subjects)){
				alert(`${userSubjectCode} cannot be found`);
			}
			const courses = await CourseHandler.getCoursesBySubjectCode(userSubjectCode);
			console.log(courses);
		}
	},
	// detect variable changes
	watch: {
	},
	async created() {
		let subjects = [];
		for (const code in Subjects){
			subjects.push({
				'subjectCode': code,
				'subjectName': Subjects[code]	 
			});
		}
		this.availSubjects = subjects;
	}
};
</script>