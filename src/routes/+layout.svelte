<script lang="ts" setup>
	import '../app.css';
	import Navbar from '$components/navbar.svelte';
</script>

<div class="bg-gradient-to-r from-blue-200 from-25% via-gray-50 via-50% to-blue-300/80 to-80%">
	<Navbar />
	<div class="relative h-full no-scrollbar overflow-auto w-full">
		<main>
			<slot />
		</main>
	</div>
</div>
