import { c as create_ssr_component, d as compute_rest_props, v as validate_component, a as add_attribute, e as escape, f as spread, i as escape_object, j as createEventDispatcher, g as getContext, h as escape_attribute_value, k as compute_slots } from "./ssr.js";
import { L as Label } from "./Label.js";
import { v4 } from "uuid";
import { twMerge } from "tailwind-merge";
import { T as ToolbarButton } from "./ToolbarButton.js";
import { i as is_void } from "./Button.js";
import { E as Engine } from "./Engine.js";
import Swal from "sweetalert2";
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
const ErrorText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  return `<span class="text-red-500 text-xs mb-5">${escape(error !== void 0 ? error : "")}</span>`;
});
class Utils {
  static clean(value) {
    if (typeof value !== "string") return value;
    return value.replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "").replaceAll("/", "").replaceAll("\\", "").replaceAll("(", "").replaceAll(")", "");
  }
  static applyMask(mask, value, maxLength) {
    const maxLengthOfValue = maxLength ?? mask.length;
    let valueIfOverflowMaskLength = null;
    if (value.length > maxLengthOfValue) {
      valueIfOverflowMaskLength = value.slice(0, -1);
    }
    const cleanedValue = Utils.clean(valueIfOverflowMaskLength ?? value);
    const numChar = "0";
    const alphaChar = "a";
    const alphaNumChars = ["[a0]", "[0a]"];
    const allChar = "*";
    let res = "";
    let charCounter = 0;
    for (let i = 0; i < mask.length; i++) {
      if (charCounter >= cleanedValue.length) break;
      if (mask[i] === numChar) {
        if (Utils.isNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
        charCounter++;
      } else if (mask[i] === alphaChar) {
        if (Utils.isAlphabetic(cleanedValue[charCounter])) res += cleanedValue[charCounter];
        charCounter++;
      } else if (mask[i] === "[") {
        const endingIndex = mask.indexOf("]", i);
        const multiChar = mask.substring(i, endingIndex + 1);
        if (alphaNumChars.includes(multiChar)) {
          if (Utils.isAlphaNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
          charCounter++;
          i += multiChar.length - 1;
        }
      } else if (mask[i] === allChar) {
        res += cleanedValue[charCounter];
        charCounter++;
      } else {
        res += mask[i];
      }
    }
    return res;
  }
  static isNumeric(str) {
    return /^\d+$/.test(str);
  }
  static isInt(value) {
    return !Number.isNaN(value) && function(x) {
      return (x | 0) === x;
    }(parseFloat(value));
  }
  static isAlphabetic(str) {
    return str.match("^[a-zA-Z]+$");
  }
  static isAlphaNumeric(str) {
    const alphanumeric = /^[\p{L}\p{N}]*$/u;
    return str.match(alphanumeric);
  }
  static genUuid(short = false) {
    const uuid = v4();
    return short ? uuid.substring(0, 12) : uuid;
  }
  static buildQueryParams(params) {
    if (!params || Object.keys(params).length === 0) return "";
    const objectFiltered = Object.keys(params).reduce((acc, key) => {
      if (!params[key]) return acc;
      return { ...acc, [key]: params[key] };
    }, {});
    return Object.keys(objectFiltered).map((key) => `${key}=${params[key]}`).join("&");
  }
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms ?? 1e3));
  }
}
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, [
    "type",
    "value",
    "size",
    "clearable",
    "defaultClass",
    "color",
    "floatClass",
    "classLeft",
    "classRight",
    "inputEl"
  ]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { clearable = false } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  let { classLeft = "" } = $$props;
  let { classRight = "" } = $$props;
  let { inputEl } = $$props;
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
  if ($$props.classLeft === void 0 && $$bindings.classLeft && classLeft !== void 0) $$bindings.classLeft(classLeft);
  if ($$props.classRight === void 0 && $$bindings.classRight && classRight !== void 0) $$bindings.classRight(classRight);
  if ($$props.inputEl === void 0 && $$bindings.inputEl && inputEl !== void 0) $$bindings.inputEl(inputEl);
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
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
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
        )}${add_attribute("this", inputEl, 0)}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``} ${clearable && value && `${value}`.length > 0 ? `${validate_component(CloseButton, "CloseButton").$$render(
          $$result,
          {
            size,
            color: "none",
            class: " " + twMerge(floatClass, classRight) + " focus:ring-0 end-6 focus:ring-gray-400 dark:text-white"
          },
          {},
          {}
        )}` : ``}`;
      }
    }
  )}`;
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
  let { additionalLabelClasses = "" } = $$props;
  let { mask = null } = $$props;
  let { maxLength = null } = $$props;
  let { pattern = null } = $$props;
  let { onInput = null } = $$props;
  let { resetErrorOnInput = true } = $$props;
  let inputEl;
  const maskInput = () => {
    if (mask) value = Utils.applyMask(mask, value, maxLength ?? void 0);
  };
  maskInput();
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0) $$bindings.inputType(inputType);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.additionalLabelClasses === void 0 && $$bindings.additionalLabelClasses && additionalLabelClasses !== void 0) $$bindings.additionalLabelClasses(additionalLabelClasses);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0) $$bindings.mask(mask);
  if ($$props.maxLength === void 0 && $$bindings.maxLength && maxLength !== void 0) $$bindings.maxLength(maxLength);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.onInput === void 0 && $$bindings.onInput && onInput !== void 0) $$bindings.onInput(onInput);
  if ($$props.resetErrorOnInput === void 0 && $$bindings.resetErrorOnInput && resetErrorOnInput !== void 0) $$bindings.resetErrorOnInput(resetErrorOnInput);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: labelClass + " " + additionalLabelClasses
      },
      {},
      {
        default: () => {
          return `<span>${escape(label)}</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: inputType,
              name: name + "}",
              placeholder,
              class: "border outline-none dark:border-gray-600 dark:bg-gray-700",
              value,
              inputEl,
              required
            },
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              },
              inputEl: ($$value) => {
                inputEl = $$value;
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
      }
    )} ${validate_component(ErrorText, "ErrorText").$$render($$result, { error: String(error ?? "") }, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
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
export {
  BaseInput as B,
  CloseButton as C,
  DialogService as D,
  ErrorText as E,
  Utils as U
};
