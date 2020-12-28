<template>
	<div>
		<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">WaterlooStudies</router-link>
			</div>
		</nav>
		<div id="app" class="container router-view">
			<router-view />
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: center;
}

.router-view {
	margin-top: 1em;
}

</style>
