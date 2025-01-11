<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Toolbar from "$lib/components/Toolbar.svelte";

	let hiddenSidebar: boolean;

</script>

<div class="grid grid-cols-12">
	<Sidebar />
	<div class="col-span-12 col-start-1 xl:col-start-3 xl:col-span-10 ml-10">
		<Toolbar bind:hiddenSidebar />
	</div>
</div>