<script lang="ts">
import * as Echarts from "echarts";
import { onMounted, onUnmounted, ref, watch } from "vue";
export default {
	props: {
		options: Object,
		theme: {
			type: [Object, String],
			default: "",
		},
		open: {
			type: Boolean,
			default: false,
		},
		type: {
			type: Object,
			default: {
				renderer: "canvas",
			},
		},
	},
	setup(props, { emit }) {
		let dom = ref();
		let charts = ref();
		watch(
			() => props.options,
			() => {
				charts.value.setOption(props.options);
			},
			{
				deep: true,
			}
		);
		const onResize = function () {
			charts.value?.resize();
		};

		const init = function () {
			let _dom = dom.value;
			if (!props.open) {
				_dom.style.height = "150px";
				_dom.style.width = "300px";
			} else {
				_dom.style.height = "100%";
				_dom.style.width = "100%";
			}
			charts.value = Echarts.init(_dom, props.theme, props.type);
			charts.value.setOption(props.options);
			window.addEventListener("resize", onResize);
		};

		onMounted(() => {
			init();
		});
		onUnmounted(() => {
			window.removeEventListener("resize", onResize);
		});
		return {
			dom,
			charts,
		};
	},
};
</script>
<template>
	<div class="echats" ref="dom"></div>
</template>
