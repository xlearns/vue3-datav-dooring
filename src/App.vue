<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
	document.documentElement.oncontextmenu = (ev) => ev.preventDefault();
});
</script>
<template>
	<RouterView />
</template>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
}

#app {
	height: 100vh;
	width: 100vw;
}
.icon {
	width: 100%;
	height: 100%;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
