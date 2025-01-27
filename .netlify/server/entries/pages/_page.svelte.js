import { c as create_ssr_component, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { H as Heading } from "../../chunks/Heading.js";
import { P } from "../../chunks/P.js";
import "../../chunks/client.js";
import "../../chunks/userStore.js";
import { B as Button } from "../../chunks/Button.js";
import { A as ArrowLeftToBracketOutline } from "../../chunks/ArrowLeftToBracketOutline.js";
import { twMerge } from "tailwind-merge";
import { F as Footer, a as FooterBrand, b as FooterLinkGroup, c as FooterLink } from "../../chunks/FooterLinkGroup.js";
const QuestionCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "question circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"></path></svg>`} `;
});
const LandingPageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-4 mt-40 text-black dark:text-white">${slots.default ? slots.default({}) : ``}</div>`;
});
const CtaButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render($$result, { class: "font-extrabold" }, {}, {
    default: () => {
      return `TESTAR GRÁTIS
  ${validate_component(ArrowLeftToBracketOutline, "ArrowLeftToBracketOutline").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const Section1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center"><div class="w-full md:w-3/4 lg:w-3/5">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-5xl font-bold text-center"
    },
    {},
    {
      default: () => {
        return `A melhor maneira de direcionar suas campanhas para o público certo`;
      }
    }
  )}</div> ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-6 mt-10 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center"
    },
    {},
    {
      default: () => {
        return `Obtenha insights valiosos sobre o seu público-alvo e otimize suas campanhas baseado em palavras-chave e intereses em tempo real.`;
      }
    }
  )} ${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div> <img src="/svg/segment-analysis.svg" class="h-3/4 w-3/4 md:w-1/2 md:h-1/2 xl:h-1/3 xl:w-1/3 place-self-center mt-20" alt="">`;
});
const Section2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-2 gap-4 my-48" id="about"><div class="flex flex-col col-span-full lg:col-span-1 justify-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-2xl font-bold text-start"
    },
    {},
    {
      default: () => {
        return `Alinhe isso com uma análise de criativos performantes no Facebook ADS de acordo com o seu público.`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { class: " dark:text-gray-400" }, {}, {
    default: () => {
      return `Descubra o perfil do seu público-alvo e direcione suas campanhas de marketing para as pessoas certas.`;
    }
  })} <div class="mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div> <div class="flex flex-col col-span-full lg:col-span-1 items-center" data-svelte-h="svelte-1sefnjh"><img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard"> <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard"></div></div> <div class="grid grid-cols-2 gap-4 my-48"><div class="flex flex-col col-span-full lg:col-span-1 mb-10 items-center" data-svelte-h="svelte-12raygc"><img class="w-full" src="/svg/online-ad.svg" alt="dashboard"></div> <div class="flex flex-col col-span-full lg:col-span-1 justify-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-2xl font-bold text-start"
    },
    {},
    {
      default: () => {
        return `Alinhe isso com uma análise de criativos performantes no Facebook ADS de acordo com o seu público.`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { class: " dark:text-gray-400" }, {}, {
    default: () => {
      return `Descubra o perfil do seu público-alvo e direcione suas campanhas de marketing para as pessoas certas.`;
    }
  })} <div class="mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionClass = "relative py-6 sm:py-10" } = $$props;
  let { name = "default" } = $$props;
  const sectionClasses = {
    advancedTable: {
      div: "mx-auto max-w-screen-xl px-4 lg:px-12"
    },
    blog: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    blogTemplate: {
      div: "flex justify-between px-4 mx-auto max-w-screen-xl"
    },
    comment: { div: "max-w-2xl mx-auto px-4" },
    contact: {
      div: "py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
    },
    content: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    contentwithimg: {
      div: "gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    },
    crudcreateform: {
      div: "py-8 px-4 mx-auto max-w-2xl lg:py-16"
    },
    crudcreatedrawer: { div: "h-80" },
    crudreadsection: {
      div: "py-8 px-4 mx-auto max-w-2xl lg:py-16"
    },
    cta: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    ctawithimg: {
      div: "gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    },
    default: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    faq: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    feature: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    forgotpassword: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0"
    },
    headingwithctabutton: {
      div: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    },
    heroDefault: {
      div: "py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    },
    heroVisual: {
      div: "grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    },
    login: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    logos: {
      div: "py-8 lg:py-16 mx-auto max-w-screen-xl px-4"
    },
    maintenance: {
      div: "py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12"
    },
    newsletter: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    none: { div: "" },
    page500: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    page404: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    portfolio: {
      div: "max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24"
    },
    pricing: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    register: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    reset: {
      div: "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    },
    schedule: {
      div: "max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24"
    },
    social: {
      div: "max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
    },
    tableheader: {
      div: "max-w-screen-xl px-4 mx-auto lg:px-12 w-full"
    },
    team: {
      div: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    },
    testimonial: {
      div: "max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
    }
  };
  if ($$props.sectionClass === void 0 && $$bindings.sectionClass && sectionClass !== void 0) $$bindings.sectionClass(sectionClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `<section${add_attribute("class", twMerge(sectionClass, $$props.classSection), 0)}><div${add_attribute("class", twMerge(sectionClasses[name]["div"], $$props.classDiv), 0)}>${slots.default ? slots.default({}) : ``}</div></section> `;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const FaqItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "mb-10" } = $$props;
  let { h3Class = "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.h3Class === void 0 && $$bindings.h3Class && h3Class !== void 0) $$bindings.h3Class(h3Class);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}><h3${add_attribute("class", twMerge(h3Class, $$props.classH3), 0)}>${validate_component(QuestionCircleSolid, "QuestionCircleSolid").$$render($$result, { size: "sm", class: "mr-2" }, {}, {})} ${slots.h3 ? slots.h3({}) : ``}</h3> ${slots.default ? slots.default({}) : ``}</div> `;
});
const Section3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full items-center align-middle dark:bg-light-gray py-12 bg-white">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-3xl font-bold text-center"
    },
    {},
    {
      default: () => {
        return `Comece seu teste grátis`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { class: " dark:text-gray-400 text-center" }, {}, {
    default: () => {
      return `Teste a plataforma por 7 dias. Não precisa de cartão de crédito.`;
    }
  })} <div class="place-self-center mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div>`;
});
const Section4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="faq" class="mt-20">${validate_component(Section, "Section").$$render($$result, { name: "faq" }, {}, {
    default: () => {
      return `<h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center" data-svelte-h="svelte-n1ihjo">Perguntas frequentes</h2> ${validate_component(Faq, "Faq").$$render($$result, {}, {}, {
        default: () => {
          return `<div>${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
            h3: () => {
              return `O que é a plataforma?`;
            },
            default: () => {
              return `<p class="text-gray-500 dark:text-gray-400" data-svelte-h="svelte-r2m6r6">A InnovaADS é uma plataforma que ajuda gestores de tráfego a obter informações valiosas sobre público-alvo, nichos específicos e criativos para as suas campanhas.</p>`;
            }
          })} ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
            h3: () => {
              return `Eu consigo testar a plataforma?`;
            },
            default: () => {
              return `<p class="text-gray-500 dark:text-gray-400" data-svelte-h="svelte-wpepc">Sim, você consegue testar a plataforma por 7 dias gratuitamente. Após esse período, você pode escolher um dos nossos planos para continuar utilizando a plataforma.</p>`;
            }
          })}</div> <div>${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
            h3: () => {
              return `Quais são os planos disponíveis?`;
            },
            default: () => {
              return `<p class="text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1fpzp6h">Atualmente, temos apenas 1 plano disponível que custa R$ 19,90 por mês. Esse plano dá acesso a todas as funcionalidades da plataforma.</p>`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}</div>`;
});
const Section5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render($$result, { footerType: "socialmedia" }, {}, {
    default: () => {
      return `<div class="mx-auto max-w-screen-xl text-center">${validate_component(FooterBrand, "FooterBrand").$$render(
        $$result,
        {
          href: "/",
          src: "/images/logo-only-rocket.png",
          alt: "InnovaADS Logo",
          name: "InnovaADS",
          aClass: "flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        },
        {},
        {}
      )} ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render(
        $$result,
        {
          ulClass: "flex flex-wrap justify-center items-center mb-2 ml-6 text-gray-900 dark:text-white mt-6"
        },
        {},
        {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render(
              $$result,
              {
                liClass: "",
                aClass: "mr-4 hover:underline md:mr-6",
                href: "#about"
              },
              {},
              {
                default: () => {
                  return `Sobre`;
                }
              }
            )} ${validate_component(FooterLink, "FooterLink").$$render(
              $$result,
              {
                liClass: "",
                aClass: "mr-4 hover:underline md:mr-6",
                href: "#faq"
              },
              {},
              {
                default: () => {
                  return `FAQs`;
                }
              }
            )} ${validate_component(FooterLink, "FooterLink").$$render(
              $$result,
              {
                liClass: "",
                aClass: "mr-4 hover:underline md:mr-6",
                href: "#contact"
              },
              {},
              {
                default: () => {
                  return `Contato`;
                }
              }
            )}`;
          }
        }
      )} <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} <a href="/" class="hover:underline" data-svelte-h="svelte-2yb6kt">InnovaADS</a>. Todos os direitos reservados.</span></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LandingPageContainer, "LandingPageContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section1, "Section1").$$render($$result, {}, {}, {})} ${validate_component(Section2, "Section2").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Section3, "Section3").$$render($$result, {}, {}, {})} ${validate_component(Section4, "Section4").$$render($$result, {}, {}, {})} ${validate_component(Section5, "Section5").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
