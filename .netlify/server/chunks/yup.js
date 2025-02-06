import { E as Engine } from "./Engine.js";
import Swal from "sweetalert2";
import * as yup from "yup";
class DialogService {
  static setupOptions = {
    color: Engine.getTheme() === "dark" ? "#fff" : "#333",
    background: Engine.getTheme() === "dark" ? "#333" : "#fff",
    confirmButtonColor: "#EF562F"
  };
  static async success(options) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: "success",
      title: options.title,
      text: options.message
    });
  }
  static async error(options) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: "error",
      title: options.title,
      text: options.message
    });
  }
  static async info(options) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: "info",
      title: options.title,
      text: options.message
    });
  }
  static async show(options) {
    await Swal.fire({
      ...DialogService.setupOptions,
      ...options
    });
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
export {
  DialogService as D,
  YupValidation as Y
};
