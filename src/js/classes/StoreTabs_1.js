class StoreTabs {
    constructor(key) {
        this.key = key; // key for local storage
        this.getOpenTabs(); // run this methode when instantiating the object
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

    storeOpenTabs(checkboxes) {
        // loop over all the checkboxes
        checkboxes.forEach((checkbox) => {
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
                // jump to the anker of the label  (id="xxxLabel"), next to the checkbox
                window.location.href = `#${e.target.id}Label`;
            });
        });
    }
}
