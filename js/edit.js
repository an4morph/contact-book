import { formatDate } from "./utils/index.js"
const editData = JSON.parse(localStorage.getItem('editData'))

const [nameInput, number1Input, number2Input, dateInput] = 
  ['name', 'number1', 'number2', 'date']
    .map(name => document.querySelector(`#${name}-input`))

nameInput.value = editData.name
number1Input.value = editData.number1
number2Input.value = editData.number2
dateInput.value = formatDate(editData.birthday, 'input')
