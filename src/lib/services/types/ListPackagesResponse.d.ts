import type { Package } from "$lib/types/IPackage";

export interface ListPackagesResponse {
  status: 'SUCCESS' | 'UNKNOWN'
  data: {
    packages: Package[]
  } | null;
}