import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { N as Navbar_1 } from "../../../../chunks/Navbar.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { L as ListPackages } from "../../../../chunks/ListPackages.js";
const path = "/pages/pricing";
const description = "InnovaADS - Planos";
const title = "InnovaADS - Planos";
const subtitle = "Preços";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})} <main class="mx-auto bg-gray-50 dark:bg-gray-900"><div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0">${validate_component(ListPackages, "ListPackages").$$render($$result, {}, {}, {})}</div></main> <div class="mt-12">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
