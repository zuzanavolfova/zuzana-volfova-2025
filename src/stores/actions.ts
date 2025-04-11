import type { Ref } from 'vue'
export const createClickOutsideHandler = (
  //the array of classes of target elements to check if the click was inside
  elementSelectors: string[],
  //the array excluded elements. e.g. The classes of element that opens the dialog/dropdown
  excludeSelectors: string[],
  //the variable that handle element
  stateToToggle: Ref<boolean>,
): ((event: MouseEvent) => void) => {
  return (event: MouseEvent): void => {
    const target = event.target as HTMLElement

    for (const selector of excludeSelectors) {
      if (target.classList.contains(selector)) {
        return
      }
    }
    // Check if the click was inside any of the target elements
    const elements = elementSelectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector)),
    )

    const isClickInside = elements.some((element) => element.contains(target))

    if (!isClickInside) {
      stateToToggle.value = false
    }
  }
}
