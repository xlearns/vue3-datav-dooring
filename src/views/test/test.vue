<template>
	<div class="content">
		<div class="box">
			<Border lineColor="transparent" />
		</div>
	</div>
</template>

<script lang="ts">
import Border from "@c/border/border.vue";
import { onMounted, ref } from "vue";
export default {
	components: {
		Border,
	},
	setup() {
		return {};
	},
};
</script>

<style scoped lang="scss">
.content {
	display: flex;
	justify-content: center;
	background: black;
	height: 100vh;
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
