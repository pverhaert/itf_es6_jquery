const karaoke = document.getElementById('lyrics');
const heroes = {
    line1: '<p><span>1</span> I, I will be king</p>',
    line2: '<p><span>2</span> And you, you will be queen</p>',
    line3: '<p><span>3</span> Though nothing will drive them away</p>',
    line4: '<p><span>4</span> We can beat them, just for one day</p>',
    line5: '<p><span>5</span> We can be heroes, just for one day</p>',
};

const delay = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function addLine() {
    karaoke.innerHTML += '<p>--- START --------------------------------------------</p>';
    await delay();
    karaoke.innerHTML += heroes.line1;
    await delay();
    karaoke.innerHTML += heroes.line2;
    await delay();
    karaoke.innerHTML += heroes.line3;
    await delay();
    karaoke.innerHTML += heroes.line4;
    await delay();
    karaoke.innerHTML += heroes.line5;
    await delay();
    karaoke.innerHTML += '<p>--- END ----------------------------------------------</p>';
    console.log('lyrics written to page');
}
addLine();
