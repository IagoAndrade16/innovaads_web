
export type UserSubscriptionStatus = 'active' | 'failed' | 'canceled';
export interface IUser {
  name: string
  email: string
  phone: string
  isOnTrial: boolean
  daysRemainingForTrial: number
  packageId: string | null
  verified2fa: boolean
  subscriptionStatus: UserSubscriptionStatus | null
  canUsePlatformUntil: Date | null
  facebookAccount: {
    userIdOnFacebook: string;
  } | null;
}