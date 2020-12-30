<template>
    <router-link :to="'/'+route" class="card" style="border: none">
        <div class="card-body" v-b-tooltip.hover :title="toolTip">
            <font-awesome-icon :icon="faIcon" class="fa-icon" />
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'Menu',
	props: {
		route: {
			required: true,
			type: String
		},
		toolTip: {
			type: String,
			default: 'default display name'
		},
		faIcon: {
			required: true,
			type: String
		}
	}
};
</script>

<style lang='scss' scoped>
@import '../custom.scss';
.card-body {
    background-color: $themeColor
}
.fa-icon {
	font-size: 3em;
}
</style>