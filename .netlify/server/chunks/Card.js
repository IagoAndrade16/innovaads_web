import { c as create_ssr_component, v as validate_component, e as escape } from "./ssr.js";
import { C as Card } from "./DialogService.js";
import { H as Heading } from "./Heading.js";
const Card_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle = "" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "shadow-sm " + clazz }, {}, {
    default: () => {
      return `<div class="mb-4 mt-px lg:mb-0">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "-ml-0.25 mb-2 text-xl font-semibold dark:text-white"
        },
        {},
        {
          default: () => {
            return `${escape(title)}`;
          }
        }
      )} ${subtitle ? `<span class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(subtitle)}</span>` : ``}</div> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Card_1 as C
};
