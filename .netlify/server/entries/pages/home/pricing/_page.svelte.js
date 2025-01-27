import { c as create_ssr_component, d as compute_rest_props, a as add_attribute, e as escape, f as spread, i as escape_object, h as escape_attribute_value, g as getContext, v as validate_component, k as compute_slots, s as setContext, b as subscribe, l as each } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { N as Navbar, a as NavBrand, b as NavHamburger, D as DarkMode } from "../../../../chunks/NavHamburger.js";
import { twMerge, twJoin } from "tailwind-merge";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { N as NavUl, a as NavLi } from "../../../../chunks/NavUl.js";
import { A as ArrowLeftToBracketOutline } from "../../../../chunks/ArrowLeftToBracketOutline.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { C as Card } from "../../../../chunks/Label.js";
import { w as writable } from "../../../../chunks/index2.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { F as Footer, a as FooterBrand, b as FooterLinkGroup, c as FooterLink } from "../../../../chunks/FooterLinkGroup.js";
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0) $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0) $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ms-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked", "customSize"]);
  let $$slots = compute_slots(slots);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let { customSize = "" } = $$props;
  let background = getContext("background");
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    divClass = twMerge(
      common,
      $$slots.offLabel ? "ms-3" : "",
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "primary"],
      sizes[size],
      "relative",
      $$props.classDiv
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.offLabel ? slots.offLabel({}) : ``} <span${add_attribute("class", divClass, 0)}></span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "customeColor",
    "items",
    "filter",
    "placeholder",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass"
  ]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  let { items = [] } = $$props;
  let { filter = null } = $$props;
  let { placeholder = "Search" } = $$props;
  let { innerDivClass = "p-4" } = $$props;
  let { searchClass = "relative mt-1" } = $$props;
  let { svgDivClass = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" } = $$props;
  let { svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400" } = $$props;
  let { inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let searchTerm = "";
  let inputCls = twMerge(inputClass, $$props.classInput);
  let svgDivCls = twMerge(svgDivClass, $$props.classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext("searchTerm", searchTermStore);
  setContext("filter", filterStore);
  setContext("sorter", writable(null));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0) $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0) $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0) $$bindings.customeColor(customeColor);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0) $$bindings.innerDivClass(innerDivClass);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0) $$bindings.searchClass(searchClass);
  if ($$props.svgDivClass === void 0 && $$bindings.svgDivClass && svgDivClass !== void 0) $$bindings.svgDivClass(svgDivClass);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0) $$bindings.svgClass(svgClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  {
    setContext("items", items);
  }
  {
    searchTermStore.set(searchTerm);
  }
  {
    {
      if (filter) filterStore.set(filter);
    }
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}>${filter ? `${slots.search ? slots.search({}) : ` <div${add_attribute("class", innerDivClass, 0)}><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div${add_attribute("class", searchClass, 0)}><div${add_attribute("class", svgDivCls, 0)}>${slots.svgSearch ? slots.svgSearch({}) : ` <svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> `}</div> <input type="text" id="table-search"${add_attribute("class", inputCls, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", searchTerm, 0)}></div> ${slots.header ? slots.header({}) : ``}</div> `}` : ``} <table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let filtered;
  let sorted;
  let $$restProps = compute_rest_props($$props, ["tableBodyClass"]);
  let $sorter, $$unsubscribe_sorter;
  let $searchTerm, $$unsubscribe_searchTerm;
  let $filter, $$unsubscribe_filter;
  let { tableBodyClass = void 0 } = $$props;
  let filter = getContext("filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  let searchTerm = getContext("searchTerm");
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0) $$bindings.tableBodyClass(tableBodyClass);
  items = getContext("items") || [];
  filtered = $filter ? items.filter((item) => $filter(item, $searchTerm)) : items;
  sorted = $sorter ? filtered.toSorted((a, b) => $sorter.sortDirection * $sorter.sort(a, b)) : filtered;
  $$unsubscribe_sorter();
  $$unsubscribe_searchTerm();
  $$unsubscribe_filter();
  return `<tbody${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tableBodyClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${each(sorted, (item) => {
    return `${slots.row ? slots.row({ item }) : ``}`;
  })}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0) $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${$$props.onclick ? `<button>${slots.default ? slots.default({}) : ``}</button>` : `${slots.default ? slots.default({}) : ``}`}</td> `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0) $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0) $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding", "sort", "defaultDirection", "defaultSort", "direction"]);
  let $sorter, $$unsubscribe_sorter;
  let { padding = "px-6 py-3" } = $$props;
  let { sort = null } = $$props;
  let { defaultDirection = "asc" } = $$props;
  let { defaultSort = false } = $$props;
  let { direction = defaultSort ? defaultDirection : null } = $$props;
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0) $$bindings.sort(sort);
  if ($$props.defaultDirection === void 0 && $$bindings.defaultDirection && defaultDirection !== void 0) $$bindings.defaultDirection(defaultDirection);
  if ($$props.defaultSort === void 0 && $$bindings.defaultSort && defaultSort !== void 0) $$bindings.defaultSort(defaultSort);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  direction = $sorter?.id === sortId ? $sorter.sortDirection === 1 ? "asc" : "desc" : null;
  $$unsubscribe_sorter();
  return `${sort && sorter ? `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-sort": escape_attribute_value(direction ? `${direction}ending` : void 0)
      }
    ],
    {}
  )}><button${add_attribute("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding), 0)}>${slots.default ? slots.default({}) : ``}</button></th>` : `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`} `;
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
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = twMerge(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0) $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li> `;
});
const CheckOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "check outline" } = $$props;
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>`} `;
});
const CloseOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "close outline" } = $$props;
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M6 18 17.94 6M18 18 6.06 6"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M6 18 17.94 6M18 18 6.06 6"></path></svg>`} `;
});
const PriceCardListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Li, "Li").$$render($$result, { icon: true, class: "space-x-3" }, {}, {
    default: () => {
      return `${slots.icon ? slots.icon({}) : ` ${validate_component(CheckOutline, "CheckOutline").$$render(
        $$result,
        {
          size: "md",
          class: "text-green-500 dark:text-green-400"
        },
        {},
        {}
      )} `} <span class="dark:text-white">${slots.default ? slots.default({}) : ``}</span>`;
    }
  })}`;
});
const PriceCardPrice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { period = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.period === void 0 && $$bindings.period && period !== void 0) $$bindings.period(period);
  return `<div class="my-8 flex items-baseline"><span class="mr-2 text-5xl font-extrabold dark:text-white">${escape(value)}</span> ${period ? `<span class="text-gray-500 dark:text-gray-400">/${escape(period)}</span>` : ``}</div>`;
});
const PriceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title: title2 } = $$props;
  let { price } = $$props;
  let { period = "month" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0) $$bindings.price(price);
  if ($$props.period === void 0 && $$bindings.period && period !== void 0) $$bindings.period(period);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "none",
      class: "mx-auto max-w-lg text-gray-900",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<h3 class="mb-4 text-2xl font-semibold dark:text-white">${escape(title2)}</h3> ${$$slots.subtitle ? `<p class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">${slots.subtitle ? slots.subtitle({}) : ``}</p>` : ``} ${validate_component(PriceCardPrice, "PriceCardPrice").$$render($$result, { value: price, period }, {}, {})}  <ul role="list" class="mb-8 space-y-4 text-left">${slots.default ? slots.default({ Item: PriceCardListItem }) : ``}</ul> <a href="#top" class="rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900" data-svelte-h="svelte-1lzz1r0">Get started</a>`;
      }
    }
  )}`;
});
const ComparisonTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns = ["Freelancer", "Company", "Enterprise"] } = $$props;
  let { rows = [
    {
      name: "Seperate business/personal",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Estimate tax payments",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Stock control",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Create invoices & estimates",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Manage bills & payments",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Run payroll",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Handle multiple currencies",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Number of Users",
      freelancer: "1 User",
      company: "5-10 Users",
      enterprise: "20+ Users"
    },
    {
      name: "Track deductible mileage",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Track employee time",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Multi-device",
      freelancer: false,
      company: false,
      enterprise: true
    }
  ] } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0) $$bindings.rows(rows);
  return `${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, { class: "normal-case" }, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})} ${each(columns, (column) => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render(
              $$result,
              {
                class: "p-4 text-right text-base font-semibold tracking-wider text-gray-900 dark:text-white"
              },
              {},
              {
                default: () => {
                  return `${escape(column)}`;
                }
              }
            )}`;
          })}`;
        }
      })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "border-none" }, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                  $$result,
                  {
                    class: "whitespace-nowrap rounded-l-lg p-4 text-base font-normal text-gray-500 dark:text-gray-400"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(row.name)} `;
                    }
                  }
                )} ${each(columns, (column) => {
                  let value = row[column.toLowerCase()];
                  return ` ${typeof value === "boolean" ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${value ? `${validate_component(CheckOutline, "CheckOutline").$$render($$result, { class: "ml-auto text-green-400" }, {}, {})}` : `${validate_component(CloseOutline, "CloseOutline").$$render($$result, { class: "ml-auto text-red-500" }, {}, {})}`} `;
                    }
                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "flex-shrink-0 text-right text-xs font-medium text-gray-900 dark:text-white sm:text-sm md:text-base"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(value)} `;
                      }
                    }
                  )}`}`;
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
const FAQ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight"
    },
    {},
    {
      default: () => {
        return `Frequently asked questions`;
      }
    }
  )} <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl" data-svelte-h="svelte-3n4xeb">All types of businesses need access to development resources, so we give you the option to decide
	how much you need to use.</p> ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})} <div class="lg:columns-3 gap-8 space-y-10" data-svelte-h="svelte-1on2k1c"><div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What do you mean by &quot;Figma assets&quot;?</h3> <p class="text-gray-600 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the
			components, responsive pages, and also the icons, illustrations, and images included in the
			screens.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does &quot;lifetime access&quot; exactly mean?</h3> <p class="text-gray-600 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all
			of the future updates based on the roadmap, free of charge.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">How does support work?</h3> <p class="text-gray-600 dark:text-gray-400">We&#39;re aware of the importance of well qualified support, that is why we decided that support
			will only be provided by the authors that actually worked on this project.</p> <p class="text-gray-600 dark:text-gray-400">Feel free to <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and we&#39;ll help you out as soon as we can.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">I want to build more than one project with FlowBite. Is that allowed?</h3> <p class="text-gray-600 dark:text-gray-400">You can use FlowBite for an unlimited amount of projects, whether it&#39;s a personal website, a
			SaaS app, or a website for a client. As long as you don&#39;t build a product that will directly
			compete with FlowBite either as a UI kit, theme, or template, it&#39;s fine.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link href="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does &quot;free updates&quot; include?</h3> <p class="text-gray-600 dark:text-gray-400">The free updates that will be provided is based on the <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates
			outside of the roadmap as well.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does the free version include?</h3> <p class="text-gray-600 dark:text-gray-400">The <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">free version</a> of FlowBite includes a minimal style guidelines, component variants, and a dashboard page with
			the mobile version alongside it.</p> <p class="text-gray-600 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What is the difference between FlowBite and Tailwind UI?</h3> <p class="text-gray-600 dark:text-gray-400">Although both FlowBite and Tailwind UI are built for integration with Tailwind CSS, the main
			difference is in the design, the pages, the extra components and UI elements that FlowBite
			includes.</p> <p class="text-gray-600 dark:text-gray-400">Additionally, FlowBite is a project that is still in development, and later it will include
			both the application, marketing, and e-commerce UI interfaces.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">How do I purchase a license for my entire team?</h3> <p class="text-gray-600 dark:text-gray-400">You can purchase a license that you can share with your entire team here:</p> <ul class="list-disc pl-4"><li class="mb-2 text-gray-600"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Figma Files - Buy a team license for $299 USD</span></li> <li class="mb-2 text-gray-600"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Figma Files + Tailwind CSS code pre-order - Buy a team license for <del>$699</del> $559 USD</span></li> <li class="text-gray-600 dark:text-gray-400"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Tailwind CSS code pre-order - Buy a team license for <del>$399</del> $319 USD</span></li></ul> <p class="text-gray-600 dark:text-gray-400">Please use a single account to share with your team to access the download files.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I build/sell templates or themes using FlowBite?</h3> <p class="text-gray-600 dark:text-gray-400">It is not allowed to use FlowBite or parts of the project to build themes, templates, UI kits,
			or page builders.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link href="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use FlowBite in open-source projects?</h3> <p class="text-gray-600 dark:text-gray-400">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI
			library, a theme, a template, a page-builder that would be considered as an alternative to
			FlowBite itself.</p> <p class="text-gray-600 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link href="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use FlowBite for commercial purposes?</h3> <p class="text-gray-600 dark:text-gray-400">Absolutely! You can use this design kit to build any type of commercial business, whether it&#39;s
			a SaaS, an e-commerce app, an application UI.</p> <p class="text-gray-600 dark:text-gray-400">As long as it is not a design resource that you will re-sell, it is alright to use it for
			commercial purposes.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link href="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I get an invoice?</h3> <p class="text-gray-600 dark:text-gray-400">After opening the checkout process, you will be able to add all of your personal or company
			information that you want to be available on the invoice. After the purchase, you will get an
			email with the invoice.</p> <p class="text-gray-600 dark:text-gray-400">If you forgot to complete the information, or you didn&#39;t get the invoice by email, feel free
			to <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and help you out with the invoice.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">When will I get access to the Tailwind CSS code if I pre-ordered it?</h3> <p class="text-gray-600 dark:text-gray-400">The official date that we have set out to release the code version of FlowBite is the <span class="font-medium text-gray-900">25th of September, 2021</span>. We are already working on the integration and if you have a pre-order, you will also get
			frequent updates about the progress.</p> <p class="text-gray-600 dark:text-gray-400">You&#39;ll be one of the first to know when it will be available.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What is your refund policy?</h3> <p class="text-gray-600 dark:text-gray-400">If you are unhappy with your purchase, just <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> within 30 days and we&#39;ll issue a full refund.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Is it allowed to use the design assets, such as the fonts, icons, and illustrations?</h3> <p class="text-gray-600 dark:text-gray-400">What you see is what you get. Which means that all icons, fonts, and illustrations can be used
			based on the licensing that we researched or purchased. For example, we purchased rights to
			use the illustrations in Flowbite.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Where can I access my download files?</h3> <p class="text-gray-600 dark:text-gray-400">After you purchased one of the plans, you will get two emails: one for the invoice, and
			another one with the download files.</p> <p class="text-gray-600 dark:text-gray-400">Soon we will create a way that you will be able to access the download files from the FlowBite
			dashboard from this website.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">I have a company registered for VAT. Where can I add the VAT for the invoice?</h3> <p class="text-gray-600 dark:text-gray-400">After initializing the checkout process from Paddle, you will be able to see a text &quot;Add VAT
			code&quot;. Click on that, and add the VAT code for your company. This will also remove the extra
			VAT tax from the purchase.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Why would I pre-order the Tailwind CSS code?</h3> <p class="text-gray-600 dark:text-gray-400">If you decide to pre-order the Tailwind CSS code, which will arrive on the 25th of September
			2021, you can get a base 20% price reduction and purchase it only for $119, instead of $149.</p></div></div>`;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      footerType: "socialmedia",
      class: "mt-12"
    },
    {},
    {
      default: () => {
        return `<div class="container mx-auto px-4 sm:py-12 md:px-0"><div class="md:flex md:justify-between"><div class="grid grid-cols-2 gap-8 sm:grid-cols-6 sm:gap-6"><div class="col-span-2 mb-6 md:mb-0">${validate_component(FooterBrand, "FooterBrand").$$render(
          $$result,
          {
            href: "https://flowbite.com",
            src: "/images/flowbite-svelte-icon-logo.svg",
            alt: "Flowbite Logo",
            name: "Flowbite"
          },
          {},
          {}
        )} <p class="mt-4 max-w-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-12wk7c7">Flowbite is a UI library of elements &amp; components based on Tailwind CSS that can get
						you started building websites faster and more efficiently.</p></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-v73z7q">Resources</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Flowbite`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Figma`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Tailwind CSS`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Blog`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Blocks`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-nicwzu">Help and support</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `GitHub Repository`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Flowbite Library`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-3n6jls">Follow us</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `GitHub`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Twitter`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Facebook`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `LinkedIn`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-pqem6v">Legal</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Privacy Policy`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Terms &amp; Conditions`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `EULA`;
              }
            })}`;
          }
        })}</div></div></div> <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"> <div class="sm:flex sm:items-center sm:justify-center">${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "Flowbite™" }, {}, {})}</div></div>`;
      }
    }
  )}`;
});
const path = "/pages/pricing";
const description = "Pricing examaple - Flowbite Svelte Admin Dashboard";
const title = "Flowbite Svelte Admin Dashboard - Pricing";
const subtitle = "Pricing";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let period;
  let yearly = false;
  let prices = [["$24", "$200"], ["$49", "$400"], ["$499", "$1500"]];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    period = yearly ? "year" : "month";
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(Navbar, "Navbar").$$render(
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
              return `<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-1wylxxg">Flowbite</span>`;
            }
          })} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})} ${validate_component(NavUl, "NavUl").$$render($$result, { class: "me-auto ms-8" }, {}, {
            default: () => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `Home`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `Team`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/pricing" }, {}, {
                default: () => {
                  return `Pricing`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/contact" }, {}, {
                default: () => {
                  return `Contact`;
                }
              })}`;
            }
          })} <div class="py-4">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})} ${validate_component(Button, "Button").$$render($$result, { class: "gap-2 px-3" }, {}, {
            default: () => {
              return `${validate_component(ArrowLeftToBracketOutline, "ArrowLeftToBracketOutline").$$render($$result, {}, {}, {})}Login/Register`;
            }
          })}</div>`;
        }
      }
    )} <main class="mx-auto bg-gray-50 dark:bg-gray-900"><div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0"><h1 class="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight" data-svelte-h="svelte-e24ymn">Our pricing plan made simple</h1> <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl" data-svelte-h="svelte-h3ossv">All types of businesses need access to development resources, so we give you the option to
			decide how much you need to use.</p> <div class="flex items-center"><span class="text-base font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-15dt1j6">Monthly</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "ms-3 peer-focus:ring-0",
        checked: yearly
      },
      {
        checked: ($$value) => {
          yearly = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span class="text-base font-medium text-gray-900 dark:text-gray-400" data-svelte-h="svelte-16al18a">Yearly</span></div> <section class="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-3">${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Starter",
        price: prices[0][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Best option for personal use and for your next project.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-i3awpz">1 developer</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            icon: () => {
              return `${validate_component(CloseOutline, "CloseOutline").$$render(
                $$result,
                {
                  slot: "icon",
                  class: "text-red-500 dark:text-red-400"
                },
                {},
                {}
              )}`;
            },
            default: () => {
              return `Premium support`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            icon: () => {
              return `${validate_component(CloseOutline, "CloseOutline").$$render(
                $$result,
                {
                  slot: "icon",
                  class: "text-red-500 dark:text-red-400"
                },
                {},
                {}
              )}`;
            },
            default: () => {
              return `Free updates`;
            }
          })}`;
        }
      }
    )} ${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Company",
        price: prices[1][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Relevant for multiple users, extended &amp; premium support.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-k8s9fs">10 developers</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Premium support: <span class="font-semibold" data-svelte-h="svelte-sek7sf">24 months</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Free updates: <span class="font-semibold" data-svelte-h="svelte-sek7sf">24 months</span>`;
            }
          })}`;
        }
      }
    )} ${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Enterprise",
        price: prices[2][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Best for large scale uses and extended redistribution rights.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-14sm2xa">100 developers</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Premium support: <span class="font-semibold" data-svelte-h="svelte-1oszxo">36 months</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Free updates: <span class="font-semibold" data-svelte-h="svelte-1oszxo">36 months</span>`;
            }
          })}`;
        }
      }
    )}</section> <section class="flex flex-col pt-10 md:pt-20"><div class="overflow-x-auto rounded-lg"><div class="inline-block min-w-full align-middle"><div class="overflow-hidden shadow sm:rounded-lg">${validate_component(ComparisonTable, "ComparisonTable").$$render($$result, {}, {}, {})}</div></div></div></section> <section class="pt-20">${validate_component(FAQ, "Faq").$$render($$result, {}, {}, {})}</section></div></main> ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
