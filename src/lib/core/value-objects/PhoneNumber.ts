import Utils from "../Utils";

export class PhoneNumber {
  private value: string;

  constructor(value: string) {
    const valueCleaned = Utils.clean(value);

    if(valueCleaned.length !== 11) {
      throw new Error('Invalid phone number');
    }

    this.value = valueCleaned;
  }

  static parse(phoneNumber: string): PhoneNumber {
    return new PhoneNumber(phoneNumber);
  }

  toString(): string {
    return this.value;
  }

  fullNumber(): string {
    return this.value;
  }

  formatted(): string {
    return Utils.applyMask('(00) 00000-0000', this.value);
  }

  withoutDDD(): string {
    return this.value.slice(2);
  }
}