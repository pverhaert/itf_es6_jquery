const colors = ['darkred', 'green', 'blue', 'rgb(128,38,193)', '#0584b8'];
let block = '';

colors.forEach(function (color, i) {
    block += `<div style="border: solid 2px ${color}">
                <p style="color: ${color}">
                  I'm block <b>${i}</b> with a <b>${color}</b> border
                </p>
             </div>`;
});

document.getElementById('blocks').innerHTML = block;
