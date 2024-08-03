import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue'

export const useLayout = () => {
  const layout = shallowRef()

  const updateLayout = () => {
    const width = window.innerWidth
    if (width < 768) {
      layout.value = defineAsyncComponent(() =>
        import('@/components/templates/LayoutSmall.vue'),
      )
    } else {
      layout.value = defineAsyncComponent(() =>
        import('@/components/templates/LayoutLarge.vue'),
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

  return { layout }
}
