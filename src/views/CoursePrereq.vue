<template>
	<div class="container">
		<p>Enter your course code</p>
		<b-form-input v-model="courseCode" placeholder="ex. MSCI 100" style="text-transform: uppercase"></b-form-input>
		<p>{{ capitalize(courseCode) }} - {{ courseTitle }}</p>
		<div v-if="showTree">
			<TreeGraph :id="1" :tree="tree"></TreeGraph>
		</div>
	</div>
</template>

<script>
import TreeGraph from '@/components/TreeGraph.vue';
const { CourseHandler } = require('@/Backend');
const { CacheService } = require('@/Backend/Service');
export default {
	components: {
		TreeGraph
	},
	data() {
		return {
			tree: { text: { name: 'dummy' } },
			courseCode: '',
			showTree: false,
			courseTitle: ''
		};
	},
	methods: {
		capitalize: function(val){
			if(!val) return;
			let rtn = '';
			for(const c of val) rtn += c.toUpperCase();
			return rtn;
		},
		initCache: function(){
			// init courseTitle
			const courseTitle = CacheService.get('courseTitle');
			if(courseTitle) this.courseTitle = courseTitle;
			// init courseCode
			const courseCode = CacheService.get('courseCode');
			if(courseCode) this.courseCode = courseCode;
		}
	},
	watch: { 
		courseCode: async function(newVal) {
			newVal = this.capitalize(newVal);
			if(!newVal){
				this.courseTitle = '';
				return;
			}
			const tempCourseTitle = await CourseHandler.getCourseTitleByCourseCode(newVal); 
			if(tempCourseTitle){
				this.courseTitle = tempCourseTitle.title;
				const tempTree = await CourseHandler.getPrereqByCourseCode(newVal);
				if(tempTree) {
					this.tree = tempTree;
					this.showTree = true;
				}
			}else{
				this.courseTitle = 'course doesn\'t exist';
				this.showTree = false;
			}
			CacheService.set('courseTitle', this.courseTitle);
			CacheService.set('courseCode', this.courseCode);
		}
	},
	created() {
		this.initCache();
	}
};
</script>
