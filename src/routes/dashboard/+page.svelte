<script lang="ts">
	import MetaTag from '../utils/MetaTag.svelte';
	import BaseLayout from '$lib/components/BaseLayout.svelte';

	const path: string = '';
  const description: string = 'Admin Dashboard - Home';
  const title: string = 'Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout></BaseLayout>
