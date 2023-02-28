import { urlCreator } from './index.js'

const url = urlCreator('http://localhost:1717')

export const getContacts = async () => {
  const response = await fetch(url('contacts'))
  const contacts = await response.json()
  return contacts
}

export const getContactDetail = async (id) => {
  const response = await fetch(url('contacts/detail', id))
  const contact = await response.json()
  return contact
}

export const editContact = async (data, id) => {
  const response = await fetch(url('contacts/update', id), {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}