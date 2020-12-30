<template>
	<div>
		<nav class="navbar navbar-light navbar-bg">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">WaterlooStudies</router-link>
			</div>
		</nav>
		<div id="app">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
@import './custom.scss';
html, body {
	height: 100%;
	width: 100%;
}
body {
	background-color: $themeColor
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: center;
}
.navbar-bg {
	background-color: $header-footer-bgColor
}
</style>
