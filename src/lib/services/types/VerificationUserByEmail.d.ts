export type BaseResponseVerificationUserByEmail = {
  status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
}

export type VerifyCodeToValidateUserOutput = {
  status: 'SUCCESS' | 'UNKNOWN' | 'INVALID_CODE' | 'UNAUTHORIZED';
}

export type VerifyCodeToValidateUserInput = {
  code: string;
  token: string;
}