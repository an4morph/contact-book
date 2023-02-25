export const getContacts = async () => {
  const response = await fetch('http://localhost:1717/contacts')
  const contacts = await response.json()
  return contacts
}

export const getContactDetail = async (id) => {
  console.log('getContactDetail', id)
}