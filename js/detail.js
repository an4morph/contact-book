import { getContactDetail } from './utils/api.js'
import { renderContactPage } from './utils/creators.js'

getContactDetail()
  .then((data) => {
    renderContactPage(data)
  })
  .catch(() => {
    // обработка ошибки
  })
  .finally(() => {
    // убирать loader
  })