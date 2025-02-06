

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Cc_apFlK.js","_app/immutable/chunks/scheduler.C0Ee3jA1.js","_app/immutable/chunks/index.CYij0xZA.js"];
export const stylesheets = [];
export const fonts = [];
