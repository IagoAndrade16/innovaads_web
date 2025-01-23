<script lang="ts">
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import type { BreadcrumbItemType } from '$lib/components/types/breadcrumb';
	import Engine from '$lib/core/Engine';
	import MetaTag from '../../utils/MetaTag.svelte';
	import { userStore } from '$lib/stores/userStore';

  Engine.assert([$userStore?.isOnTrial === true], '/home/profile')
	
  const path: string = '';
  const description: string = 'Admin Dashboard - Home';
  const title: string = 'Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
  const pageBreadcrumbs: BreadcrumbItemType[] = [
    {
      name: 'Dashboard',
      href: '/dashboard'
    },
  ];
  
</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout 
  breadcrums={pageBreadcrumbs}
>
</BaseLayout>
