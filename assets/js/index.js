const input = document.querySelector('#text');
const ul = document.querySelector('ul')

input.addEventListener('keydown', ({key}) => {
    if ( key !== 'Enter' || input.value === '') return;

    let toDo = document.createElement('li');
    let descricao = document.createElement('p');
    let botao = document.createElement('img');
    botao.src = './assets/img/x-circle-fill.svg'
    botao.className = 'button'

    toDo.textContent = input.value; 

    toDo.append(descricao, botao);
    ul.append(toDo);

    input.value = '';

    toDo.addEventListener('click', () => toDo.classList.toggle('feito'));

    botao.addEventListener('click', () => toDo.remove())

})