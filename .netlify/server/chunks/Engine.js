import "./client.js";
import { a as userAuthStore, u as userStore } from "./userStore.js";
class Engine {
  static scrollToTop() {
    return;
  }
  static async assert(props, redirect = "/") {
    return;
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
  Engine as E
};
