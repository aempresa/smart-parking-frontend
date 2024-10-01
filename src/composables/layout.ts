import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue'
import { ILayoutComposable } from '@/interfaces/layout'

export const useLayout = (): ILayoutComposable => {
  const layout = shallowRef()
  const isMobile = ref(false)

  const updateLayout = () => {
    const width = window.innerWidth
    isMobile.value = width < 768
    console.log(isMobile.value)
    if (width < 768) {
      layout.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/layouts/LayoutMobile.vue'),
      )
    } else {
      layout.value = defineAsyncComponent(() =>
        // @ts-ignore
        import('@/components/layouts/LayoutDesktop.vue'),
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

  return { layout, isMobile }
}
