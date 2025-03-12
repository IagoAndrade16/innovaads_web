import YupValidation from '$lib/validation/yup';
import * as yup from 'yup';

export class Enviroment {
  static varsSchema = yup.object().shape({
    VITE_GOOGLE_CLIENT_ID: yup.string().required(),
    VITE_GOOGLE_REDIRECT_URI: yup.string().required(),
    VITE_GOOGLE_AUTH_BASE_URL: yup.string().required(),
    VITE_GOOGLE_SCOPES: yup.array().of(yup.string()).required().default([
      'https://www.googleapis.com/auth/adwords',
    ]),
  });

  static vars: yup.InferType<typeof Enviroment.varsSchema>;

  static async init() {
    const completeEnv = import.meta.env;
    
    try {
      Enviroment.vars = this.varsSchema.validateSync(completeEnv, { abortEarly: false });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
  			const formatted = YupValidation.formatYupErrors(err);
  			throw new Error(
  				JSON.stringify({
  					environment: formatted,
  				}),
  			);
  		}
    }
  }
}