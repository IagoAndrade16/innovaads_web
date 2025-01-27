import { c as create_ssr_component, b as subscribe, v as validate_component } from "./ssr.js";
import "./client.js";
import { u as userStore } from "./userStore.js";
import { B as Button } from "./Button.js";
import { N as Navbar, a as NavBrand, D as DarkMode, b as NavHamburger } from "./NavHamburger.js";
import { N as NavUl, a as NavLi } from "./NavUl.js";
import { A as ArrowLeftToBracketOutline } from "./ArrowLeftToBracketOutline.js";
const Navbar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_userStore();
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      class: "fixed start-0 top-0 z-20 w-full border-b border-gray-200 px-2 py-1 dark:border-gray-700 sm:px-4",
      color: "dark"
    },
    {},
    {
      default: () => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img src="/images/logo-only-rocket.png" class="me-3 h-10 sm:h-12" alt="InnovaADS Logo"> <span class="self-center whitespace-nowrap text-xl font-normal dark:text-white font-days" data-svelte-h="svelte-3o8v4u">Innova ADS</span>`;
          }
        })} ${validate_component(NavUl, "NavUl").$$render($$result, { class: "me-auto ms-8" }, {}, {
          default: () => {
            return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Home`;
              }
            })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "#pricing" }, {}, {
              default: () => {
                return `Preços`;
              }
            })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "#contact" }, {}, {
              default: () => {
                return `Contato`;
              }
            })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/#faq" }, {}, {
              default: () => {
                return `FAQ`;
              }
            })}`;
          }
        })} <div class="py-4">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})} ${$userStore ? `${validate_component(Button, "Button").$$render($$result, { class: "gap-2 px-3" }, {}, {
          default: () => {
            return `Dashboard`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, { class: "gap-2 px-3" }, {}, {
          default: () => {
            return `Testar grátis
				${validate_component(ArrowLeftToBracketOutline, "ArrowLeftToBracketOutline").$$render($$result, {}, {}, {})}`;
          }
        })}`} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
export {
  Navbar_1 as N
};
