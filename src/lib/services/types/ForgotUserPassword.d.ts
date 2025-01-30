export type VerifyPasswordRecoveryCodeInput = {
  code: string;
  email: string;
}

export type ResetPasswordInput = {
  email: string;
  newPassword: string;
}

type BaseApiResponseForgotPassword =  'SUCCESS' | 'BAD_REQUEST' | 'USER_NOT_FOUND'

export type BaseForgotUserPasswordOutput = {
  status: BaseApiResponseForgotPassword;
}

export type VerifyPasswordRecoveryCodeOutput = { 
  status: BaseApiResponseForgotPassword | 'INVALID_CODE';
};