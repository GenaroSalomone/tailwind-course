const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errorMsg = document.getElementById('error-msg')

linkForm.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()
  const inputValue = input.value

  if (inputValue === '') {
    errorMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
  } else if (!validURL(inputValue)) {
    errorMsg.innerHTML = 'Please enter a valid URL'
  } else {
    errorMsg.innerHTML = ''
    input.classList.remove('border-red')
  }
}

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}
