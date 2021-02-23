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
			<b-button class="margin-top" variant="success" @click="showSubjectTable()">Enter</b-button>
		</div>
		<div class="margin-top">
			<b-table 
				striped 
				hover 
				selectable 
				:items="courseTableData" 
				:fields="courseTableFields" 
				@row-selected="onCourseTableRowSelected">
				<template #row(selected)="{ rowSelected }">
					<template v-if="rowSelected">
						<p>sdfdsfsdf</p>
						<span aria-hidden="true">&check;</span>
						<span class="sr-only">Selected</span>
					</template>
					<template v-else>
						<span aria-hidden="true">&nbsp;</span>
						<span class="sr-only">Not selected</span>
					</template>
				</template>
			</b-table>
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
			userSubject: '',
			courseTableFields: [
				{
					key: 'subjectName',
					label: 'Course Subject',
				},
				{
					key: 'subjectCode',
					label: 'Course Code',
				},
				{
					key: 'courseNumber',
					label: 'Course Number',
				},
				{
					key: 'description',
					label: 'Course Description',
				},
				{
					label: 'selected'
				}
			],
			courseTableData: []
		};
	},
	// all methods to use
	methods: {
		onCourseTableRowSelected: async function(items){
			console.log(items);
		},
		showSubjectTable: async function(){
			const userSubjectCode = this.userSubject.split('-')[0].trim();
			// validate user subject
			if(!(userSubjectCode in Subjects)){
				alert(`${userSubjectCode} cannot be found`);
			}
			const courseTableData = await CourseHandler.getCoursesBySubjectCode(userSubjectCode);
			console.log(courseTableData);
			this.courseTableData = courseTableData;
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

<style scoped>
.margin-top {
	margin-top: 1em;
}
</style>