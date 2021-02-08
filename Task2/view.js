function render (Name, data) {
  templateName = Name + 'Template';
  const templateElement = document.getElementById(templateName);
  const templateSource = templateElement.innerHTML;
  renderFn = Handlebars.compile(templateSource);
  return renderFn(data);
}