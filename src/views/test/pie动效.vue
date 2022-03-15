<template>
	<div class="content">
		<div class="box">
			<VCharts
				:options="getOption()"
				:type="initOptions"
				@init="init"
				ref="pie"
				open
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Border from "@c/border/border.vue";
import VCharts from "@c/charts/charts.vue";
import { onMounted, ref } from "vue";
export default {
	components: {
		Border,
		VCharts,
	},
	setup() {
		const initOptions = {
			renderer: "svg",
		};
		const pie = ref();
		const pieCharts = ref();
		const dataLen = ref();
		const getOption = function () {
			return {
				textStyle: {
					fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
				},
				title: {
					text: "Traffic Sources",
					left: "center",
				},
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b} : {c} ({d}%)",
				},
				legend: {
					show: true,
					orient: "vertical",
					left: "left",
					data: [
						"Direct",
						"Email",
						"Ad Networks",
						"Video Ads",
						"Search Engines",
					],
				},
				series: [
					{
						name: "Traffic Sources",
						type: "pie",
						radius: "55%",
						center: ["50%", "60%"],
						data: [
							{ value: 335, name: "Direct" },
							{ value: 310, name: "Email" },
							{ value: 234, name: "Ad Networks" },
							{ value: 135, name: "Video Ads" },
							{ value: 1548, name: "Search Engines" },
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: "rgba(0, 0, 0, 0.5)",
							},
						},
					},
				],
			};
		};
		let dataIndex = -1;
		const actionTimer = function (timer = 1000) {
			setInterval(() => {
				pieCharts.value.dispatchAction({
					type: "downplay",
					seriesIndex: 0,
					dataIndex,
				});
				dataIndex = (dataIndex + 1) % dataLen.value;
				pieCharts.value.dispatchAction({
					type: "highlight",
					seriesIndex: 0,
					dataIndex,
				});
				pieCharts.value.dispatchAction({
					type: "showTip",
					seriesIndex: 0,
					dataIndex,
				});
			}, timer);
		};
		const init = function () {
			pieCharts.value = pie.value.charts;
			dataLen.value = pie.value.options.series[0].data.length;
		};
		onMounted(() => {
			init();
			actionTimer(3000);
		});
		return { initOptions, getOption, pie };
	},
};
</script>

<style scoped lang="scss">
.content {
	display: flex;
	justify-content: center;
	.box {
		display: inline-block;
		position: relative;
		margin: 2em auto;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		box-shadow: 0 0 45px rgb(0 0 0 / 20%);
		padding: 1.5em 2em;
		min-width: calc(40vw + 4em);
		width: 834px;
		height: 350px;
	}
}
</style>
