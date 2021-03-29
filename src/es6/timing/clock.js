setInterval(function () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // convert 24 hours to 12 hours

    // digital clock
    document.getElementById('digitalTime').textContent = now.toLocaleTimeString();

    // analog clock
    // 1 second (360/60 = 6 degrees)
    document.getElementById('sec').setAttribute('transform', `rotate(${seconds * 6}, 150, 150)`);
    // 1 minute (= 6 degrees)
    document.getElementById('min').setAttribute('transform', `rotate(${minutes * 6}, 150, 150)`);
    // 1 hour (360/12 = 30 degrees) + .5 degrees for every minute (every 60 minutes an additional 30 degrees)
    document.getElementById('hour').setAttribute('transform', `rotate(${hours * 30 + minutes * 0.5}, 150, 150)`);
}, 1000);
