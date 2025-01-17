import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as add_attribute, g as escape, v as validate_component, h as subscribe, m as missing_component } from "../../chunks/ssr.js";
import { M as MetaTag } from "../../chunks/MetaTag.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
const imgDir = "https://flowbite-admin-dashboard.vercel.app/images";
const imagesPath = (src, ...subdirs) => [imgDir, ...subdirs, src].filter(Boolean).join("/");
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colorAndopacity;
  let classP;
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0) $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0) $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0) $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0) $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0) $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0) $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0) $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0) $$bindings.weight(weight);
  colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  classP = twMerge(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p> `;
});
const NotFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Página não encontrada" } = $$props;
  let { description = "Ops! Parece que você seguiu um link incorreto. Se você acha que isso é um problema nosso, informe-nos." } = $$props;
  let { image = {
    src: imagesPath("404.svg", "illustrations"),
    alt: "astronaut"
  } } = $$props;
  let { btnTitle = "Voltar para a página inicial" } = $$props;
  let { btnHref = "/" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { h1Class = "mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white" } = $$props;
  let { imgDiv = "block md:max-w-lg" } = $$props;
  let { div2Class = "text-center xl:max-w-4xl" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0) $$bindings.btnTitle(btnTitle);
  if ($$props.btnHref === void 0 && $$bindings.btnHref && btnHref !== void 0) $$bindings.btnHref(btnHref);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0) $$bindings.h1Class(h1Class);
  if ($$props.imgDiv === void 0 && $$bindings.imgDiv && imgDiv !== void 0) $$bindings.imgDiv(imgDiv);
  if ($$props.div2Class === void 0 && $$bindings.div2Class && div2Class !== void 0) $$bindings.div2Class(div2Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><div${add_attribute("class", imgDiv, 0)}><img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)}></div> <div${add_attribute("class", div2Class, 0)}><h1${add_attribute("class", h1Class, 0)}>${escape(title)}</h1> ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg"
    },
    {},
    {
      default: () => {
        return `${escape(description)}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { href: btnHref }, {}, {
    default: () => {
      return `<svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${escape(btnTitle)}`;
    }
  })}</div></div></main> `;
});
const Maintenance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Em manutenção" } = $$props;
  let { description = `Desculpe a inconveniência, mas estamos fazendo uma manutenção no momento. Se necessário, você sempre pode 
			<a href="/" class="text-primary-700 hover:underline dark:text-primary-500">contatar-nos</a>, 
			caso contrário, voltaremos a ficar on-line em breve!
		` } = $$props;
  let { image = {
    src: imagesPath("illustrations/maintenance.svg"),
    alt: "maintenance"
  } } = $$props;
  let { btnTitle = "Voltar para a página inicial" } = $$props;
  let { btnHref = "/" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900" } = $$props;
  let { h1Class = "mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white" } = $$props;
  let { imgDiv = "block mb-5 md:max-w-md" } = $$props;
  let { div2Class = "text-center xl:max-w-4xl" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0) $$bindings.btnTitle(btnTitle);
  if ($$props.btnHref === void 0 && $$bindings.btnHref && btnHref !== void 0) $$bindings.btnHref(btnHref);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0) $$bindings.h1Class(h1Class);
  if ($$props.imgDiv === void 0 && $$bindings.imgDiv && imgDiv !== void 0) $$bindings.imgDiv(imgDiv);
  if ($$props.div2Class === void 0 && $$bindings.div2Class && div2Class !== void 0) $$bindings.div2Class(div2Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><div${add_attribute("class", imgDiv, 0)}><img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)}></div> <div${add_attribute("class", div2Class, 0)}><h1${add_attribute("class", h1Class, 0)}>${escape(title)}</h1> ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg"
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END -->`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { href: btnHref }, {}, {
    default: () => {
      return `<svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${escape(btnTitle)}`;
    }
  })}</div></div></main>`;
});
const ServerError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Something has gone seriously wrong" } = $$props;
  let { description = "Sempre é hora de fazer uma pausa para o café. Devemos estar de volta quando você terminar seu café." } = $$props;
  let { image = {
    src: imagesPath("illustrations/500.svg"),
    alt: "astronaut"
  } } = $$props;
  let { btnHref = "/" } = $$props;
  let { btnTitle = "Voltar para página inicial" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900" } = $$props;
  let { h1Class = "mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white" } = $$props;
  let { imgDiv = "block md:max-w-lg" } = $$props;
  let { div2Class = "text-center xl:max-w-4xl" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.btnHref === void 0 && $$bindings.btnHref && btnHref !== void 0) $$bindings.btnHref(btnHref);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0) $$bindings.btnTitle(btnTitle);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0) $$bindings.h1Class(h1Class);
  if ($$props.imgDiv === void 0 && $$bindings.imgDiv && imgDiv !== void 0) $$bindings.imgDiv(imgDiv);
  if ($$props.div2Class === void 0 && $$bindings.div2Class && div2Class !== void 0) $$bindings.div2Class(div2Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><div${add_attribute("class", imgDiv, 0)}><img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)}></div> <div${add_attribute("class", div2Class, 0)}><h1${add_attribute("class", h1Class, 0)}>${escape(title)}</h1> ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg"
    },
    {},
    {
      default: () => {
        return `${escape(description)}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { href: btnHref }, {}, {
    default: () => {
      return `<svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${escape(btnTitle)}`;
    }
  })}</div></div></main> `;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = {
    400: Maintenance,
    404: NotFound,
    500: ServerError
  };
  const status = +$page.status;
  const index = Object.keys(pages).map((x) => +x).reduce((p, c) => p < status ? c : p);
  const component = pages[index];
  const path = `/errors/${index}`;
  const description = `${index} - InnovaADS`;
  const title = `InnovaADS - ${index} page`;
  const subtitle = `${index} page`;
  $$unsubscribe_page();
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};
