import { c as create_ssr_component, a as add_attribute, d as compute_rest_props, l as createEventDispatcher, f as spread, g as escape_object, v as validate_component, e as escape, b as subscribe } from "../../../../chunks/ssr.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
import { B as BaseLayout } from "../../../../chunks/BaseLayout.js";
import { C as Card_1 } from "../../../../chunks/Card.js";
import { L as Label, C as Card, B as BaseInput } from "../../../../chunks/DialogService.js";
import "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import { B as Button } from "../../../../chunks/Button.js";
import * as yup from "yup";
import "dayjs";
import { a as userAuthStore } from "../../../../chunks/userStore.js";
import "../../../../chunks/client.js";
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
const Flatpickr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "formattedValue", "element", "dateFormat", "options", "input", "flatpickr"]);
  let { value = void 0, formattedValue = "", element = void 0, dateFormat = void 0 } = $$props;
  let { options = {} } = $$props;
  let { input = void 0, flatpickr: fp = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.formattedValue === void 0 && $$bindings.formattedValue && formattedValue !== void 0) $$bindings.formattedValue(formattedValue);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0) $$bindings.dateFormat(dateFormat);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0) $$bindings.input(input);
  if ($$props.flatpickr === void 0 && $$bindings.flatpickr && fp !== void 0) $$bindings.flatpickr(fp);
  return `${slots.default ? slots.default({}) : ` <input${spread([escape_object($$restProps)], {})}${add_attribute("this", input, 0)}> `}`;
});
const labelClass = "space-y-2 dark:text-white";
const BaseDateRangeInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fromDate } = $$props;
  let { toDate } = $$props;
  const options = { mode: "range", locale: Portuguese };
  if ($$props.fromDate === void 0 && $$bindings.fromDate && fromDate !== void 0) $$bindings.fromDate(fromDate);
  if ($$props.toDate === void 0 && $$bindings.toDate && toDate !== void 0) $$bindings.toDate(toDate);
  return `<div>${validate_component(Label, "Label").$$render($$result, { class: labelClass }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-18icwv0">Selecione a Data</span> ${validate_component(Flatpickr, "Flatpickr").$$render(
        $$result,
        {
          children: true,
          options,
          class: "border rounded-md h-[40px] px-2 w-full outline-none border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700",
          placeholder: "Selecione a data"
        },
        {},
        {}
      )}`;
    }
  })}</div>`;
});
const BaseGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { title: title2 = "" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${validate_component(Card, "Card").$$render($$result, { class: "mt-5 mb-5 max-w-full" }, {}, {
    default: () => {
      return `<h5 class="leading-none text-xl lg:text-2xl font-bold text-gray-900 dark:text-white pb-2">${escape(title2)}</h5> ${validate_component(Chart, "Chart").$$render($$result, { class: clazz, options }, {}, {})}`;
    }
  })}`;
});
const path = "/home/dashboard";
const description = "InnovaADS - Home";
const title = "InnovaADS - Home";
const subtitle = "Admin Dashboard";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userAuthStore;
  $$unsubscribe_userAuthStore = subscribe(userAuthStore, (value) => value);
  let errors = null;
  let searchingTendencies = false;
  let labelsSearched = [];
  let valuesSearched = [];
  const pageBreadcrumbs = [{ name: "Dashboard", href: "/dashboard" }];
  let optionsTendenciesGraph = {
    chart: {
      height: 400,
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: { enabled: false },
      toolbar: { show: true }
    },
    series: [{ name: "Pontos", data: valuesSearched }],
    xaxis: {
      categories: labelsSearched,
      labels: { style: { colors: "#000000" } }
    }
  };
  const values = { keyword: "", fromDate: "", toDate: "" };
  yup.object().shape({
    keyword: yup.string().required("Por favor, digite uma palavra-chave."),
    fromDate: yup.string().optional(),
    toDate: yup.string().optional()
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(BaseLayout, "BaseLayout").$$render($$result, { breadcrums: pageBreadcrumbs }, {}, {
      default: () => {
        return `${validate_component(Card_1, "Card").$$render(
          $$result,
          {
            title: "Busque por Tendências",
            class: "max-w-full"
          },
          {},
          {
            default: () => {
              return `<div class="mt-5 flex lg:flex-row flex-col gap-3">${validate_component(BaseInput, "BaseInput").$$render(
                $$result,
                {
                  inputType: "text",
                  label: "Palavra-chave",
                  name: "name",
                  placeholder: "Ex: Marketing Digital",
                  error: errors?.keyword,
                  value: values.keyword
                },
                {
                  value: ($$value) => {
                    values.keyword = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(BaseDateRangeInput, "BaseDateRangeInput").$$render(
                $$result,
                {
                  fromDate: values.fromDate,
                  toDate: values.toDate
                },
                {
                  fromDate: ($$value) => {
                    values.fromDate = $$value;
                    $$settled = false;
                  },
                  toDate: ($$value) => {
                    values.toDate = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div>${validate_component(Button, "Button").$$render(
                $$result,
                {
                  type: "button",
                  class: "lg:h-11 lg:mt-6 mt-6 lg:w-24 w-full",
                  disabled: searchingTendencies
                },
                {},
                {
                  default: () => {
                    return `${`Buscar`}`;
                  }
                }
              )}</div>`;
            }
          }
        )} ${validate_component(BaseGraph, "BaseGraph").$$render(
          $$result,
          {
            title: "Análise de Tendências",
            class: "mt-8",
            options: optionsTendenciesGraph
          },
          {
            options: ($$value) => {
              optionsTendenciesGraph = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userAuthStore();
  return $$rendered;
});
export {
  Page as default
};
