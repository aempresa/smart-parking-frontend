import { LinkNav } from '@/entities/app'

export interface IAppStoreState {
  navLinks: LinkNav[]
}

export interface IAppStore {
  stateApp: ComputedRef<IAppStoreState>,
}
