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

  static async success(options: SuccessDialogOptions) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: 'success',
      title: options.title,
      text: options.message,
    })
  }

  static async error(options: ErrorDialogOptions) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: 'error',
      title: options.title,
      text: options.message,
    })
  }

  static async info(options: InfoDialogOptions) {
    await Swal.fire({
      ...DialogService.setupOptions,
      icon: 'info',
      title: options.title,
      text: options.message,
    })
  }

  static async show(options: SweetAlertOptions) {
    await Swal.fire({
      ...DialogService.setupOptions,
      ...options,
    })
  }

  static async confirm(options: SweetAlertOptions): Promise<boolean> {
    const { isConfirmed } = await Swal.fire({
      ...DialogService.setupOptions,
      showCancelButton: true,
      cancelButtonText: 'Não, voltar',
      confirmButtonText: 'Sim, continuar',
      ...options,
    })

    return isConfirmed
  }
}