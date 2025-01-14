import { i as getContext } from "./ssr.js";
import "./client.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const imgDir = "https://flowbite-admin-dashboard.vercel.app/images";
const imagesPath = (src, ...subdirs) => [imgDir, ...subdirs, src].filter(Boolean).join("/");
export {
  imagesPath as i,
  page as p
};
