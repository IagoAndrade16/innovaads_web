import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as subscribe, q as set_store_value } from "../../../chunks/ssr.js";
import { C as Card, B as BaseInput } from "../../../chunks/BaseInput.js";
import { N as Navbar_1 } from "../../../chunks/Navbar.js";
import { E as Engine } from "../../../chunks/Engine.js";
import { D as DialogService } from "../../../chunks/DialogService.js";
import { u as userStore, a as userAuthStore } from "../../../chunks/userStore.js";
import { Y as YupValidation } from "../../../chunks/yup.js";
import * as yup from "yup";
import { B as Button } from "../../../chunks/Button.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { A } from "../../../chunks/A.js";
import { M as MetaTag } from "../../../chunks/MetaTag.js";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Faça login na plataforma" } = $$props;
  let { site = {
    name: "InnovaADS",
    img: "/static/images/logo-only-rocket.png",
    link: "/",
    imgAlt: "InnovaADS Logo"
  } } = $$props;
  let { isSubmitting = false } = $$props;
  let { lostPassword: lostPassword2 = true } = $$props;
  let { createAccount: createAccount2 = true } = $$props;
  let { lostPasswordLink: lostPasswordLink2 = "/forgot-password" } = $$props;
  let { loginTitle: loginTitle2 = "Entrar na sua conta" } = $$props;
  let { registerLink: registerLink2 = "" } = $$props;
  let { createAccountTitle: createAccountTitle2 = "Criar conta" } = $$props;
  let { handleFormSubmit } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full mt-40 md:mt-0" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-20" } = $$props;
  let { cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0) $$bindings.site(site);
  if ($$props.isSubmitting === void 0 && $$bindings.isSubmitting && isSubmitting !== void 0) $$bindings.isSubmitting(isSubmitting);
  if ($$props.lostPassword === void 0 && $$bindings.lostPassword && lostPassword2 !== void 0) $$bindings.lostPassword(lostPassword2);
  if ($$props.createAccount === void 0 && $$bindings.createAccount && createAccount2 !== void 0) $$bindings.createAccount(createAccount2);
  if ($$props.lostPasswordLink === void 0 && $$bindings.lostPasswordLink && lostPasswordLink2 !== void 0) $$bindings.lostPasswordLink(lostPasswordLink2);
  if ($$props.loginTitle === void 0 && $$bindings.loginTitle && loginTitle2 !== void 0) $$bindings.loginTitle(loginTitle2);
  if ($$props.registerLink === void 0 && $$bindings.registerLink && registerLink2 !== void 0) $$bindings.registerLink(registerLink2);
  if ($$props.createAccountTitle === void 0 && $$bindings.createAccountTitle && createAccountTitle2 !== void 0) $$bindings.createAccountTitle(createAccountTitle2);
  if ($$props.handleFormSubmit === void 0 && $$bindings.handleFormSubmit && handleFormSubmit !== void 0) $$bindings.handleFormSubmit(handleFormSubmit);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.siteLinkClass === void 0 && $$bindings.siteLinkClass && siteLinkClass !== void 0) $$bindings.siteLinkClass(siteLinkClass);
  if ($$props.siteImgClass === void 0 && $$bindings.siteImgClass && siteImgClass !== void 0) $$bindings.siteImgClass(siteImgClass);
  if ($$props.cardH1Class === void 0 && $$bindings.cardH1Class && cardH1Class !== void 0) $$bindings.cardH1Class(cardH1Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> </a>  ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "w-full",
      size: "md",
      border: false
    },
    {},
    {
      default: () => {
        return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${lostPassword2 ? `<div class="flex items-start">${lostPassword2 ? `${validate_component(A, "A").$$render(
          $$result,
          {
            href: lostPasswordLink2,
            aClass: "ml-auto text-sm"
          },
          {},
          {
            default: () => {
              return `Esqueceu sua senha?`;
            }
          }
        )}` : ``}</div>` : ``} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            disabled: isSubmitting ? true : false,
            type: "button",
            size: "lg"
          },
          {},
          {
            default: () => {
              return `${isSubmitting ? `${validate_component(Spinner, "Spinner").$$render($$result, { class: "me-3", size: "4" }, {}, {})}
						Entrando...` : `${escape(loginTitle2)}`}`;
            }
          }
        )} ${createAccount2 ? `<div class="text-sm font-medium text-gray-500 dark:text-gray-400">Não tem conta? ${validate_component(A, "A").$$render($$result, { href: registerLink2 }, {}, {
          default: () => {
            return `${escape(createAccountTitle2)}`;
          }
        })}</div>` : ``}</form>`;
      }
    }
  )}</div></main>`;
});
let title = "Entrar na plataforma";
let lostPassword = true;
let createAccount = true;
let lostPasswordLink = "forgot-password";
let loginTitle = "Entrar na sua conta";
let registerLink = "/create-account";
let createAccountTitle = "Criar conta";
const path = "/login";
const metaTitle = "InnovaADS - Entrar na conta";
const subtitle = "Entrar";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $userAuthStore, $$unsubscribe_userAuthStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => $userAuthStore = value);
  let site = {
    name: "Innova ADS",
    img: "/images/logo-only-rocket.png",
    link: "/",
    imgAlt: "InnovaADS Logo"
  };
  let errors = null;
  let usersService;
  let isLoading = false;
  const values = { email: "", password: "" };
  const formSchema = yup.object().shape({
    email: yup.string().required("Por favor, digite seu email.").email("Por favor, digite um email válido."),
    password: yup.string().required("Por favor, digite sua senha.").min(6, "Sua senha deve ter no mínimo 6 caracteres.")
  });
  const handleFormSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);
    if (errors) {
      return;
    }
    isLoading = true;
    const res = await usersService.auth({
      email: values.email,
      password: values.password
    });
    isLoading = false;
    switch (res.status) {
      case "SUCCESS":
        set_store_value(
          userAuthStore,
          $userAuthStore = {
            ...$userAuthStore,
            token: res.data?.auth.token
          },
          $userAuthStore
        );
        set_store_value(
          userStore,
          $userStore = {
            ...$userStore,
            name: res.data?.name,
            email: res.data?.email,
            phone: res.data?.phone,
            isOnTrial: res.data?.isOnTrial,
            daysRemainingForTrial: res.data?.daysRemainingForTrial,
            packageId: res.data?.packageId,
            verified2fa: res.data?.verified2fa,
            subscriptionStatus: res.data?.subscriptionStatus,
            canUsePlatformUntil: res.data?.canUsePlatformUntil,
            facebookAccount: res.data?.facebookAccount
          },
          $userStore
        );
        Engine.navigateTo("/home/historical-metrics");
        break;
      case "UNAUTHORIZED":
        DialogService.error({
          message: "Email ou senha incorretos.",
          title: "Ooops!"
        });
        break;
      default:
        DialogService.error({
          message: "Algo deu errado ao entrar na sua conta. Por favor, tente novamente.",
          title: "Ooops!"
        });
        break;
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, title: metaTitle, subtitle }, {}, {})} ${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(SignIn, "SignIn").$$render(
      $$result,
      {
        handleFormSubmit,
        isSubmitting: isLoading,
        title,
        site,
        lostPassword,
        createAccount,
        lostPasswordLink,
        loginTitle,
        registerLink,
        createAccountTitle
      },
      {},
      {
        default: () => {
          return `${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              inputType: "email",
              label: "Seu email",
              name: "email",
              placeholder: "nome@gmail.com",
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
              inputType: "password",
              label: "Senha",
              name: "password",
              placeholder: "********",
              required: true,
              error: errors?.password,
              value: values.password
            },
            {
              value: ($$value) => {
                values.password = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_userAuthStore();
  return $$rendered;
});
export {
  Page as default
};
