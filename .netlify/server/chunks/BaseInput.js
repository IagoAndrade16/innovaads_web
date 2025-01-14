import { c as create_ssr_component, a as compute_rest_props, v as validate_component, f as add_attribute, b as spread, e as escape_object, d as escape_attribute_value, k as createEventDispatcher, i as getContext, g as escape, j as compute_slots } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { T as ToolbarButton, F as Frame, a as userAuthStore, u as userStore } from "./userStore.js";
import * as yup from "yup";
import "./client.js";
import Swal from "sweetalert2";
import { W as Wrapper } from "./Wrapper.js";
import "./MetaTag.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size", "imgClass"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  let { imgClass = "" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgCls;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgCls = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"), imgClass);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgCls, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass2;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm rtl:text-right font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500 grayscale contrast-50"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass2 = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass2)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "clearable", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { clearable = false } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  createEventDispatcher();
  const borderClasses = {
    base: "border border-gray-300 dark:border-gray-600",
    tinted: "border border-gray-300 dark:border-gray-500",
    green: "border border-green-500 dark:border-green-400",
    red: "border border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0) $$bindings.clearable(clearable);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0) $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        inputPadding[_size],
        $$slots.left && leftPadding[_size] || (clearable || $$slots.right) && rightPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-s-lg last:rounded-e-lg",
        group && "[&:not(:first-child)]:-ms-px",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``} ${clearable && value && `${value}`.length > 0 ? `${validate_component(CloseButton, "CloseButton").$$render(
          $$result,
          {
            size,
            color: "none",
            class: " " + twMerge(floatClass, $$props.classRight) + " focus:ring-0 end-6 focus:ring-gray-400 dark:text-white"
          },
          {},
          {}
        )}` : ``}`;
      }
    }
  )} `;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "bg", "customColor", "size", "currentFill", "currentColor"]);
  let { color = "primary" } = $$props;
  let { bg = "text-gray-300" } = $$props;
  let { customColor = "" } = $$props;
  let { size = "8" } = $$props;
  let { currentFill = "currentFill" } = $$props;
  let { currentColor = "currentColor" } = $$props;
  let iconsize = `w-${size} h-${size}`;
  if (currentFill !== "currentFill") {
    color = void 0;
  }
  const fillColorClasses = {
    primary: "fill-primary-600",
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white",
    custom: customColor
  };
  let fillColorClass = color === void 0 ? "" : fillColorClasses[color] ?? fillColorClasses.blue;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0) $$bindings.bg(bg);
  if ($$props.customColor === void 0 && $$bindings.customColor && customColor !== void 0) $$bindings.customColor(customColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0) $$bindings.currentFill(currentFill);
  if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0) $$bindings.currentColor(currentColor);
  return `<svg${spread(
    [
      escape_object($$restProps),
      { role: "status" },
      {
        class: escape_attribute_value(twMerge("inline -mt-px animate-spin dark:text-gray-600", iconsize, bg, fillColorClass, $$props.class))
      },
      { viewBox: "0 0 100 101" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"${add_attribute("fill", currentColor, 0)}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"${add_attribute("fill", currentFill, 0)}></path></svg> `;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["action", "params", "href", "color", "aClass"]);
  let { action = () => {
  } } = $$props;
  let { params = {} } = $$props;
  let { href = "#" } = $$props;
  let { color = "text-primary-600 dark:text-primary-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
class Engine {
  static scrollToTop() {
    return;
  }
  static async assert(props, redirect = "/") {
    return;
  }
  static async navigateTo(page, replaceState) {
    return;
  }
  static copyToClipboard(text) {
    return;
  }
  static logout(redirect = "/") {
    userAuthStore.set(null);
    userStore.set(null);
    if (redirect != null) Engine.navigateTo(redirect);
  }
  static getTheme() {
    return localStorage.getItem("color-theme") ?? "light";
  }
}
class YupValidation {
  static async validateSchema(schema, values) {
    try {
      await schema.validate(values, { abortEarly: false });
      return null;
    } catch (err) {
      return err.inner.reduce((acc, err2) => {
        return { ...acc, [err2.path]: err2.message };
      }, {});
    }
  }
  static formatYupErrors(err) {
    return err.inner.reduce((acc, err2) => ({ ...acc, [err2.path]: err2.message }), {});
  }
  static schemaWith(shape) {
    return yup.object().shape(shape);
  }
}
class DialogService {
  static setupOptions = {
    color: Engine.getTheme() === "dark" ? "#fff" : "#333",
    background: Engine.getTheme() === "dark" ? "#333" : "#fff",
    confirmButtonColor: "#EF562F"
  };
  static success(options) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: "success",
      title: options.title,
      text: options.message
    });
  }
  static error(options) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: "error",
      title: options.title,
      text: options.message
    });
  }
  static info(options) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: "info",
      title: options.title,
      text: options.message
    });
  }
  static show(options) {
    Swal.fire({
      ...DialogService.setupOptions,
      ...options
    });
  }
}
const ErrorText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  return `<span class="text-red-500 text-xs mb-5">${escape(error !== void 0 ? error : "")}</span>`;
});
const labelClass = "space-y-2 dark:text-white";
const BaseInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { value = "" } = $$props;
  let { inputType = "text" } = $$props;
  let { name } = $$props;
  let { placeholder } = $$props;
  let { required = true } = $$props;
  let { error = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0) $$bindings.inputType(inputType);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div>${validate_component(Label, "Label").$$render($$result, { class: labelClass }, {}, {
      default: () => {
        return `<span>${escape(label)}</span> ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: inputType,
            name: name + "}",
            placeholder,
            class: "border outline-none dark:border-gray-600 dark:bg-gray-700",
            value,
            required
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            },
            required: ($$value) => {
              required = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(ErrorText, "ErrorText").$$render($$result, { error: String(error ?? "") }, {}, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  A,
  BaseInput as B,
  Card as C,
  DialogService as D,
  Engine as E,
  Label as L,
  Spinner as S,
  YupValidation as Y,
  ErrorText as a
};
