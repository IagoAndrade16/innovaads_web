import type { JsObject } from '$lib/types/JsObject';
import Toastify, { type Options as ToastifyOptions } from 'toastify-js'
import "toastify-js/src/toastify.css"

type Gravity = "top" | "bottom";
type Position = "center" | "left" | "right";

export class ToastService {
  static success(message: string, styleConfig?: JsObject) {
    Toastify({
      text: message,
      duration: styleConfig?.duration as number || 3000,
      gravity: styleConfig?.gravity as Gravity || "top",
      position: styleConfig?.position as Position || "center",
      style: {
        background: "#FE795D",
        ...styleConfig,
      }
    }).showToast();
  }

  static error(message: string, styleConfig?: JsObject) {
    Toastify({
      text: message,
      duration: styleConfig?.duration as number || 3000,
      gravity: styleConfig?.gravity as Gravity || "top",
      position: styleConfig?.position as Position || "center",
      style: {
        background: "#FF6347",
        ...styleConfig,
      }
    }).showToast();
  }

  static info(message: string, styleConfig?: JsObject) {
    Toastify({
      text: message,
      duration: styleConfig?.duration as number || 3000,
      gravity: styleConfig?.gravity as Gravity || "top",
      position: styleConfig?.position as Position || "center",
      style: {
        background: "#4CAF50",
        ...styleConfig,
      }
    }).showToast();
  }

  static show(params: ToastifyOptions) {
    Toastify(params).showToast();
  }
}