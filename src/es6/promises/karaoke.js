const lyrics = document.getElementById('lyrics');
const heroes = {
    line1: '<p><span>1</span> I, I will be king</p>',
    line2: '<p><span>2</span> And you, you will be queen</p>',
    line3: '<p><span>3</span> Though nothing will drive them away</p>',
    line4: '<p><span>4</span> We can beat them, just for one day</p>',
    line5: '<p><span>5</span> We can be heroes, just for one day</p>',
};

const delay = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

lyrics.innerHTML += '<p>--- START --------------------------------------------</p>';
delay()
    .then(() => {
        lyrics.innerHTML += heroes.line1;
        return delay();
    })
    .then(() => {
        lyrics.innerHTML += heroes.line2;
        return delay();
    })
    .then(() => {
        lyrics.innerHTML += heroes.line3;
        return delay();
    })
    .then(() => {
        lyrics.innerHTML += heroes.line4;
        return delay();
    })
    .then(() => {
        lyrics.innerHTML += heroes.line5;
        return delay();
    })
    .then(() => {
        lyrics.innerHTML += '<p>--- END ----------------------------------------------</p>';
        return delay();
    })
    .then(() => console.log('lyrics written to page'));
