<template>
  <div>
	<TreeGraph :id="1" :tree="tree"></TreeGraph>
  </div>
</template>

<script>
import TreeGraph from '@/components/TreeGraph.vue';
export default {
	components: {
		TreeGraph
	},
	data() {
		return {
			tree: {
				text: { name: 'Parent node' },
				children: [
					{
						text: { name: 'First child' },
						children: [
							{
								text: {
									name: 'parent'
								}
							}
						]
					},
					{
						text: { name: 'Second child' }
					}
				]
			}
		};
	}
};
</script>
