function component() {
  const el = document.createElement('h1');
  const text = document.createTextNode('Big Ol\' Test Line.');
  el.appendChild(text);

  return el;
}

document.body.appendChild(component());
