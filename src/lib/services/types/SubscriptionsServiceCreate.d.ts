export type CreateSubscritionRequest = {
  packageId: string;
  bearerToken: string;
  payerData: PayerData;
  paymentData: PaymentData;
}

export type CreateSubscritionResponse = {
  status: 'SUCCESS' | 'USER_NOT_FOUND' | 'PACKAGE_NOT_FOUND' | 'INVALID_CUSTOMER' | 'INVALID_CARD'  | 'INVALID_PAYMENT' | 'UNAUTHORIZED' |'UNKNOWN';
}

export type PaymentData = {
  number: string;
  holderName: string;
  expMonth: string;
  expYear: string;
  cvv: string;
  billingAddress: BillingAddressData;
}

export type BillingAddressData = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  country: string;
  complement?: string;
}