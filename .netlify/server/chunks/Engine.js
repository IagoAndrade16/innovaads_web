import "./client.js";
import { a as userAuthStore, u as userStore } from "./userStore.js";
import moment from "moment";
class MomentUtils {
  static formattedDate(date, format) {
    return MomentUtils.toBrazilianTimezone(date).format(format);
  }
  static toBrazilianTimezone(value) {
    return moment(value).add(3, "hours");
  }
  static toDate(value) {
    if (MomentUtils.isBraziliamFormat(value)) {
      const [day, month, year] = value.split("/");
      return moment(`${year}-${month}-${day}`).toDate();
    }
    return moment(value).toDate();
  }
  static isBraziliamFormat(value) {
    return moment(value, "DD/MM/YYYY").isValid();
  }
}
class Engine {
  static scrollToTop() {
    return;
  }
  static async assert(props, redirect = "/") {
    return;
  }
  static canUsePlatform(user) {
    if (!user) return false;
    if (user.subscriptionStatus === "active") return true;
    if (user.subscriptionStatus === "canceled") {
      const nowFormatted = MomentUtils.formattedDate(/* @__PURE__ */ new Date(), "YYYY-MM-DD");
      const canUsePlatformUntilFormatted = MomentUtils.formattedDate(user.canUsePlatformUntil, "YYYY-MM-DD");
      if (canUsePlatformUntilFormatted && nowFormatted) return true;
      return false;
    }
    if (!user.subscriptionStatus) {
      if (user.daysRemainingForTrial > 0) return true;
      return false;
    }
    return false;
  }
  static async back() {
    return;
  }
  static async navigateTo(page, replaceState) {
    return;
  }
  static copyToClipboard(text) {
    return;
  }
  static logout(redirect = "/") {
    userAuthStore.set(null);
    userStore.set(null);
    if (redirect != null) Engine.navigateTo(redirect);
  }
  static getTheme() {
    return "light";
  }
}
export {
  Engine as E,
  MomentUtils as M
};
