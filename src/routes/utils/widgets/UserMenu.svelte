<script lang="ts">
	import Engine from '$lib/core/Engine';
	import { Avatar, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-svelte';
	import { imagesPath } from '../../utils/variables';
	import { userStore } from '$lib/stores/userStore';

	let name: string = $userStore?.name!;
	let email: string = $userStore?.email!;
	
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src="/images/user-logo.png" class="h-10 w-10" tabindex={0} />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>

	<DropdownItem on:click={() => Engine.logout('/sign-in')}>Sair</DropdownItem>
</Dropdown>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let id: number = 0;
@prop export let name: string = '';
@prop export let avatar: string = '';
@prop export let email: string = '';
@prop export let biography: string = '';
@prop export let position: string = '';
@prop export let country: string = '';
@prop export let status: string = '';
-->
