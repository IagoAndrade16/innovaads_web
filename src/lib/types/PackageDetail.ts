export interface PackageDetail {
  id: string;
  description: string;
  packageId: string;
  deleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}