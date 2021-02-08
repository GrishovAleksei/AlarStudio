function clickHandler(props) {
  switch(props.type){
    case('add'):
      addPerson();
      refresh();
      break;
    case('el'):
      console.log(props.el)
      props.el.innerHTML = `<input value="${props.el.innerHTML}" onchange="console.log(value)"/>`;
      visibilityHandler('visible');
      props.el.ondblclick = (e) => false;
      break;
    case('del'):
      contacts.splice(props.index, 1);
      saveToStorage();
      refresh();
      break;
    case('save'):
      saveToStorage();
      visibilityHandler('hidden');
      refresh();
      break;
    default:
      return false;
  }

  function addPerson() {
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;
    contacts.push({name, phone});
    saveToStorage();
    document.getElementById("nameInput").value = '';
    document.getElementById("phoneInput").value = '';
  }
  function saveToStorage() {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }
  function refresh() {
    const table = document.querySelector('#table');
    table.innerHTML = render('table', {list: contacts});
  }
  function visibilityHandler(value) {
    document.getElementById('saveButton').style.visibility = value;
  }
}
