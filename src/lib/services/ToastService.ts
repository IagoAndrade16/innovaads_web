import Toastify, { type Options as ToastifyOptions } from 'toastify-js'
import "toastify-js/src/toastify.css"

export class ToastService {
  static success(message: string) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#FE795D",
      }
    }).showToast();
  }

  static error(message: string) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#FF6347",
      }
    }).showToast();
  }

  static info(message: string) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();
  }

  static show(params: ToastifyOptions) {
    Toastify(params).showToast();
  }
}