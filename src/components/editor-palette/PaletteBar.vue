<template>
	<div class="editor-palette-bar" ref="paletteRef">
		<div class="root-content">
			<div
				class="component-type-button"
				v-for="(v, i) in presetComponentsList"
				:key="'type' + i"
				@click="open(v)"
			>
				<V-Icon :name="v.icon" class="iconComponent"></V-Icon>
			</div>
		</div>
		<div class="compponent-support-list">
			asd
			<a href="" v-for="(p, i) in list" :key="i">{{ p.name }}</a>
		</div>
	</div>
</template>

<script lang="ts">
import { presetComponents } from "@/assets/components/presetComponents";
import { ref } from "vue";
export default {
	setup() {
		const presetComponentsList: any = presetComponents;
		const list = ref([]);
		const open = function (val: any) {
			list.value = Object.values(val.children);
		};
		return {
			open,
			list,
			presetComponentsList,
		};
	},
};
</script>

<style scoped lang="scss">
.editor-palette-bar {
	width: 48px;
	height: 100%;
	position: relative;
	.root-content {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #1b1b20;
		z-index: 10;
		.component-type-button {
			width: 48px;
			height: 48px;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 25%;
			position: relative;
			.iconComponent {
				width: 100%;
				height: 100%;
			}
			&:hover {
				cursor: pointer;
				background: rgba(111, 111, 245, 0.2);
			}
		}
	}
	.compponent-support-list {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 256px;
		z-index: 8;
		// background: #1b1b20;
		background: red;
		display: flex;
		flex-direction: column;
		padding: 16px;
		box-sizing: border-box;
		overflow-y: auto;
		transition: all 0.2s ease;
		transform: translateX(-25%);
		pointer-events: auto;
		transform: translateX(102%);
	}
}
</style>
