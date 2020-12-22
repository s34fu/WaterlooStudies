<template>
	<div>
		<b-form-input v-model="courseCode" placeholder="ex. MSCI 100"></b-form-input>
		<p v-if="showCourseName">{{ courseCode }} - {{ courseName }}</p>
		<div v-if="showTree">
			<TreeGraph :id="1" :tree="tree"></TreeGraph>
		</div>
	</div>
</template>

<script>
import TreeGraph from '@/components/TreeGraph.vue';
const { CourseHandler } = require('../Backend');
export default {
	components: {
		TreeGraph
	},
	data() {
		return {
			tree: { text: { name: 'dummy' } },
			courseCode: '',
			showTree: false,
			courseName: '',
			showCourseName: false
		};
	},
	watch: { 
		courseCode: async function() {
			const tempTree = await CourseHandler.getPrereqByCourseCode(this.courseCode);
			if(tempTree) {
				this.tree = tempTree;
				this.showTree = true;
			}else{
				this.showTree = false;
			}
			const tempCourseName = await CourseHandler.getCourseNameByCourseCode(this.courseCode); 
			if(tempCourseName){
				this.courseName = tempCourseName.name;
				this.showCourseName = true;
			}else{
				this.showCourseName = false;
			}
		}
	}
};
</script>
