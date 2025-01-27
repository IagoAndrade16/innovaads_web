import { w as writable } from "./index2.js";
import "node-localstorage/register.js";
class Store {
  static createStore(key, defaultValue) {
    const savedValue = Store.storageGet(key);
    const initialValue = savedValue != null ? JSON.parse(savedValue) : defaultValue;
    const user = writable(initialValue);
    user.subscribe((value) => Store.storageSet(key, JSON.stringify(value)));
    return user;
  }
  static storageGet(key) {
    return localStorage.getItem(key);
  }
  static storageSet(key, value) {
    localStorage.setItem(key, value);
  }
}
const userAuthStore = Store.createStore("userAuth", null);
const userStore = Store.createStore("user", null);
export {
  userAuthStore as a,
  userStore as u
};
