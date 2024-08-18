import { ShallowRef } from 'vue'

export interface ILayoutComposable {
  layout: ShallowRef<any>,
  isMobile: Ref<boolean>,
}
