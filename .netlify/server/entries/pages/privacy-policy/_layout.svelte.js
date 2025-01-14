import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar_1 } from "../../../chunks/Navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
