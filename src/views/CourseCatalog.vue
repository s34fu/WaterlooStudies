<template>
    <div class="container">
		<h1>Course Catalog</h1>
		<div>
		<p>Course Subject</p>
		<b-input-group size="sm">
					<b-form-input v-model="userCourse" placeholder="Course Subject" list="availCoursesList"></b-form-input> 
					<datalist id="availCoursesList">
						<option v-for="(data, index) in availSubjects" :key="index">{{data.subjectName}}</option>
					</datalist>

				</b-input-group>
				
		</div>
	</div>
	
</template>

<script>

const { CacheService } = require('@/Backend/Service');
const { Subjects } = require('@/Backend/Database');
export default {
	name: 'CourseCatalogPage',
	// all class variables
	data() {
		return {
			courseCode: '',

			userCourse: '',
			availSubjects: [],
		};
	},
	// all methods to use
	methods: {
	
	
	},
	// detect variable changes
	watch: {
		courseCode: function(){

		},
		userCourse: function() {
			CacheService.set('userCourse', this.userCourse);
		},
		
		
		
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