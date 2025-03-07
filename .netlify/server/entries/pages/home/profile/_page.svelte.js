import { c as create_ssr_component, d as compute_rest_props, g as getContext, a as add_attribute, f as spread, h as escape_object, i as escape_attribute_value, e as escape, s as setContext, k as compute_slots, b as subscribe, v as validate_component, q as set_store_value } from "../../../../chunks/ssr.js";
import { P as PrimaryButton, B as BaseLayout } from "../../../../chunks/BaseLayout.js";
import { w as writable } from "../../../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
import { u as userStore, a as userAuthStore } from "../../../../chunks/userStore.js";
import "../../../../chunks/client.js";
import "moment";
import "sweetalert2";
import { B as BaseInput } from "../../../../chunks/BaseInput.js";
import * as yup from "yup";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card_1 } from "../../../../chunks/Card.js";
import Toastify from "toastify-js";
/* empty css                          */
import { P as PhoneNumber } from "../../../../chunks/PhoneNumber.js";
import { P } from "../../../../chunks/P.js";
import { a as FacebookSolid } from "../../../../chunks/Footer.js";
import { D as DialogService } from "../../../../chunks/DialogService.js";
import { E as Engine } from "../../../../chunks/Engine.js";
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
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "divClass", "hrClass", "iconDivClass", "textSpanClass", "innerDivClass"]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { divClass = "inline-flex items-center justify-center w-full" } = $$props;
  let { hrClass = "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900 " } = $$props;
  let { innerDivClass = "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900" } = $$props;
  let horizontalCls = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, "relative", $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0) $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0) $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0) $$bindings.textSpanClass(textSpanClass);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0) $$bindings.innerDivClass(innerDivClass);
  return `${$$slots.default ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divCls) }], {})}><hr${add_attribute("class", horizontalCls, 0)}> <div${add_attribute("class", innerDivCls, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalCls, 0)}>`} `;
});
const AdjustmentsVerticalSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "adjustments vertical solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z"></path></svg>`} `;
});
const CreditCardPlusAltSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "credit card plus alt solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill="currentColor" d="M2 7c0-1.10457.89543-2 2-2h16c1.1046 0 2 .89543 2 2v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H4v7h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-1.10457 0-2-.8954-2-2V7Z"></path><path fill="currentColor" d="M5 14c0-.5523.44772-1 1-1h2c.55228 0 1 .4477 1 1s-.44772 1-1 1H6c-.55228 0-1-.4477-1-1Zm5 0c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1Zm9-1c.5523 0 1 .4477 1 1v1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1v-1c0-.5523.4477-1 1-1Z"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill="currentColor" d="M2 7c0-1.10457.89543-2 2-2h16c1.1046 0 2 .89543 2 2v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H4v7h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-1.10457 0-2-.8954-2-2V7Z"></path><path fill="currentColor" d="M5 14c0-.5523.44772-1 1-1h2c.55228 0 1 .4477 1 1s-.44772 1-1 1H6c-.55228 0-1-.4477-1-1Zm5 0c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1Zm9-1c.5523 0 1 .4477 1 1v1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1v-1c0-.5523.4477-1 1-1Z"></path></svg>`} `;
});
const GoogleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "google solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"></path></svg>`} `;
});
const UserCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "user circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"></path></svg>`} `;
});
class ToastService {
  static success(message, styleConfig) {
    Toastify({
      text: message,
      duration: styleConfig?.duration || 3e3,
      gravity: styleConfig?.gravity || "top",
      position: styleConfig?.position || "center",
      style: {
        background: "#FE795D",
        ...styleConfig
      }
    }).showToast();
  }
  static error(message, styleConfig) {
    Toastify({
      text: message,
      duration: styleConfig?.duration || 3e3,
      gravity: styleConfig?.gravity || "top",
      position: styleConfig?.position || "center",
      style: {
        background: "#FF6347",
        ...styleConfig
      }
    }).showToast();
  }
  static info(message, styleConfig) {
    Toastify({
      text: message,
      duration: styleConfig?.duration || 3e3,
      gravity: styleConfig?.gravity || "top",
      position: styleConfig?.position || "center",
      style: {
        background: "#4CAF50",
        ...styleConfig
      }
    }).showToast();
  }
  static show(params) {
    Toastify(params).showToast();
  }
}
const BillingInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $$unsubscribe_userAuthStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${`<div class="flex justify-center items-center h-64">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_userAuthStore();
  return $$rendered;
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
const SecondaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "alternative",
      class: "transition duration-300 ease-in-out bg-white hover:bg-gray-100 text-gray-800 hover:text-gray-900 border border-gray-200"
    },
    {},
    {
      default: () => {
        return `${escape(text)}`;
      }
    }
  )}`;
});
const SetupIntegrations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $userAuthStore, $$unsubscribe_userAuthStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => $userAuthStore = value);
  let facebookIsConnected = false;
  let facebook;
  let usersService;
  const handleConnectWithFacebook = async () => {
    await facebook.login(() => {
    });
    const loginStatus = await facebook.getLoginStatus();
    switch (loginStatus.status) {
      case "connected":
        await saveFacebookAccount({
          accessToken: loginStatus.authResponse.accessToken,
          userIdOnFacebook: loginStatus.authResponse.userID,
          expiresIn: loginStatus.authResponse.expiresIn
        });
        break;
      case "not_authorized":
        DialogService.error({
          message: "Credenciais incorretas para a conta selecionada.",
          title: "Erro ao conectar com o Facebook"
        });
        facebookIsConnected = false;
        break;
      default:
        DialogService.error({
          message: "Houve um erro inesperado ao conectar com o facebook.",
          title: "Ooops!"
        });
        facebookIsConnected = false;
        break;
    }
  };
  const saveFacebookAccount = async (params) => {
    const res = await usersService.connectWithFacebook({
      accessToken: params.accessToken,
      userIdOnFacebook: params.userIdOnFacebook,
      expiresIn: params.expiresIn,
      bearerToken: $userAuthStore.token
    });
    switch (res.status) {
      case "SUCCESS":
        ToastService.success("Facebook conectado com sucesso!");
        facebookIsConnected = true;
        if ($userStore) {
          set_store_value(
            userStore,
            $userStore = {
              ...$userStore,
              facebookAccount: {
                userIdOnFacebook: res.data.userIdOnFacebook
              }
            },
            $userStore
          );
        }
        break;
      case "UNAUTHORIZED":
        await facebook.logout();
        facebookIsConnected = false;
        Engine.logout();
        break;
      default:
        ToastService.error("Houve um erro inesperado ao conectar com o facebook.");
        facebookIsConnected = false;
        await facebook.logout();
        break;
    }
  };
  const disconnectFacebookAccountOnSystem = async () => {
    const res = await usersService.disconnectWithFacebook({ bearerToken: $userAuthStore.token });
    DialogService.close();
    switch (res.status) {
      case "SUCCESS":
        ToastService.success("Facebook desconectado com sucesso!");
        facebookIsConnected = false;
        if ($userStore) {
          set_store_value(userStore, $userStore = { ...$userStore, facebookAccount: null }, $userStore);
        }
        break;
      case "UNAUTHORIZED":
        Engine.logout();
        break;
      default:
        ToastService.error("Houve um erro inesperado ao desconectar com o facebook.");
        facebookIsConnected = false;
        if ($userStore) {
          set_store_value(userStore, $userStore = { ...$userStore, facebookAccount: null }, $userStore);
        }
        break;
    }
  };
  const handleLogoutFromFacebook = async () => {
    DialogService.loading();
    await facebook.logout();
    const loginStatus = await facebook.getLoginStatus();
    switch (loginStatus.status) {
      case "connected":
        DialogService.error({
          message: "Houve um erro inesperado ao desconectar com o facebook.",
          title: "Ooops!"
        });
        facebookIsConnected = true;
        break;
      case "not_authorized":
      case "unknown":
        await disconnectFacebookAccountOnSystem();
        break;
      default:
        DialogService.error({
          message: "Houve um erro inesperado ao desconectar com o facebook.",
          title: "Ooops!"
        });
        facebookIsConnected = true;
        break;
    }
  };
  $$unsubscribe_userStore();
  $$unsubscribe_userAuthStore();
  return `<div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-6 xl:col-span-4">${validate_component(Card_1, "Card").$$render($$result, { title: "Redes sociais" }, {}, {
    default: () => {
      return `<div class="flex flex-row justify-between items-center mt-5"><div class="flex space-x-2 text-center items-center">${validate_component(FacebookSolid, "FacebookSolid").$$render($$result, { class: "w-8 h-8" }, {}, {})} ${validate_component(P, "P").$$render($$result, { class: "text-md" }, {}, {
        default: () => {
          return `Conectar com Facebook`;
        }
      })}</div> ${facebookIsConnected ? `${validate_component(SecondaryButton, "SecondaryButton").$$render(
        $$result,
        {
          text: "Desconectar",
          onClick: handleLogoutFromFacebook
        },
        {},
        {}
      )}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
        $$result,
        {
          text: "Conectar +",
          onClick: handleConnectWithFacebook
        },
        {},
        {}
      )}`}</div> ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})} <div class="flex flex-row justify-between items-center"><div class="flex space-x-2 text-center items-center">${validate_component(GoogleSolid, "GoogleSolid").$$render($$result, { class: "w-6 h-6" }, {}, {})} ${validate_component(P, "P").$$render($$result, { class: "text-md" }, {}, {
        default: () => {
          return `Conectar com Google`;
        }
      })}</div> ${`${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { text: "Conectar +" }, {}, {})}`}</div>`;
    }
  })}</div></div>`;
});
const path = "/home/profile";
const description = "InnovaADS - Perfil";
const title = "InnovaADS - Perfil";
const subtitle = "Perfil";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pageBreadcrumbs = [
    {
      name: "Configurações da conta",
      href: "/home/profile"
    }
  ];
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
            return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
              title: () => {
                return `<div slot="title" class="flex items-center gap-2">${validate_component(UserCircleSolid, "UserCircleSolid").$$render($$result, { size: "md" }, {}, {})}
        Informações pessoais</div>`;
              },
              default: () => {
                return `<div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5"><div class="col-span-3 lg:flex space-y-4 lg:space-y-0 lg:space-x-4">${validate_component(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})} ${validate_component(PasswordInfo, "PasswordInfo").$$render($$result, {}, {}, {})}</div></div>`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Plano e cobranças" }, {}, {
              title: () => {
                return `<div slot="title" class="flex items-center gap-2">${validate_component(CreditCardPlusAltSolid, "CreditCardPlusAltSolid").$$render($$result, { size: "md" }, {}, {})}
        Plano e cobranças</div>`;
              },
              default: () => {
                return `${validate_component(BillingInfo, "BillingInfo").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Integrações" }, {}, {
              title: () => {
                return `<div slot="title" class="flex items-center gap-2">${validate_component(AdjustmentsVerticalSolid, "AdjustmentsVerticalSolid").$$render($$result, { size: "md" }, {}, {})}
        Integrações</div>`;
              },
              default: () => {
                return `${validate_component(SetupIntegrations, "SetupIntegrations").$$render($$result, {}, {}, {})}`;
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
