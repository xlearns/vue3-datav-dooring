<template>
	<div class="editor-tools-bar">top</div>
</template>

<script lang="ts">
export default {
	setup() {
		return {};
	},
};
</script>

<style scoped lang="scss">
.editor-tools-bar {
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	width: 600px;
	background: rgba(0, 0, 0, 0.2);
	transform: translateX(-50%);
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>
