export const createEl = ({ tag, className, text, checked, innerHTML, ...attrs }) => {
  const element = document.createElement(tag)

  if (className) element.className = className
  if (text) element.textContent = text
  if (checked) element.checked = checked
  if (tag === 'input' && !attrs.type) element.setAttribute('type', 'text')
  if (innerHTML) element.innerHTML = innerHTML

  Object.keys(attrs).forEach((attrName) => {
    element.setAttribute(attrName, attrs[attrName])
  })

  return element
}

/*
<li class="contact-item">
  <a href="/detail.html">name</a>
</li>
*/
export const renderContact = (contact, parent) => {
  const li = createEl({ tag: 'li', className: "contact-item" })
  const link = createEl({
    tag: 'a', 
    href: '/detail.html',
    text: contact.name
  })
  li.append(link)
  parent.append(li)
}

export const renderContactPage = (data) => {
  console.log('renderContactPage', data)
}