<script lang="ts">
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import type { BreadcrumbItemType } from '$lib/components/types/breadcrumb';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import MetaTag from '../../utils/MetaTag.svelte';
	import GeneralInfo from '../../utils/settings/GeneralInfo.svelte';
	import PasswordInfo from '../../utils/settings/PasswordInfo.svelte';
	import BillingInfo from '../../utils/settings/BillingInfo.svelte';



	const path: string = '/home/profile';
  const description: string = 'InnovaADS - Perfil';
  const title: string = 'InnovaADS - Perfil';
  const subtitle: string = 'Perfil';

  const pageBreadcrumbs: BreadcrumbItemType[] = [
    {
      name: 'Perfil',
      href: '/profile'
    },
  ];
</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout
  breadcrums={pageBreadcrumbs}
> 
  <Tabs contentClass="bg-none py-5" tabStyle="underline">
    <TabItem open title="Dados do perfil">
      <div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5">
        <div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
          <GeneralInfo />
          <PasswordInfo />
        </div>
      </div>
    </TabItem>
    <TabItem title="Plano e cobranças">
      <BillingInfo />
    </TabItem>
  </Tabs>
</BaseLayout>
