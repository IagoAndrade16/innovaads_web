export interface IUser {
  name: string
  email: string
  phone: string
  isOnTrial: boolean
  daysRemainingForTrial: number
  packageId: string | null
  verified2fa: boolean
}