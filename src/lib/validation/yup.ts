/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JsObject } from '$lib/types/JsObject';
import * as yup from 'yup';

export default class YupValidation {
	public static async validateSchema(schema: yup.AnyObjectSchema, values: JsObject): Promise<JsObject | null> {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(values, { abortEarly: false });
			// alert(JSON.stringify(values, null, 2));
			return null;
		} catch (err: any) {
			return err.inner.reduce((acc: any, err: any) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
	}

	static formatYupErrors(err: yup.ValidationError): JsObject {
		return err.inner.reduce((acc, err) => ({ ...acc, [err.path as string]: err.message }), {});
	}

	public static schemaWith(shape: yup.ObjectShape): unknown {
		return yup.object().shape(shape);
	}
}
