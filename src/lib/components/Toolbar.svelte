<script lang="ts">
	import Engine from '$lib/core/Engine';
  import { DarkMode, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { ArrowRightToBracketOutline, BarsOutline } from 'flowbite-svelte-icons';

  export let hiddenSidebar: boolean;

  const handleToggleSidebar = () => {
    hiddenSidebar = !hiddenSidebar;
  };
  </script>

<!-- <div class="grid grid-cols-12">
  <div class="col-span-12 col-start-1 xl:col-start-3 xl:col-span-9 ml-10 mr-10"> -->
    <Toolbar class="m-5">
      <ToolbarButton on:click={handleToggleSidebar}>
        <BarsOutline />
      </ToolbarButton>
      <ToolbarButton>
        <DarkMode />
      </ToolbarButton>
      <ToolbarButton slot="end" on:click={() => Engine.logout('/')}>
        <ArrowRightToBracketOutline />
      </ToolbarButton>
    </Toolbar>
  <!-- </div>
</div> -->
