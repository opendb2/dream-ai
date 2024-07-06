<template>
	<div class="cmp-nav">
		<div class="cmp-nav-center"><img class="nav-logo" src='../assets/logo.png'/>DreamStory</div>
		<div class="cmp-nav-right">
			<div>Create</div>
			<div>Chat</div>
			<div>My Dreams</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style>
	.nav-logo {
		width: 48px;
		height: 48px;
	}
	.cmp-nav {
		color: white;
		position: relative;
		background-color: #1E1E1E;
		height: 132px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cmp-nav-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cmp-nav-right {
		position: absolute;
		width: 330px;
		right: 0;
		display: flex;
		justify-content: center;
		div {
			flex: 1;
		}
	}
</style>