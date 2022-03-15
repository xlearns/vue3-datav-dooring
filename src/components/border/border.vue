<template>
	<div class="vdata-border-flybox" ref="flybox">
		<svg :width:="width" :height:="height" viewBox="0 0 2179 1024">
			<path
				d="M94.586842 11.252747l17.910623 29.470945h2029.249172V52.512821H41.260073v55.836131l-27.610491 20.052396V993.992674H2.929465L0 138.315018V11.657846l1.72167-0.003751L1.725421 11.252747z"
				fill="#02AAE2"
				p-id="1532"
			></path>
			<path
				d="M2176.067516 3.214535V315.076923L2164.278388 330.080586l-0.003751-315.076923H1762.930403l15.003663-11.789128z"
				fill="#02AAE2"
				p-id="1533"
			></path>
			<path
				d="M2050.115516 1022.773451l-17.910622-29.470946L3.750916 993.992674v-11.789128l2099.69137-0.690169v-55.836132l27.610491-20.052395V48.203018H2141.772894l2.929465 847.508161v126.657173l-1.72167 0.003751v0.401348z"
				fill="#02AAE2"
				p-id="1534"
			></path>

			<circle :r="starLength" cx="0" cy="0" fill="#235fa7" v-if="autoplay">
				<animateMotion
					path="M2050.115516 1022.773451l-17.910622-29.470946L3.750916 993.992674v-11.789128l2099.69137-0.690169v-55.836132l27.610491-20.052395V48.203018H2141.772894l2.929465 847.508161v126.657173l-1.72167 0.003751v0.401348z"
					:dur="dur"
					repeatCount="indefinite"
					rotate="auto"
				></animateMotion>
			</circle>
			<circle :r="starLength" cx="0" cy="0" fill="#235fa7" v-if="autoplay">
				<animateMotion
					path="M94.586842 11.252747l17.910623 29.470945h2029.249172V52.512821H41.260073v55.836131l-27.610491 20.052396V993.992674H2.929465L0 138.315018V11.657846l1.72167-0.003751L1.725421 11.252747z"
					:dur="dur"
					repeatCount="indefinite"
					rotate="auto"
				></animateMotion>
			</circle>
			<image
				xlink:href="./../../assets/st.png"
				width="720"
				height="720"
				x="-360"
				y="-360"
			>
				<animateMotion
					path="M94.586842 11.252747l17.910623 29.470945h2029.249172V52.512821H41.260073v55.836131l-27.610491 20.052396V993.992674H2.929465L0 138.315018V11.657846l1.72167-0.003751L1.725421 11.252747z"
					:dur="dur"
					repeatCount="indefinite"
					rotate="auto"
				></animateMotion>
			</image>
			<image
				xlink:href="./../../assets/st.png"
				width="720"
				height="720"
				x="-360"
				y="-360"
			>
				<animateMotion
					path="M2050.115516 1022.773451l-17.910622-29.470946L3.750916 993.992674v-11.789128l2099.69137-0.690169v-55.836132l27.610491-20.052395V48.203018H2141.772894l2.929465 847.508161v126.657173l-1.72167 0.003751v0.401348z"
					:dur="dur"
					repeatCount="indefinite"
					rotate="auto"
				></animateMotion>
			</image>
		</svg>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script type="ts">
import { computed, onMounted, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
	name: "VFlyBox",
	props: {
		autoplay:{
			type:Boolean,
			default:false
		},
		duration: {
			type: [Number, String],
			default: 3,
		},
		lineColor: {
			type: String,
			default: "#235fa7",
		},
		starColor: {
			type: String,
			default: "#4fd2dd",
		},
		starLength: {
			type: [Number, String],
			default: 30,
		},
	},
	setup(props) {
		const uuid = uuidv4();
		// svg适配需要动态获取dom，然后根据dom去计算path
		const width = ref(0);
		const height = ref(0);
		const flybox = ref();
		const borderid = `borderid-${uuid}`;
		const maskid = `mask-${uuid}`
		const radialGradientId = `radialGradient-${uuid}`
		const path = computed(
			() =>
				`M5 5 L${width.value - 5} 5 L${width.value - 5} ${
					height.value - 5
				} L5 ${height.value - 5} Z`
		);
		const dur = computed(() => `${props.duration}s`);
		const init = function () {
			let dom = flybox.value;
			width.value = dom.clientWidth;
			height.value = dom.clientHeight;
		};
		onMounted(() => {
			init();
		});
		return {
			radialGradientId,
			maskid,
			borderid,
			dur,
			flybox,
			width,
			height,
			path,
		};
	},
};
</script>

<style scoped lang="scss">
.vdata-border-flybox {
	position: relative;
	width: 100%;
	height: 100%;
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.content {
		width: 100%;
		height: 100%;
		padding: 5px;
		box-sizing: border-box;
	}
}
</style>
