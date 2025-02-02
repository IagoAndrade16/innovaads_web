import type { Package } from "$lib/types/IPackage"

export interface IUser {
  name: string
  email: string
  phone: string
  isOnTrial: boolean
  daysRemainingForTrial: number
  packageId: string | null
  verified2fa: boolean
  package: Package | null
}