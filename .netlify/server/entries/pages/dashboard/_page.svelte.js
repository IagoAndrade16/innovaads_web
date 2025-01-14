import { c as create_ssr_component, a as compute_rest_props, j as compute_slots, b as spread, e as escape_object, d as escape_attribute_value, g as escape, f as add_attribute, v as validate_component, k as createEventDispatcher, s as setContext, i as getContext, h as subscribe, l as each, m as missing_component } from "../../../chunks/ssr.js";
import { M as MetaTag } from "../../../chunks/MetaTag.js";
import { twMerge, twJoin } from "tailwind-merge";
import { N as Navbar, b as NavHamburger, a as NavBrand } from "../../../chunks/NavHamburger.js";
import { i as is_void } from "../../../chunks/client.js";
import { F as Frame, u as userStore } from "../../../chunks/userStore.js";
import * as dom from "@floating-ui/dom";
import { w as writable } from "../../../chunks/index2.js";
import { W as Wrapper } from "../../../chunks/Wrapper.js";
import { i as imagesPath, p as page } from "../../../chunks/variables.js";
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "rounded", "size", "border", "placement", "offset"]);
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(dotClass) }], {})}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36",
    none: ""
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0) $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0) $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ms-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 object-cover", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `  <svg class="${"w-full h-full " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> `}`} ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`} `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0) $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let middleware;
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  let { middlewares = [dom.flip(), dom.shift()] } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0) $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0) $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0) $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0) $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0) $$bindings.yOnly(yOnly);
  if ($$props.middlewares === void 0 && $$bindings.middlewares && middlewares !== void 0) $$bindings.middlewares(middlewares);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      dispatch("show", open);
    }
    placement && (referenceEl = referenceEl);
    middleware = [
      ...middlewares,
      dom.offset(+offset),
      arrowEl
    ];
    arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-e", $$props.border && arrowSide === "top" && "border-t border-s ", $$props.border && arrowSide === "right" && "border-t border-e ", $$props.border && arrowSide === "left" && "border-b border-s ");
    $$rendered = `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${referenceEl ? `${validate_component(Frame, "Frame").$$render(
      $$result,
      Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
        }
      }
    )}` : ``} `;
  } while (!$$settled);
  return $$rendered;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerCls;
  let headerCls;
  let ulCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  let $$slots = compute_slots(slots);
  let { activeUrl = void 0 } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { classContainer = void 0 } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let { classActive = void 0 } = $$props;
  let { arrow = false } = $$props;
  let { trigger = "click" } = $$props;
  let { placement = "bottom" } = $$props;
  let { color = "dropdown" } = $$props;
  let { shadow = true } = $$props;
  let { rounded = true } = $$props;
  const activeUrlStore = writable("");
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.classContainer === void 0 && $$bindings.classContainer && classContainer !== void 0) $$bindings.classContainer(classContainer);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl ?? "");
    }
    containerCls = twMerge(containerClass, classContainer);
    headerCls = twMerge(headerClass, classHeader);
    ulCls = twMerge("py-1", $$props.class);
    footerCls = twMerge(footerClass, classFooter);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { trigger }, { arrow }, { placement }, { shadow }, { rounded }, { color }, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "my-1 h-px bg-gray-100 dark:bg-gray-600" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}></div> `;
});
const DropdownHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "divider"]);
  let { divClass = "py-2 px-4 text-gray-700 dark:text-white" } = $$props;
  let { divider = true } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0) $$bindings.divider(divider);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> ${divider ? `${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}` : ``} `;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "asideClass", "nonActiveClass", "activeClass", "ariaLabel"]);
  let { activeUrl = "" } = $$props;
  let { asideClass = "w-64" } = $$props;
  let { nonActiveClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { ariaLabel = "Sidebar" } = $$props;
  const activeUrlStore = writable("");
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0) $$bindings.asideClass(asideClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let aClass;
  let $$restProps = compute_rest_props($$props, ["action", "params", "href", "label", "spanClass", "activeClass", "nonActiveClass"]);
  let $$slots = compute_slots(slots);
  let { action = () => {
  } } = $$props;
  let { params = {} } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ms-3" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0) $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
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
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let name = $userStore?.name;
  let email = $userStore?.email;
  let { avatar = "" } = $$props;
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0) $$bindings.avatar(avatar);
  $$unsubscribe_userStore();
  return `<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      size: "sm",
      src: imagesPath(avatar, "users"),
      tabindex: 0
    },
    {},
    {}
  )}</button> ${validate_component(Dropdown, "Dropdown").$$render($$result, { placement: "bottom-end" }, {}, {
    default: () => {
      return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<span class="block text-sm">${escape(name)}</span> <span class="block truncate text-sm font-medium">${escape(email)}</span>`;
        }
      })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Sair`;
        }
      })}`;
    }
  })} `;
});
const Navbar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = true } = $$props;
  let { drawerHidden = false } = $$props;
  let { list = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0) $$bindings.fluid(fluid);
  if ($$props.drawerHidden === void 0 && $$bindings.drawerHidden && drawerHidden !== void 0) $$bindings.drawerHidden(drawerHidden);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0) $$bindings.list(list);
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      fluid,
      class: "text-black",
      color: "default"
    },
    {},
    {
      default: ({ NavContainer }) => {
        return `${validate_component(NavHamburger, "NavHamburger").$$render(
          $$result,
          {
            onClick: () => drawerHidden = !drawerHidden,
            class: "m-0 me-3 md:block lg:hidden"
          },
          {},
          {}
        )} ${validate_component(NavBrand, "NavBrand").$$render(
          $$result,
          {
            href: "/",
            class: list ? "w-40" : "lg:w-60"
          },
          {},
          {
            default: () => {
              return `<img src="/images/flowbite-svelte-icon-logo.svg" class="me-2.5 h-6 sm:h-8" alt="Flowbite Logo"> <span class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl" data-svelte-h="svelte-18izzhr">Innova ADS</span>`;
            }
          }
        )} <div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2"> ${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})} ${validate_component(UserMenu, "UserMenu").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
const ChartPieOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
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
  let { title: title2 = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chart pie outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"></path></svg>`} `;
});
let iconClass = "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white";
let itemClass = "flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700";
let groupClass = "pt-2 space-y-2";
const Sidebar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainSidebarUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { drawerHidden = false } = $$props;
  let menus = [
    {
      name: "Dashboard",
      icon: ChartPieOutline,
      href: "/dashboard"
    }
  ];
  if ($$props.drawerHidden === void 0 && $$bindings.drawerHidden && drawerHidden !== void 0) $$bindings.drawerHidden(drawerHidden);
  mainSidebarUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      class: drawerHidden ? "hidden" : "",
      activeUrl: mainSidebarUrl,
      activeClass: "bg-gray-100 dark:bg-gray-700",
      asideClass: "fixed inset-0 z-30 flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-16 lg:block"
    },
    {},
    {
      default: () => {
        return `<h4 class="sr-only" data-svelte-h="svelte-1iler5n">Main menu</h4> ${validate_component(SidebarWrapper, "SidebarWrapper").$$render(
          $$result,
          {
            divClass: "overflow-y-auto px-3 pt-20 lg:pt-5 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2"
          },
          {},
          {
            default: () => {
              return `<nav class="divide-y divide-gray-200 dark:divide-gray-700">${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { ulClass: groupClass, class: "mb-3" }, {}, {
                default: () => {
                  return `${each(menus, ({ name, icon, href }) => {
                    return `${validate_component(SidebarItem, "SidebarItem").$$render(
                      $$result,
                      {
                        label: name,
                        href,
                        spanClass: "ml-3",
                        class: itemClass
                      },
                      {},
                      {
                        icon: () => {
                          return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { slot: "icon", class: iconClass }, {}, {})}`;
                        }
                      }
                    )}`;
                  })}`;
                }
              })} </nav>`;
            }
          }
        )}`;
      }
    }
  )} <div ${drawerHidden ? "hidden" : ""} class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" role="presentation"></div>`;
});
const BaseLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawerHidden = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<header class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">${validate_component(Navbar_1, "Navbar").$$render(
      $$result,
      { drawerHidden },
      {
        drawerHidden: ($$value) => {
          drawerHidden = $$value;
          $$settled = false;
        }
      },
      {}
    )}</header> <div class="overflow-hidden lg:flex">${validate_component(Sidebar_1, "Sidebar").$$render(
      $$result,
      { drawerHidden },
      {
        drawerHidden: ($$value) => {
          drawerHidden = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">${slots.default ? slots.default({}) : ``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const path = "";
const description = "Admin Dashboard - Home";
const title = "Dashboard - Home";
const subtitle = "Admin Dashboard";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(BaseLayout, "BaseLayout").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
