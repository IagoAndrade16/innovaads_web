import * as yup from "yup";
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
  YupValidation as Y
};
