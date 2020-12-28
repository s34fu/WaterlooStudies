<template>
	<div class="home">
		<HelloWorld msg="Hello World" />
		<router-link to="/credit_tracker" class="card" style="width: 18rem;">
			<div class="card-body">
				<p>Credit Tracker</p>
				<font-awesome-icon icon="calculator" />
			</div>
		</router-link>
		<router-link to="/course_advisor" class="card" style="width: 18rem;">
			<div class="card-body">
				<p> Course Advisor </p>
				<font-awesome-icon icon="pen" />
			</div>
		</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld
	}
};
</script>
