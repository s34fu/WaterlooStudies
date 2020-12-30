<template>
	<div class="container">
		<p>Enter your course code</p>
		<b-form-input v-model="courseCode" placeholder="ex. MSCI 100"></b-form-input>
		<p>{{ courseCode }} - {{ courseName }}</p>
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
			courseName: ''
		};
	},
	watch: { 
		courseCode: async function(newVal) {
			if(newVal == ''){
				this.courseName = '';
				return;
			}
			const tempCourseName = await CourseHandler.getCourseNameByCourseCode(newVal); 
			if(tempCourseName){
				this.courseName = tempCourseName.name;
				const tempTree = await CourseHandler.getPrereqByCourseCode(newVal);
				if(tempTree) {
					this.tree = tempTree;
					this.showTree = true;
				}
			}else{
				this.courseName = 'course doesn\'t exist';
				this.showTree = false;
			}
		}
	}
};
</script>
