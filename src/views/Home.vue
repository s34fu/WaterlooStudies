<template>
	<div>
		<h3>WaterlooStudies streamlines the Studies at Waterloo!</h3>
		<div class="row">
			<div class="col-sm-4">
				<router-link to="/credit_tracker" class="card" style="border: none">
					<div class="card-body">
						<p>Credit Tracker</p>
						<font-awesome-icon icon="calculator" class="fa-icon" />
					</div>
				</router-link>
			</div>
			<div class="col-sm-4">
				<router-link to="/course_advisor" class="card" style="border: none">
					<div class="card-body">
						<p> Course Advisor </p>
						<font-awesome-icon icon="lightbulb" class="fa-icon" />
					</div>
				</router-link>
			</div>
			<div class="col-sm-4">
				<router-link to="/course_prereq" class="card" style="border: none">
					<div class="card-body">
						<p> Course Prerequisite </p>
						<font-awesome-icon icon="book-reader" class="fa-icon"/>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
};
</script>

<style scoped>
.fa-icon {
	font-size: 3em;
}
</style>
