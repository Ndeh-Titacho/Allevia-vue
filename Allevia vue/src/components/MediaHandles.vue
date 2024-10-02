<script setup>
import facebook from "@/assets/facebook.svg";
import google from "@/assets/google.svg";
import linkedin from "@/assets/linkedin.svg";
</script>

<template>
	<div class="icons d-flex justify-content-center mt-md-2 mt-xs-3">
		<img :src="facebook" height="40" class="me-4 mediaIcons" alt="" />
		<img :src="google" height="40" class="me-4 mediaIcons" alt="" />
		<img :src="linkedin" height="40" class="mediaIcons" alt="" />
	</div>
</template>
