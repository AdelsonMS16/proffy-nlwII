//Pocurar o botão
//Quando clicar no botão
document.querySelector('#add-time').addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
  // Duplicar os campos. Que campos?
  const newFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true);
  // Pega os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll('input');
  //para cada campo limpar
  fields.forEach(function (field) {
    field.value = '';
  });
  //Colocar na página: Onde??
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
