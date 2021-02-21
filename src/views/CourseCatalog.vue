<template>
    <div class="container">
		<h1>Course Catalog</h1>
		<div>
		<p>Course Subject</p>
		<b-input-group size="sm">
					<b-form-input v-model="userCourse" placeholder="Course Subject" list="availCoursesList"></b-form-input> 
					<datalist id="availCoursesList">
						<option v-for="(data, index) in availCourses" :key="index">{{ data.code }} - {{ data.title }}</option>
					</datalist>

				</b-input-group>
				
		</div>
	</div>
	
</template>

<script>
const {  CourseHandler } = require('@/Backend');
const { CacheService } = require('@/Backend/Service');
export default {
	name: 'CourseCatalogPage',
	// all class variables
	data() {
		return {
			courseCode: '',

			userCourse: '',
			availCourses: [],
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
		
		this.availCourses = await CourseHandler.getAllCourses();
		this.initCache();
	}
	
};
</script>