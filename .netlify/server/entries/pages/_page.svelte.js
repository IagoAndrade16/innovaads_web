import { c as create_ssr_component, d as compute_rest_props, s as setContext, v as validate_component, g as getContext, b as subscribe, a as add_attribute, f as spread, h as escape_object, i as escape_attribute_value, e as escape } from "../../chunks/ssr.js";
import { A as ArrowLeftToBracketOutline, N as Navbar_1 } from "../../chunks/Navbar.js";
import { H as Heading } from "../../chunks/Heading.js";
import { P } from "../../chunks/P.js";
import "../../chunks/client.js";
import "../../chunks/userStore.js";
import "moment";
import { i as is_void, B as Button } from "../../chunks/Button.js";
import { S as Section, L as ListPackages } from "../../chunks/ListPackages.js";
import { w as writable } from "../../chunks/index2.js";
import { F as Frame } from "../../chunks/NavHamburger.js";
import { twMerge } from "tailwind-merge";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0) $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { tag = "h2" } = $$props;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-s border-e group-first:border-t" } = $$props;
  let { borderOpenClass = "border-s border-e" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0) $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0) $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0) $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0) $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0) $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0) $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0) $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0) $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0) $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0) $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0) $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `${((tag$1) => {
    return tag$1 ? `<${tag} class="group">${is_void(tag$1) ? "" : `<button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``} `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0) $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"]);
  let { aClass = "flex items-center" } = $$props;
  let { spanClass = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "me-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = "" } = $$props;
  let aCls = twMerge(aClass, $$props.classA);
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let imgCls = twMerge(imgClass, $$props.classImg);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}><img${add_attribute("src", src, 0)}${add_attribute("class", imgCls, 0)}${add_attribute("alt", alt, 0)}> <span${add_attribute("class", spanCls, 0)}>${escape(name)}</span> ${slots.default ? slots.default({}) : ``}</a>` : `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { class: escape_attribute_value(imgCls) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`} `;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "me-4 last:me-0 md:me-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  let liCls = twMerge(liClass, $$props.classLi);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0) $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  return `<li${add_attribute("class", liCls, 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aCls) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li> `;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass"]);
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const LandingPageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { containerMarginTop = "32" } = $$props;
  if ($$props.containerMarginTop === void 0 && $$bindings.containerMarginTop && containerMarginTop !== void 0) $$bindings.containerMarginTop(containerMarginTop);
  return `<div class="${"container mx-auto p-4 mt-" + escape(containerMarginTop, true) + " text-black dark:text-white"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const CtaButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render($$result, { class: "font-extrabold" }, {}, {
    default: () => {
      return `TESTAR GRÁTIS
  ${validate_component(ArrowLeftToBracketOutline, "ArrowLeftToBracketOutline").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const HeadingWithCta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center mt-20"><div class="w-full md:w-3/4 lg:w-3/5">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-2",
      customSize: "lg:text-5xl text-4xl font-bold text-center"
    },
    {},
    {
      default: () => {
        return `Dados Reais, Resultados Reais: Maximização de Resultados com Estratégias Eficientes`;
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
        return `Com uma análise aprofundada de segmentação, nossa plataforma oferece relatórios completos e insights estratégicos sobre os anúncios mais eficazes, para otimizar suas campanhas e maximizar conversões.`;
      }
    }
  )} ${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div> <img src="/svg/segment-analysis.svg" class="h-3/4 w-3/4 md:w-1/2 md:h-1/2 xl:h-1/3 xl:w-1/3 place-self-center mt-20" alt="">`;
});
const Benefits = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-2 gap-4 my-40 lg:my-48" id="about"><div class="flex flex-col col-span-full lg:col-span-1 justify-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-3xl font-bold text-start"
    },
    {},
    {
      default: () => {
        return `Desvende as Estratégias dos Anúncios Mais Lucrativos`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { class: "dark:text-gray-400 text-xl" }, {}, {
    default: () => {
      return `Otimize suas campanhas com palavras-chave validadas e de alto desempenho`;
    }
  })} <div class="mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div> <div class="flex flex-col col-span-full lg:col-span-1 items-center" data-svelte-h="svelte-1sefnjh"><img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard"> <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard"></div></div> <div class="grid grid-cols-2 gap-4 my-40 lg:my-48"><div class="flex flex-col col-span-full lg:col-span-1 mb-10 items-center" data-svelte-h="svelte-12raygc"><img class="w-full" src="/svg/online-ad.svg" alt="dashboard"></div> <div class="flex flex-col col-span-full lg:col-span-1 justify-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-3xl font-bold text-start"
    },
    {},
    {
      default: () => {
        return `Encontre os criativos vencedores no Facebook e Google Ads`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { class: "dark:text-gray-400 text-xl" }, {}, {
    default: () => {
      return `Descubra os elementos que mais impulsionam as vendas e mantenha-se sempre à frente dos seus concorrentes`;
    }
  })} <div class="mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const TestForSevenDays = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      return `Teste a plataforma gratuitamente por 7 dias. <b data-svelte-h="svelte-1oqx7ds">Não</b> é necessário cartão de crédito.`;
    }
  })} <div class="place-self-center mt-6">${validate_component(CtaButton, "CtaButton").$$render($$result, {}, {}, {})}</div></div>`;
});
const FaqSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-20 mt-20">${validate_component(Section, "Section").$$render($$result, { name: "faq" }, {}, {
    default: () => {
      return `<h2 id="faq" class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center" data-svelte-h="svelte-u4p95g">Perguntas frequentes</h2> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-1gbt496">O que exatamente a plataforma faz?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `A InnovaADS oferece aos gestores de tráfego e copywriters ferramentas que os ajudam a entender o que está em alta nos nichos de mercado, 
          além de fornecer insights sobre o que está funcionando para os concorrentes. A plataforma também oferece uma ferramenta de geração de ideias de anúncios, 
          que ajuda a criar anúncios de alta conversão em minutos.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-2ypdzg">Os dados da plataforma são atualizados com que frequência?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Os dados da plataforma são em tempo real, ou seja, sempre que você acessar a plataforma,`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-9ijg1r">Consigo ver anúncions da concorrência?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Sim, você consegue ver os anúncios da concorrência, além de ter acesso a dados sobre o que está funcionando para eles.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-1x9ki1n">Preciso de cartão de crédito para usar o teste grátis?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Não. Você pode testar a plataforma gratuitamente por 7 dias sem a necessidade de inserir informações de pagamento.
          Se ao final do período de testes você quiser continuar usando a plataforma, basta escolher o melhor plano para você.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-fe5emp">O sistema também ajuda a criar anúncios ou só mostra dados?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Até o momento o sistema ajuda apenas fornecendo dados e insights sobre o que está funcionando para os concorrentes,
          não sendo possível criar anúncios diretamente na plataforma.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-1w0nav4">Posso usar o sistema para qualquer nicho de mercado?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Sim, nossa plataforma permite que você pesquise por anúncios em qualquer nicho de mercado, mesmo os mais específicos.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-12n1jat">O sistema mostra métricas como CTR, CPC e ROI dos anúncios?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Não. Atualmente o sistema não mostra métricas como CTR, CPC e ROI dos anúncios, 
          apenas os anúncios em si e os dados sobre o que está funcionando para os concorrentes.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-hprq4k">Os dados apresentados são precisos e confiáveis?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Sim, os dados apresentados na plataforma são precisos e confiáveis, 
          pois são coletados diretamente das plataformas de anúncios como Facebook e Google.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-ax10ez">Posso integrar o sistema com minhas contas de anúncios?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Até o momento não é possível integrar o sistema com suas contas de anúncios,
          mas estamos trabalhando para adicionar essa funcionalidade em futuras atualizações.`;
                }
              })}`;
            }
          })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
            header: () => {
              return `<span slot="header" data-svelte-h="svelte-13f90jh">Como faço para cancelar minha assinatura?</span>`;
            },
            default: () => {
              return `${validate_component(P, "P").$$render($$result, {}, {}, {
                default: () => {
                  return `Para cancelar sua assinatura, basta acessar a página de configurações da sua conta e clicar no botão de cancelar assinatura.
          Se você tiver alguma dúvida ou problema, entre em contato com nossa equipe de suporte.`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
const PlatformPricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="pricing">${validate_component(ListPackages, "ListPackages").$$render($$result, {}, {}, {})}</div>`;
});
const LandingFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(LandingPageContainer, "LandingPageContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(HeadingWithCta, "HeadingWithCta").$$render($$result, {}, {}, {})} ${validate_component(Benefits, "Benefits").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(TestForSevenDays, "TestForSevenDays").$$render($$result, {}, {}, {})} ${validate_component(LandingPageContainer, "LandingPageContainer").$$render($$result, { containerMarginTop: "20" }, {}, {
    default: () => {
      return `${validate_component(PlatformPricing, "PlatformPricing").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, {}, {}, {})} ${validate_component(LandingFooter, "LandingFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
