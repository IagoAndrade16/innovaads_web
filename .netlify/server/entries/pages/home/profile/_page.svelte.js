import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Card_1, B as BaseLayout } from "../../../../chunks/Card.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { B as BaseInput } from "../../../../chunks/DialogService.js";
import { u as userStore, a as userAuthStore } from "../../../../chunks/userStore.js";
import * as yup from "yup";
import { B as Button } from "../../../../chunks/Button.js";
import "toastify-js";
import { P as PhoneNumber } from "../../../../chunks/PhoneNumber.js";
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
const path = "/home/profile";
const description = "InnovaADS - Perfil";
const title = "InnovaADS - Perfil";
const subtitle = "Perfil";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pageBreadcrumbs = [{ name: "Perfil", href: "/profile" }];
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(BaseLayout, "BaseLayout").$$render($$result, { breadcrums: pageBreadcrumbs }, {}, {
    default: () => {
      return `<div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5"><div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">${validate_component(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})} ${validate_component(PasswordInfo, "PasswordInfo").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
