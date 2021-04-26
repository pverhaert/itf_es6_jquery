function clock() {
    // make new Date-object containing the current date/time
    const now = new Date();

    // DIGITAL clock
    // select the (text) element for the digital clock and give it the correct content
    // now.toLocaleTimeString('en-GB') converts now to HH:MM:SS format
    document.getElementById('digitalTime').textContent = now.toLocaleTimeString('en-GB');

    // ANALOG clock
    // get seconds, minutes and hours (0-12) from the object now
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // convert 24 hours to 12 hours

    // select the (line) elements for the hands of the analog clock and rotate them according to the values of seconds, minutes and hours
    // 1 second (360/60 = 6 degrees)
    document.getElementById('sec').setAttribute('transform', `rotate(${seconds * 6}, 150, 150)`);
    // 1 minute (= 6 degrees)
    document.getElementById('min').setAttribute('transform', `rotate(${minutes * 6}, 150, 150)`);
    // 1 hour (360/12 = 30 degrees) + .5 degrees for every minute (every 60 minutes an additional 30 degrees)
    document.getElementById('hour').setAttribute('transform', `rotate(${hours * 30 + minutes * 0.5}, 150, 150)`);
}

clock(); // start clock() immediately
setInterval(clock, 1000); // execute clock() repeatedly (every second = 1000ms)
