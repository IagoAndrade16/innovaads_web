import { e as error } from "../../../../chunks/index.js";
const load = ({ params }) => {
  const status = +params.code;
  if (isNaN(status) || status < 400 || status > 599) {
    throw error(500, "Wrong code");
  } else {
    const code = status;
    throw error(code, "Not found");
  }
};
export {
  load
};
