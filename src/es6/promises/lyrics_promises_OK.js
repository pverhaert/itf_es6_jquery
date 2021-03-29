const lyrics = document.getElementById('lyrics');
const heroes = {
    line1: '<p><span>1</span> I, I will be king</p>',
    line2: '<p><span>2</span> And you, you will be queen</p>',
    line3: '<p><span>3</span> Though nothing will drive them away</p>',
    line4: '<p><span>4</span> We can beat them, just for one day</p>',
    line5: '<p><span>5</span> We can be heroes, just for one day</p>',
};

const addLine = function (line) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lyrics.innerHTML += line;
            return resolve(`ok:  ${line} written`);
        }, 1000);
    });
};

lyrics.innerHTML += '<p>-------------------------------------------------</p>';
addLine(heroes.line1)
    .then((resolved) => {
        console.log(resolved);
        return addLine(heroes.line2);
    })
    .then((resolved) => {
        console.log(resolved);
        return addLine(heroes.line3);
    })
    .then((resolved) => {
        console.log(resolved);
        return addLine(heroes.line4);
    })
    .then((resolved) => {
        console.log(resolved);
        return addLine(heroes.line5);
    })
    .then((resolved) => {
        console.log(resolved);
        return addLine('<p>-------------------------------------------------</p>');
    })
    .then(() => console.log('lyrics written to page'));
