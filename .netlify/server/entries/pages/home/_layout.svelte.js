import { c as create_ssr_component, b as subscribe } from "../../../chunks/ssr.js";
import { E as Engine } from "../../../chunks/Engine.js";
import { u as userStore } from "../../../chunks/userStore.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  Engine.assert([$userStore !== null], "/login");
  Engine.assert([$userStore?.verified2fa !== false], "/verify-2fa");
  $$unsubscribe_userStore();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
