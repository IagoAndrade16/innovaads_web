import { c as create_ssr_component, d as compute_rest_props, i as getContext, a as add_attribute, f as spread, g as escape_object, h as escape_attribute_value, e as escape, s as setContext, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { B as BaseLayout } from "../../../../chunks/BaseLayout.js";
import { w as writable } from "../../../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { B as BaseInput } from "../../../../chunks/BaseInput.js";
import { u as userStore, a as userAuthStore } from "../../../../chunks/userStore.js";
import * as yup from "yup";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card_1 } from "../../../../chunks/Card.js";
import "toastify-js";
/* empty css                          */
import { P as PhoneNumber } from "../../../../chunks/PhoneNumber.js";
import "../../../../chunks/client.js";
import "sweetalert2";
import { S as Spinner } from "../../../../chunks/Spinner.js";
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass", "divClass"]);
  let { open = false } = $$props;
  let { title: title2 = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  let { divClass = "" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title2)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div${add_attribute("class", divClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let $$restProps = compute_rest_props($$props, [
    "tabStyle",
    "defaultClass",
    "contentClass",
    "divider",
    "activeClasses",
    "inactiveClasses"
  ]);
  let { tabStyle = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2 rtl:space-x-reverse" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[tabStyle] || activeClasses,
    inactiveClasses: styledInactiveClasses[tabStyle] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0) $$bindings.tabStyle(tabStyle);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0) $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0) $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(tabStyle) ? false : divider;
  ulClass = twMerge(defaultClass, tabStyle === "underline" && "-mb-px", $$props.class);
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(ulClass) }], {})}>${slots.default ? slots.default({ tabStyle }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const GeneralInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_userAuthStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => value);
  const values = {
    name: $userStore?.name ?? "",
    email: $userStore?.email ?? "",
    phone: $userStore?.phone ?? ""
  };
  let errors = {};
  let isUpdatingUser = false;
  yup.object().shape({
    name: yup.string().required("Preencha o nome para salvar as alterações"),
    email: yup.string().email("Formato de email inválido").required("Preencha o email para salvar as alterações"),
    phone: yup.string().required("Preencha o telefone para salvar alterações.").test("phone", "Formato inválido do telefone. (00) 00000-0000.", (value) => {
      return PhoneNumber.isValid(value);
    })
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card_1, "Card").$$render(
      $$result,
      {
        title: "Informações gerais do perfil",
        class: "-mt-px max-w-none"
      },
      {},
      {
        default: () => {
          return `<form class="grid grid-cols-4 gap-2">${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              label: "Nome completo",
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4 mt-5",
              inputType: "text",
              name: "name",
              placeholder: "Exemplo: João da silva",
              required: true,
              error: errors?.name,
              value: values.name
            },
            {
              value: ($$value) => {
                values.name = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4",
              label: "Email",
              inputType: "email",
              name: "email",
              placeholder: "email@email.com",
              required: true,
              error: errors?.email,
              value: values.email
            },
            {
              value: ($$value) => {
                values.email = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              label: "Telefone",
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4",
              inputType: "text",
              name: "phone",
              placeholder: "(00) 12345-6789",
              mask: "(00) 00000-0000",
              required: true,
              error: errors?.phone,
              value: values.phone
            },
            {
              value: ($$value) => {
                values.phone = $$value;
                $$settled = false;
              }
            },
            {}
          )}</form> <div class="flex">${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "mt-5 w-full lg:w-fit whitespace-nowrap",
              disabled: isUpdatingUser
            },
            {},
            {
              default: () => {
                return `${`Salvar alterações`}`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_userAuthStore();
  return $$rendered;
});
const PasswordInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userAuthStore;
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => value);
  let errors = {};
  let isUpdatingPassword = false;
  const values = {
    actualPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  };
  yup.object().shape({
    actualPassword: yup.string().required("Preencha a senha atual"),
    newPassword: yup.string().required("Preencha a nova senha"),
    confirmNewPassword: yup.string().required("Confirme a nova senha").oneOf([yup.ref("newPassword")], "As senhas não coincidem")
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card_1, "Card").$$render(
      $$result,
      {
        title: "Informações de senha",
        class: "-mt-px max-w-none"
      },
      {},
      {
        default: () => {
          return `<form class="grid grid-cols-4 gap-2">${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              label: "Senha atual",
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4 mt-5",
              inputType: "password",
              name: "actualPassword",
              placeholder: "*********",
              required: true,
              error: errors?.actualPassword,
              value: values.actualPassword
            },
            {
              value: ($$value) => {
                values.actualPassword = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4",
              label: "Nova senha",
              inputType: "password",
              name: "newPassword",
              placeholder: "*********",
              required: true,
              error: errors?.newPassword,
              value: values.newPassword
            },
            {
              value: ($$value) => {
                values.newPassword = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              label: "Confirme a nova senha",
              additionalLabelClasses: "col-span-6 space-y-2 sm:col-span-4",
              inputType: "password",
              name: "confirmNewPassword",
              placeholder: "*********",
              required: true,
              error: errors?.confirmNewPassword,
              value: values.confirmNewPassword
            },
            {
              value: ($$value) => {
                values.confirmNewPassword = $$value;
                $$settled = false;
              }
            },
            {}
          )}</form> <div class="flex">${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "sm:col-full mt-6  col-span-6 lg:w-fit w-full",
              disabled: isUpdatingPassword
            },
            {},
            {
              default: () => {
                return `${`Salvar senha`}`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userAuthStore();
  return $$rendered;
});
const BillingInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userAuthStore;
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => value);
  $$unsubscribe_userAuthStore();
  return `${`<div class="flex justify-center items-center h-64">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
});
const path = "/home/profile";
const description = "InnovaADS - Perfil";
const title = "InnovaADS - Perfil";
const subtitle = "Perfil";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pageBreadcrumbs = [{ name: "Perfil", href: "/profile" }];
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(BaseLayout, "BaseLayout").$$render($$result, { breadcrums: pageBreadcrumbs }, {}, {
    default: () => {
      return `${validate_component(Tabs, "Tabs").$$render(
        $$result,
        {
          contentClass: "bg-none py-5",
          tabStyle: "underline"
        },
        {},
        {
          default: () => {
            return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Dados do perfil" }, {}, {
              default: () => {
                return `<div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5"><div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">${validate_component(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})} ${validate_component(PasswordInfo, "PasswordInfo").$$render($$result, {}, {}, {})}</div></div>`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Plano e cobranças" }, {}, {
              default: () => {
                return `${validate_component(BillingInfo, "BillingInfo").$$render($$result, {}, {}, {})}`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
