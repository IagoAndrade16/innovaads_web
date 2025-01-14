<script lang="ts">
  export let error: string;
</script>

<span class="text-red-500 text-xs mb-5">{error !== undefined ? error : ''}</span>