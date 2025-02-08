import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { tick } from "svelte";
import { userAuthStore } from "$lib/stores/userAuthStore";
import { userStore } from "$lib/stores/userStore";
import type { IUser } from "$lib/stores/interfaces/IUser";
import { MomentUtils } from "./MomentUtils";
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

	static canUsePlatform(user: IUser | null): boolean {
		if(!user) return false;

		if(user.subscriptionStatus === 'active') return true;

		if(user.subscriptionStatus === 'canceled') {
			const nowFormatted = MomentUtils.formattedDate(new Date(), 'YYYY-MM-DD');
			const canUsePlatformUntilFormatted = MomentUtils.formattedDate(user.canUsePlatformUntil!, 'YYYY-MM-DD');
			if(canUsePlatformUntilFormatted && nowFormatted) return true;
			return false;
		}


		if(!user.subscriptionStatus) {
			if(user.daysRemainingForTrial > 0) return true;
			return false;
		}

		return false;
	}

	static async back() {
		if (!browser) return;
		history.back();
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
		if (!browser || !localStorage) return 'light';
		return (localStorage.getItem('color-theme') ?? 'light') as 'dark' | 'light';
	}
}
