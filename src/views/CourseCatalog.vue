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
				ref="courseTable"
				@row-clicked="onCourseTableRowClicked">
				<template #cell(favorite)="{ rowSelected }">
					<template v-if="rowSelected">
						<span aria-hidden="true">
							<font-awesome-icon icon="star" class="favoriteIcon" />
						</span>
						<span class="sr-only">favorite</span>
					</template>
					<template v-else>
						<span aria-hidden="true">&nbsp;</span>
						<span class="sr-only">Not favorite</span>
					</template>
				</template>
			</b-table>
		</div>
	</div>
	
</template>

<script>
const { Subjects } = require('@/Backend/Database');
const { CourseHandler } = require('@/Backend');
const { CacheService } = require('@/Backend/Service');
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
					label: 'favorite',
					key: 'favorite'
				}
			],
			courseTableData: [],
			selectedCourses: []
		};
	},
	// all methods to use
	methods: {
		onCourseTableRowClicked: async function(item, _, event){
			const index = this.selectedCourses.findIndex(s => s.courseNumber == item.courseNumber && s.subjectCode == item.subjectCode);
			// if parent is false, it means we are "selecting"
			if(event.target.parentElement.ariaSelected === 'false' && index <= -1){
				// add item to selected courses
				this.selectedCourses.push(item);
			}else{
				// remove the item from selected courses
				this.selectedCourses.splice(index, 1);
			}
			CacheService.set('courseCatalogSelected', JSON.stringify(this.selectedCourses));
		},
		showSubjectTable: async function(){
			const userSubjectCode = this.userSubject.split('-')[0].trim();
			// validate user subject
			if(!(userSubjectCode in Subjects)){
				alert(`${userSubjectCode} cannot be found`);
			}
			this.courseTableData = await CourseHandler.getCoursesBySubjectCode(userSubjectCode);
			this.initFavoritedCourses();
		},
		// defect: cannot dynamically add to favorite on new page load 
		initFavoritedCourses: async function(){
			this.selectedCourses.forEach(course => {
				this.courseTableData.forEach((data, index) => {
					if(data.courseNumber == course.courseNumber && data.subjectCode == course.subjectCode){
						console.log(index);
						this.$refs.courseTable.selectRow(index);
					}
				});
			});
		},
		initCache: async function(){
			const userSelectedCourses = CacheService.get('courseCatalogSelected');
			if(userSelectedCourses) this.selectedCourses = JSON.parse(userSelectedCourses);
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
		this.initCache();
	}
};
</script>

<style scoped>
.margin-top {
	margin-top: 1em;
}
.favoriteIcon {
	color:#ffff17;
}
</style>