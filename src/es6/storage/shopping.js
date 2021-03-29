const shoppingList = {
    key: 'shopping', // local storage key
    items: [
        {
            text: 'dummy item 1',
            isChecked: false,
        },
        {
            text: 'dummy item 2',
            isChecked: true,
        },
    ],

    init() {
        // get shopping items from local storage or use the default dummy items if the key don't exist in local storage
        if (localStorage.getItem('shopping')) {
            this.items = JSON.parse(localStorage.getItem(this.key));
        }
        this.drawList();
    },

    drawList() {
        // add the shopping list to div#.border-gray
        let list = '';
        this.items.forEach((item, index) => {
            list += `
              <div>
                <span class="fas fa-check"></span>
                <span class="fas fa-trash"></span>
                <div contenteditable class="${item.isChecked ? 'strike' : ''}">${item.text}</div>
            </div>  
            `;
        });
        document.querySelector('.border-gray').innerHTML = list;
        // save shopping list to local storage
        localStorage.setItem(this.key, JSON.stringify(this.items));

        // add event listeners to the newly created items (check icon, trash icon and contenteditable tag
        document.querySelectorAll('.fa-check').forEach(function (check, index) {
            check.addEventListener('click', function (e) {
                shoppingList.checkItem(index);
            });
        });
        document.querySelectorAll('.fa-trash').forEach(function (trash, index) {
            trash.addEventListener('click', function (e) {
                shoppingList.trashItem(index);
            });
        });
        document.querySelectorAll('[contenteditable]').forEach(function (update, index) {
            update.addEventListener('blur', function (e) {
                shoppingList.updateItem(index, e.target.innerHTML);
            });
        });
    },

    trashItem(index) {
        // delete one item from the shopping list
        // index === the index in the array
        this.items.splice(index, 1);
        this.drawList();
    },

    checkItem(index) {
        // toggle the state of `isChecked`
        this.items[index].isChecked = !this.items[index].isChecked;
        this.drawList();
    },

    updateItem(index, text) {
        // update the `text` value
        console.log(index, text);
        this.items[index].text = text;
        this.drawList();
    },

    addItem() {
        // add one item to te end of the shopping list
        console.log('add');
        this.items.push({
            text: '...',
            isChecked: false,
        });
        this.drawList();
    },
};

// initialize the shopping list when the page is loaded
shoppingList.init();
// add event listener to the 'Add item' button
document.getElementById('add').addEventListener('click', () => shoppingList.addItem());
