import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue'
import { ILayoutComposable } from '@/interfaces/layout'

export const useLayout = (): ILayoutComposable => {
  const layout = shallowRef()
  const bannerHome = shallowRef()

  const updateLayout = () => {
    const width = window.innerWidth
    if (width < 768) {
      layout.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/layouts/LayoutSmall.vue'),
      )
      bannerHome.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/templates/small/home/BannerHomeSmall.vue'),
      )
    } else {
      layout.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/layouts/LayoutLarge.vue'),
      )
      bannerHome.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/templates/large/home/BannerHomeLarge.vue'),
      )
    }
  }

  onMounted(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout)
  })

  return { layout, bannerHome }
}
