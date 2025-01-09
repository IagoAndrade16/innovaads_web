import Engine from '$lib/core/Engine';
import Swal, { type SweetAlertOptions } from 'sweetalert2';

interface SuccessDialogOptions {
  message: string
  title: string
}

interface ErrorDialogOptions {
  message: string
  title: string
}

interface InfoDialogOptions {
  message: string
  title: string
}

export class DialogService {
  static setupOptions = {
    color: Engine.getTheme() === 'dark' ? '#fff' : '#333',
    background: Engine.getTheme() === 'dark' ? '#333' : '#fff',
    confirmButtonColor: '#EF562F'
  }

  static success(options: SuccessDialogOptions) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: 'success',
      title: options.title,
      text: options.message,
    })
  }

  static error(options: ErrorDialogOptions) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: 'error',
      title: options.title,
      text: options.message,
    })
  }

  static info(options: InfoDialogOptions) {
    Swal.fire({
      ...DialogService.setupOptions,
      icon: 'info',
      title: options.title,
      text: options.message,
    })
  }

  static show(options: SweetAlertOptions) {
    Swal.fire({
      ...DialogService.setupOptions,
      ...options,
    })
  }
}