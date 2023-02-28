import { getContactDetail } from './utils/api.js'
import { renderContactPage } from './utils/creators.js'

const editButton = document.querySelector('.edit-btn')
const id = new URLSearchParams(window.location.search).get('id')
let contactData = null

getContactDetail(id)
  .then((data) => {
    contactData = data
    renderContactPage(data)
  })
  .catch(() => {
    // обработка ошибки
  })
  .finally(() => {
    // убирать loader
  })

editButton.addEventListener('click', () => {
  localStorage.setItem('editData', JSON.stringify(contactData))
  // window.location.href = `/edit.html?id=${id}`
})

  