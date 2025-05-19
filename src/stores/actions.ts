import type { Ref } from 'vue'

export const createClickOutsideHandler = (
  elementSelectors: string[],
  excludeSelectors: string[],
  stateToToggle: Ref<boolean>,
): ((event: MouseEvent) => void) => {
  return (event: MouseEvent): void => {
    const target = event.target as HTMLElement

    for (const selector of excludeSelectors) {
      if (target.classList.contains(selector)) {
        return
      }
    }

    const elements = elementSelectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector)),
    )

    const isClickInside = elements.some((element) => element.contains(target))

    if (!isClickInside) {
      stateToToggle.value = false
    }
  }
}
