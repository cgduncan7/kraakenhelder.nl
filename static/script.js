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

function setupForm() {
  const form = document.getElementById('signupForm')
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const [name, email, phoneNumber] = [
      e.currentTarget.name.value,
      e.currentTarget.email.value,
      e.currentTarget.phoneNumber.value
    ]
    const resp = await fetch(
      'https://home.collinduncan.com/server.kraakenhelder.nl/registration',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phoneNumber }),
      }
    )
    form.reset()
    if (resp.ok) {
      window.alert('Inschrijving voltooid!')
    } else {
      window.alert('Er is iets misgegaan.')
    }
  })
}

setupForm()
setupMobileBars()