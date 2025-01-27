import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as subscribe } from "../../../chunks/ssr.js";
import { E as ErrorText, D as DialogService, B as BaseInput } from "../../../chunks/DialogService.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Label.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { A, S as Spinner, Y as YupValidation } from "../../../chunks/yup.js";
import { M as MetaTag } from "../../../chunks/MetaTag.js";
import * as yup from "yup";
import { P as PhoneNumber } from "../../../chunks/PhoneNumber.js";
import { E as Engine } from "../../../chunks/Engine.js";
import { u as userStore } from "../../../chunks/userStore.js";
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Criar conta grátis" } = $$props;
  let { site = {
    name: "InnovaADS",
    img: "/images/main-logo.png",
    link: "/",
    imgAlt: "InnovaADS Logo"
  } } = $$props;
  let { acceptTerms: acceptTerms2 = true } = $$props;
  let { haveAccount: haveAccount2 = true } = $$props;
  let { btnTitle: btnTitle2 = "Criar conta" } = $$props;
  let { termsLink: termsLink2 = "/privacy-policy" } = $$props;
  let { loginLink: loginLink2 = "/" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full mt-40 md:mt-24 lg:mt-16 xl:mt-0" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-20" } = $$props;
  let { cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  let { haveAccountDivClass = "text-sm font-medium text-gray-500 dark:text-gray-400" } = $$props;
  let { handleFormSubmit } = $$props;
  let { termsAccepted } = $$props;
  let { termsAcceptedError = "" } = $$props;
  let { submittingForm = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0) $$bindings.site(site);
  if ($$props.acceptTerms === void 0 && $$bindings.acceptTerms && acceptTerms2 !== void 0) $$bindings.acceptTerms(acceptTerms2);
  if ($$props.haveAccount === void 0 && $$bindings.haveAccount && haveAccount2 !== void 0) $$bindings.haveAccount(haveAccount2);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle2 !== void 0) $$bindings.btnTitle(btnTitle2);
  if ($$props.termsLink === void 0 && $$bindings.termsLink && termsLink2 !== void 0) $$bindings.termsLink(termsLink2);
  if ($$props.loginLink === void 0 && $$bindings.loginLink && loginLink2 !== void 0) $$bindings.loginLink(loginLink2);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.siteLinkClass === void 0 && $$bindings.siteLinkClass && siteLinkClass !== void 0) $$bindings.siteLinkClass(siteLinkClass);
  if ($$props.siteImgClass === void 0 && $$bindings.siteImgClass && siteImgClass !== void 0) $$bindings.siteImgClass(siteImgClass);
  if ($$props.cardH1Class === void 0 && $$bindings.cardH1Class && cardH1Class !== void 0) $$bindings.cardH1Class(cardH1Class);
  if ($$props.haveAccountDivClass === void 0 && $$bindings.haveAccountDivClass && haveAccountDivClass !== void 0) $$bindings.haveAccountDivClass(haveAccountDivClass);
  if ($$props.handleFormSubmit === void 0 && $$bindings.handleFormSubmit && handleFormSubmit !== void 0) $$bindings.handleFormSubmit(handleFormSubmit);
  if ($$props.termsAccepted === void 0 && $$bindings.termsAccepted && termsAccepted !== void 0) $$bindings.termsAccepted(termsAccepted);
  if ($$props.termsAcceptedError === void 0 && $$bindings.termsAcceptedError && termsAcceptedError !== void 0) $$bindings.termsAcceptedError(termsAcceptedError);
  if ($$props.submittingForm === void 0 && $$bindings.submittingForm && submittingForm !== void 0) $$bindings.submittingForm(submittingForm);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> </a>  ${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "w-full",
        size: "md",
        border: false
      },
      {},
      {
        default: () => {
          return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${acceptTerms2 ? `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "pt-1",
              name: "accept",
              checked: termsAccepted
            },
            {
              checked: ($$value) => {
                termsAccepted = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<span>Eu aceito os ${validate_component(A, "A").$$render($$result, { href: termsLink2 }, {}, {
                  default: () => {
                    return `Termos e condições`;
                  }
                })}</span>`;
              }
            }
          )} ${validate_component(ErrorText, "ErrorText").$$render($$result, { error: termsAcceptedError }, {}, {})}` : ``} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              disabled: submittingForm,
              type: "button",
              size: "lg"
            },
            {},
            {
              default: () => {
                return `${submittingForm ? `${validate_component(Spinner, "Spinner").$$render($$result, { class: "me-3", size: "4" }, {}, {})}
						Entrando...` : `${escape(btnTitle2)}`}`;
              }
            }
          )} ${haveAccount2 ? `<div${add_attribute("class", haveAccountDivClass, 0)}>Já tem uma conta? ${validate_component(A, "A").$$render($$result, { href: loginLink2 }, {}, {
            default: () => {
              return `Clique aqui`;
            }
          })}</div>` : ``}</form>`;
        }
      }
    )}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
const title = "Criar conta";
const acceptTerms = true;
const haveAccount = true;
const btnTitle = "Criar conta";
const termsLink = "/privacy-policy";
const loginLink = "login";
const path = "/create-account";
const description = "Crie sua conta";
const metaTitle = "InnovaADS - Criar conta";
const subtitle = "Criar conta";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let errors = null;
  let submittingForm = false;
  let usersService;
  Engine.assert([$userStore === null], "/home/dashboard");
  const values = {
    email: "",
    name: "",
    password: "",
    phone: "",
    termsAccepted: false
  };
  const formSchema = yup.object().shape({
    name: yup.string().required("Por favor, digite seu nome."),
    email: yup.string().required("Por favor, digite seu email.").email("Por favor, digite um email válido."),
    password: yup.string().required("Por favor, digite sua senha.").min(6, "Sua senha deve ter no mínimo 6 caracteres."),
    phone: yup.string().required("Por favor, digite seu telefone.").test("phone", "Formato inválido do telefone. (00) 00000-0000.", (value) => {
      return PhoneNumber.isValid(value);
    }),
    termsAccepted: yup.boolean().oneOf([true], "Você deve aceitar os termos e condições.")
  });
  let { handleFormSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);
    if (errors) return;
    submittingForm = true;
    const phoneNumber = PhoneNumber.parse(values.phone);
    const createUserRes = await usersService.register({
      email: values.email,
      name: values.name,
      password: values.password,
      phone: phoneNumber.cleaned()
    });
    submittingForm = false;
    switch (createUserRes.status) {
      case "SUCCESS":
        Engine.navigateTo("/login");
        break;
      case "USER_ALREADY_EXISTS":
        DialogService.info({
          title: "Usuário já existe",
          message: "O email informado já está cadastrado em nossa base de dados. Por favor, tente fazer login."
        });
        break;
      default:
        DialogService.error({
          title: "Erro ao criar conta",
          message: "Ocorreu um erro ao tentar criar sua conta. Por favor, tente novamente."
        });
        break;
    }
  } } = $$props;
  const site = {
    name: "InnovaADS",
    img: "/images/logo-only-rocket.png",
    link: "/",
    imgAlt: "InnovaADS Logo"
  };
  if ($$props.handleFormSubmit === void 0 && $$bindings.handleFormSubmit && handleFormSubmit !== void 0) $$bindings.handleFormSubmit(handleFormSubmit);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render(
      $$result,
      {
        path,
        description,
        title: metaTitle,
        subtitle
      },
      {},
      {}
    )} ${validate_component(SignUp, "SignUp").$$render(
      $$result,
      {
        title,
        site,
        acceptTerms,
        haveAccount,
        btnTitle,
        termsLink,
        loginLink,
        submittingForm,
        handleFormSubmit,
        termsAccepted: values.termsAccepted
      },
      {
        termsAccepted: ($$value) => {
          values.termsAccepted = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              inputType: "text",
              label: "Nome completo",
              name: "name",
              placeholder: "João da Silva",
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
          )} ${validate_component(BaseInput, "BaseInput").$$render(
            $$result,
            {
              inputType: "text",
              label: "Telefone",
              name: "phone",
              placeholder: "(99) 99999-9999",
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
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Page as default
};
