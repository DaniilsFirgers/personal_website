<script lang="ts" setup>
	let selectedMyStory = true;

	function onSelectAboutMePart(state: boolean) {
		selectedMyStory = state;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div />
	<div id="home" class="pt-16 h-[575 px] w-screen flex justify-center gap-8">
		<div class="image-container">
			<img
				src="graduation.png"
				alt="it's me"
				height="344px"
				width="224px"
				class="saturate-50 z-10 highlighted-graduation-image"
			/>
		</div>
		<div class="relative">
			<div class="flex flex-col items-start">
				<h1 class="text-9xl text-blue-400">Daniils</h1>
				<h1 class="text-9xl text-gray-400">Firgers</h1>
			</div>
			<div class="bg-blue-100 p-5 w-80 h-40 absolute bottom-10 right-0 backdrop-blur-sm">
				<h1 class="daniils-card text-center pb-2 text-blue-700">What's Daniils doing?</h1>
				<p class="text-md text-center text-gray-500 font-serif">
					Daniils is creating web applications, teaching rollersakting and practicing craftsmanship!
				</p>
			</div>
		</div>
	</div>
	<div id="about" class="h-[500px] w-screen bg-blue-100 flex justify-center items-center">
		<div class="h-5/6 w-fit bg-blue-200 shadow-lg flex p-8 gap-8">
			<img src="me-mountains.jpg" alt="it's me" height="384px" width="324px" class=" z-10" />

			<div class="w-[300px]">
				<div class="flex gap-2">
					<button
						on:click={() => onSelectAboutMePart(true)}
						class="{selectedMyStory ? 'font-medium text-blue-700' : 'text-blue-500/70'} text-2xl"
						>My Story</button
					>
					<button
						on:click={() => onSelectAboutMePart(false)}
						class="{!selectedMyStory ? 'font-medium text-blue-700' : 'text-blue-500/70'} text-2xl"
						>Experience</button
					>
				</div>
				{#if selectedMyStory}
					<p class="text-sm text-gray-500 pt-5 leading-6">
						My name is Daniils and I am a software developer from Latvia! I have received a
						Bachelor's degree from the Stockholm School of Economics in Riga and a master's degree
						in computer science from the University of Latvia. Currenty I am working as a full-stack
						developer at <a href="https://www.aoxtrade.eu">AOX Trade.</a>
					</p>
				{:else}
					<p>sadsad</p>
				{/if}
			</div>
		</div>
	</div>
	<div id="projects" class="h-[900px] w-screen" />
	<div id="hobbies" class="h-[1000px] w-screen" />
</section>

<style scoped>
	.image-container {
		position: relative;
		display: inline-block;
	}
	.highlighted-graduation-image {
		display: block;
		filter: drop-shadow(0px 0px 15px rgba(2, 42, 129, 0.8));
	}
	.daniils-card {
		font-family: 'Apple Chancery', 'Lucida Handwriting', 'Brush Script MT', 'Dancing Script',
			cursive;
		font-size: xx-large;
	}
</style>
