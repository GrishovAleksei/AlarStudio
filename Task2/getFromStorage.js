contacts = JSON.parse(localStorage.getItem('myContacts'));
console.log(contacts)
const table = document.querySelector('#table');
table.innerHTML = render('table', {list: contacts});