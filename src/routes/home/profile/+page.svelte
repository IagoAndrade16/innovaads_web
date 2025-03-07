<script lang="ts">
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import type { BreadcrumbItemType } from '$lib/components/types/breadcrumb';
	import { Indicator, TabItem, Tabs } from 'flowbite-svelte';
	import { AdjustmentsVerticalSolid, CreditCardPlusAltSolid, UserCircleSolid } from 'flowbite-svelte-icons';
	import MetaTag from '../../utils/MetaTag.svelte';
	import BillingInfo from '../../utils/settings/BillingInfo.svelte';
	import GeneralInfo from '../../utils/settings/GeneralInfo.svelte';
	import PasswordInfo from '../../utils/settings/PasswordInfo.svelte';
	import SetupIntegrations from '../../utils/settings/SetupIntegrations.svelte';

	const path: string = '/home/profile';
  const description: string = 'InnovaADS - Perfil';
  const title: string = 'InnovaADS - Perfil';
  const subtitle: string = 'Perfil';

  const pageBreadcrumbs: BreadcrumbItemType[] = [
    {
      name: 'Configurações da conta',
      href: '/home/profile'
    },
  ];
</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout
  breadcrums={pageBreadcrumbs}
> 
  <Tabs contentClass="bg-none py-5" tabStyle="underline">
    <TabItem open>
      <div slot="title" class="flex items-center gap-2">
        <UserCircleSolid size="md" />
        Informações pessoais
      </div>
      <div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5">
        <div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
          <GeneralInfo />
          <PasswordInfo />
        </div>
      </div>
    </TabItem>

    <TabItem title="Plano e cobranças">
      <div slot="title" class="flex items-center gap-2">
        <CreditCardPlusAltSolid size="md" />
        Plano e cobranças
      </div>
      <BillingInfo />
    </TabItem>
    <TabItem title="Integrações">
      <div slot="title" class="flex items-center gap-2">
        <AdjustmentsVerticalSolid size="md" />
        Integrações
      </div>
      <SetupIntegrations />
    </TabItem>
  </Tabs>
</BaseLayout>
