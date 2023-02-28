const editData = JSON.parse(localStorage.getItem('editData'))

const [nameInput, number1Input, number2Input, dateInput] = 
  ['name', 'number1', 'number2', 'date']
    .map(name => document.querySelector(`#${name}-input`))
