import { getContactDetail } from './utils/api.js'
import { renderContactPage } from './utils/creators.js'

const id = new URLSearchParams(window.location.search).get('id')

getContactDetail(id)
  .then((data) => {
    renderContactPage(data)
  })
  .catch(() => {
    // обработка ошибки
  })
  .finally(() => {
    // убирать loader
  })

  