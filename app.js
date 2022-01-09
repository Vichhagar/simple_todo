const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search input')

const itemTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length) {
        itemTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter(e => !e.textContent.toLowerCase().includes(term))
        .forEach((e) => e.classList.add('filtered'));

    Array.from(list.children)
        .filter(e => e.textContent.toLowerCase().includes(term))
        .forEach((e) => e.classList.remove('filtered'));
};

searchForm.addEventListener('keyup', e => {
    const term = searchForm.value.trim().toLowerCase();
    filterTodos(term);
});