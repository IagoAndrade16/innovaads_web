import { U as Utils } from "./DialogService.js";
class PhoneNumber {
  value;
  constructor(value) {
    if (!value) {
      throw new Error("Phone number is required");
    }
    const valueCleaned = Utils.clean(value);
    if (valueCleaned.length !== 11) {
      throw new Error("Invalid phone number");
    }
    this.value = valueCleaned;
  }
  static parse(phoneNumber) {
    return new PhoneNumber(phoneNumber);
  }
  static isValid(phoneNumber) {
    try {
      new PhoneNumber(phoneNumber);
      return true;
    } catch {
      return false;
    }
  }
  cleaned() {
    return this.value;
  }
  fullNumber() {
    return this.value;
  }
  formatted() {
    return Utils.applyMask("(00) 00000-0000", this.value);
  }
  withoutDDD() {
    return this.value.slice(2);
  }
}
export {
  PhoneNumber as P
};
