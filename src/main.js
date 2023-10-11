const tasks = document.querySelectorAll('.task');
const toDo = document.querySelector('#toDo')
const doing = document.querySelector('#doing');
const done = document.querySelector('#done');

tasks.forEach((item) => {
    //Percorrendo todos os elementos task e colocando um evento de 'arrasta'.
    item.addEventListener('dragstart', (e) => {
        // Ao arrasta, estou pegando os elementos e armazenando em um variavel;
        let task = e.target;
        // Vou adicionar o evento de a minha divs o evento de arrasta sobre e previnir o funcionamento normal
        toDo.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        toDo.addEventListener('drop', () => {
        // Quando eu soltar o elemento na minha div, ele vai pega a minha task e atribuir a minha div e logo apos vai limpa o elemento da div original.
            toDo.appendChild(task);
            task = null;
        });
        doing.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        doing.addEventListener('drop', () => {
            doing.appendChild(task);
            task = null;
        });
        done.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        done.addEventListener('drop', () => {
            done.appendChild(task);
            task = null;
        });
    });
});