const phoneRegExp = /^(\+?-?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

function validateForm() {
  const name = document.getElementById("nameInput").value;
  const phone = document.getElementById("phoneInput").value;
  console.log(name);
  if (name === "" || phone === "") {
    alert("Name must be filled out");
    return false;
  }
  if (phoneRegExp.test(phone)) {
    clickHandler({type: 'add'});
  } else alert("Phone must be valid");
}