(() => {
  const table = document.querySelector('#table');
  table.innerHTML = render('table', {list: contacts});

  const input = document.querySelector('#input');
  input.innerHTML = render('input');
})();
