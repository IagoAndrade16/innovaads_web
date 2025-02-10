<script lang="ts">
  export let containerMarginTop = "32";
</script>

<div class="container mx-auto p-4 mt-{containerMarginTop} text-black dark:text-white">
  <slot />
</div>