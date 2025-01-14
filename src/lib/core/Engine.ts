import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { tick } from "svelte";
import { userAuthStore } from "$lib/stores/userAuthStore";
import { userStore } from "$lib/stores/userStore";

export type PageType = 'CD' | 'SAMSUNG';

export default class Engine {
	static scrollToTop() {
		if (!browser) return;
		window.focus();
		window.scrollTo(0, 0);
	}

	static async assert(props: (boolean | null | undefined)[], redirect = '/'): Promise<void> {
		if (!browser) return;
		for (let i = 0; i < props.length; i++) {
			if (!props[i]) {
				// console.log(`element ${i} was null`);
				await tick();
				Engine.navigateTo(redirect);
			}
		}
	}

	static async navigateTo(page: string, replaceState?: boolean) {
		if (!browser) return;

		const tParam = `t=${+new Date()}`;
		const route = page.includes('?') ? `${page}&${tParam}` : `${page}?${tParam}`;

		await goto(route, { replaceState: replaceState ?? false });
		setTimeout(() => {
			Engine.scrollToTop();
		}, 0);
	}

	static copyToClipboard(text: string) {
		if (!browser) return;
		navigator.clipboard.writeText(text);
	}

	static logout(redirect: string | null = '/') {
		userAuthStore.set(null)
		userStore.set(null);
		if (redirect != null) Engine.navigateTo(redirect);
	}

	static getTheme(): 'dark' | 'light'{
		// if (!browser) return 'light';
		return (localStorage.getItem('color-theme') ?? 'light') as 'dark' | 'light';
	}
}
