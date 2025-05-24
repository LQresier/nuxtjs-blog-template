export function useActiveAnchor() {
  const activeAnchor = ref('')

  onMounted(() => {
    const anchors = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter(el => el.id)
      .map(el => {
        return {
          id: el.id,
          top: el.getBoundingClientRect().top + window.scrollY - 20
        }
      })

    const onScroll = () => {
      const scrollY = window.scrollY
      
      for (let i = anchors.length - 1; i >= 0; i--) {
        if (scrollY >= anchors[i].top) {
          activeAnchor.value = anchors[i].id
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })
  })

  return {
    activeAnchor
  }
}