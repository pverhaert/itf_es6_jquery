class StoreTabs {
    constructor(key) {
        this.key = key; // local storage key
        this.checkboxes = document.querySelectorAll('[type=checkbox]'); // get all checkboxes on the page
        this.labels = document.querySelectorAll('label'); // get all labels on the page
        // run these methods when instantiating the object
        this.addIdToLabels();
        this.getOpenTabs();
        this.storeOpenTabs();
    }

    addIdToLabels() {
        // add an id to every label, based on his for attribute
        // e.g: <label for='abc'> -> <label for='abc' id='abcLabel'>
        this.labels.forEach((label) => {
            label.id = `${label.htmlFor}Label`;
        });
    }

    getOpenTabs() {
        // get array of open tabs from local storage or create an empty array if the key don't exist in local storage
        const openIds = JSON.parse(localStorage.getItem(this.key)) || [];
        openIds.forEach((id) => {
            const checkbox = document.getElementById(id);
            // if the checkbox still exists on the page: then check it
            if (checkbox) checkbox.checked = 'checked';
        });
    }

    storeOpenTabs() {
        // loop over all the checkboxes
        this.checkboxes.forEach((checkbox) => {
            // ad a click event listener on every checkbox
            checkbox.addEventListener('click', (e) => {
                const openIds = [];
                const checked = document.querySelectorAll('[type=checkbox]:checked');
                // push the id's of the checked checkboxes to the array
                checked.forEach((item) => {
                    openIds.push(item.id);
                });
                if (openIds.length === 0) {
                    // if array is empty, remove it from local storage
                    localStorage.removeItem(this.key);
                } else {
                    // store the array in local storage
                    localStorage.setItem(this.key, JSON.stringify(openIds));
                }
                // jump to the anker of the label e.g:
                // <input id="abc"> jumps to <label for='abc' id='abcLabel'>
                window.location.href = `#${e.target.id}Label`;
            });
        });
    }
}
