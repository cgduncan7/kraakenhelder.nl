/**
 * Mobile menu expand
 */

function setupMobileBars() {
  const elements = document.querySelectorAll('div.bar')
  if (elements == null || elements.length === 0) return
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      const isMinimized = !element.classList.contains('maximized')
      if (isMinimized) {
        element.classList.remove('minimized')
        element.classList.add('maximized')
      } else {
        element.classList.remove('maximized')
        element.classList.add('minimized')
      }
    })
  })
}

setupMobileBars()