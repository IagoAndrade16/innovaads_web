export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/logo-only-rocket.png","images/main-logo.png","images/user-logo.png","svg/online-ad.svg","svg/online-posts.svg","svg/segment-analysis.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DErBnWau.js","app":"_app/immutable/entry/app.CzD2GXcA.js","imports":["_app/immutable/entry/start.DErBnWau.js","_app/immutable/chunks/entry.D4e0zSiM.js","_app/immutable/chunks/scheduler.C0Ee3jA1.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CzD2GXcA.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.C0Ee3jA1.js","_app/immutable/chunks/index.CYij0xZA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/create-account",
				pattern: /^\/create-account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/errors/[code]",
				pattern: /^\/errors\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/home/dashboard",
				pattern: /^\/home\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/home/payment",
				pattern: /^\/home\/payment\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/home/pricing",
				pattern: /^\/home\/pricing\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/home/profile",
				pattern: /^\/home\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/verify-2fa",
				pattern: /^\/verify-2fa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
