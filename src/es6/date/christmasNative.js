// get the current date
const now = new Date();
// get next Christmas
const christmas = new Date(now.getFullYear(), 11, 25);
// set Christmas to next year if the current date is after Christmas but before New Year
if (now.getMonth() === 11 && now.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}

// calculate the difference (in ms) between today and Christmas
const diffMs = christmas - now;

// convert the difference in ms back to days
const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

// output
document.querySelector('.border-green').innerHTML = `
        <p>Today is: <b>${now.toLocaleDateString()}</b></p>
        <p>We are <b>${diffDays}</b> days away from Christmas</p>
    `;
