<template>
	<div class="vdata-border-flybox" ref="flybox">
		<svg :width:="width" :height:="height">
			<defs>
				<path :id="borderid" fill="none" :d="path" />
				<radialGradient
					:id="radialGradientId"
					r="50%"
					cx="50%"
					cy="50%"
					fx="100%"
					fy="50%"
				>
					<stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
					<stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
				</radialGradient>
				<mask :id="maskid">
					<circle
						:r="starLength"
						cx="0"
						cy="0"
						:fill="`url(#${radialGradientId})`"
					>
						<animateMotion
							:path="path"
							:dur="dur"
							repeatCount="indefinite"
							rotate="auto"
						></animateMotion>
					</circle>
				</mask>
			</defs>
			<!-- 背景 -->
			<use :href="`#${borderid}`" stroke-width="1" :stroke="lineColor"></use>
			<!-- 实际 -->
			<use
				:href="`#${borderid}`"
				stroke-width="3"
				:stroke="starColor"
				:mask="`url(#${maskid})`"
			></use>
		</svg>
		<img
			:style="{ width: `${width}px`, height: `${height}px` }"
			src="data:img/png;base64,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cgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADALCIHADCLyAEAzCJyAACziBwAwCwiBwAwi8gBAMwicgAAs6qLDiyJfnyYXzMAwJJq6eoF0Y/f4zcLALCE5UoAgFlEDgBgFpEDAJi1wK8WAGDJ4hWjK+LDIXIAAFMu/sDyIRH5mrBcCQCwjMgBAMwicgAAs4gcAMAsIgcAMIvIAQDMInIAALOIHADArLf2YnAnIn4jPTVuHfwMALBebIABfOawPfkblvYtzopceeWNEokZP+fgxdOvQx4BrEez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"
		/>
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
			default: 50,
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
		const rect2path = function(x, y, width, height, rx, ry) {
          /*
          * rx 和 ry 的规则是：
          * 1. 如果其中一个设置为 0 则圆角不生效
          * 2. 如果有一个没有设置则取值为另一个
          */
          rx = rx || ry || 0;
          ry = ry || rx || 0;
          //非数值单位计算，如当宽度像100%则移除
          if (isNaN(x - y + width - height + rx - ry)) return;
          rx = rx > width / 2 ? width / 2 : rx;
          ry = ry > height / 2 ? height / 2 : ry;
          //如果其中一个设置为 0 则圆角不生效
          if( 0 == rx || 0 == ry){
          // var path =
          // 'M' + x + ' ' + y +
          // 'H' + (x + width) + 不推荐用绝对路径，相对路径节省代码量
          // 'V' + (y + height) +
          // 'H' + x +
          // 'z';
          var path =
          'M' + x + ' ' + y +
          'h' + width +
          'v' + height +
          'h' + -width +
          'z';
} else{
 var path =
    'M' + x + ' ' + (y+ry) +
    'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ( -ry) +
    'h' + (width - rx - rx) +
    'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ry +
    'v' + (height - ry -ry) +
    'a' + rx + ' ' + ry + ' 0 0 1 ' + ( -rx) + ' ' + ry +
    'h' + ( rx + rx -width) +
    'a' + rx + ' ' + ry + ' 0 0 1 ' + ( -rx) + ' ' + ( -ry) +
    'z';
}
   return path;
}
		const path = computed(
			() =>{
					return rect2path(0,0,width.value,height.value,15,15)
			}
		);
		const dur = computed(() => `${props.duration}s`);
		const init = function () {
			let dom = flybox.value;
			width.value = dom.clientWidth;
			height.value = dom.clientHeight;
		};
		const resize = function(){

		}
		onMounted(() => {
			init();
			window.addEventListener('resize',resize)
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
