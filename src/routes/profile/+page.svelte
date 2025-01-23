<script lang="ts">
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Breadcrumb, BreadcrumbItem, Heading } from 'flowbite-svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	import GeneralInfo from '../utils/settings/GeneralInfo.svelte';
	import PasswordInfo from '../utils/settings/PasswordInfo.svelte';

	const path: string = '/profile';
  const description: string = 'InnovaADS - Perfil';
  const title: string = 'InnovaADS - Perfil';
  const subtitle: string = 'Perfil';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<BaseLayout>
  <main class="p-4">
    <div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5">
      <div class="col-span-full xl:mb-0">
        <Breadcrumb class="mb-6">
          <BreadcrumbItem home>Home</BreadcrumbItem>
          <BreadcrumbItem
            class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
            href="/profile">Perfil</BreadcrumbItem
          >
        </Breadcrumb>

        <Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Configurações da sua conta
        </Heading>
      </div>
      

      <div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">
        <GeneralInfo />
        <PasswordInfo />
      </div>
    </div>
  </main>
  <Footer />
</BaseLayout>
