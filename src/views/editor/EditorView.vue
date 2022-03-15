<template>
	<div class="editor-container">
		<header class="editor-header">
			<ToolBar />
		</header>
		<main class="editor-main">
			<PaletteBar />
			<div class="editor-content">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import ToolBar from "@/components/editor-tool-bar/ToolBar.vue";
import PaletteBar from "@/components/editor-palette/PaletteBar.vue";
export default {
	name: "editorView",
	components: { ToolBar, PaletteBar },
	setup() {
		return {};
	},
};
</script>

<style scoped lang="scss">
.editor-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	visibility: visible;
	z-index: 1;
	background: #121212;
	.editor-header {
		width: 100%;
		height: 42px;
		line-height: 40px;
		background: #1b1b20;
		color: #b6b8cc;
		border-bottom: 2px solid #000;
		z-index: 2;
		box-sizing: border-box;
		position: relative;
	}
	.editor-main {
		top: 0;
		display: flex;
		flex: 1;
		justify-content: space-between;
	}
}
</style>
