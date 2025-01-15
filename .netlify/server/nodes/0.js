

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.E0YxLVct.js","_app/immutable/chunks/scheduler.CCAU0UuP.js","_app/immutable/chunks/index.DYbHWKFe.js"];
export const stylesheets = [];
export const fonts = [];
