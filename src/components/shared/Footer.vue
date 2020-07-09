<template>
	<v-footer app>
		<span>&copy; {{ new Date().getFullYear() }}</span>
	</v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
}
</script>