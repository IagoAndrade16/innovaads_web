

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.WU_WuzK3.js","_app/immutable/chunks/scheduler.BS7HDBm-.js","_app/immutable/chunks/index.BkPZof_F.js"];
export const stylesheets = [];
export const fonts = [];
