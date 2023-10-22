/**
 * Mobile menu expand
 */

function setupMenuExpand() {
  const element = document.querySelector('div.leftbar')
  if (element == null) return
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
}

setupMenuExpand()