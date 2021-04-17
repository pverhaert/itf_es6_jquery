// get the current date
const now = luxon.DateTime.now(); // also try luxon.DateTime.local(2021, 12, 26);
// get next Christmas
let christmas = luxon.DateTime.local(now.year, 12, 25);

// set Christmas to next year if the current date is after Christmas but before New Year
if (now > christmas) christmas = christmas.plus({ years: 1 });

// convert the difference in ms back to days
const diffDays = Math.ceil(christmas.diff(now, 'days').days);

// output
document.querySelector('.border-green').innerHTML = `
        <p>Today is: <b>${now.toFormat('cccc, dd-LL-yyyy')}</b></p>
        <p>We are <b>${diffDays}</b> days away from Christmas</p>
        <hr>
        <p>Vandaag is het:  <b>${now.setLocale('nl').toFormat('cccc, dd LLLL yyyy')}</b></p>`;
