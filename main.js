var container = document.querySelector('.container');
var addBtn = document.querySelector('.addBtn');
var input = document.querySelector('.inputField');

addBtn.addEventListener('click', addItem);

function addItem() {
    if(input.value != '') {
        new CreateItem(input.value);
    }
    input.value = '';
}

window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        addItem();
    }
})

class CreateItem {
    constructor(itemName) {
        var item = document.createElement('input');
        item.type = 'text';
        item.value = itemName;
        item.classList.add('item');
        item.disabled = true;

        var main = document.createElement('div');
        main.classList.add('main');

        var editBtn = document.createElement('button');
        editBtn.classList.add('editBtn')
        editBtn.innerHTML = 'EDIT';

        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.innerHTML = 'DELETE';

        container.appendChild(main);
        main.appendChild(item)
        main.appendChild(editBtn)
        main.appendChild(deleteBtn);

        editBtn.addEventListener('click', () => this.editItem(item));
        deleteBtn.addEventListener('click', () => this.deleteItem(main));
    }

    editItem(item) {
        item.disabled = !item.disabled;
    }

    deleteItem(main) {
        container.removeChild(main);
    }
}