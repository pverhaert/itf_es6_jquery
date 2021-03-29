const prefix = 'section ';
let selector = null;
let nodes = null;
const result = document.querySelector('pre');

const resetOutline = () => {
    document.querySelectorAll('*').forEach((node) => {
        node.classList.remove('outline');
    });
};

const setOutline = (e) => {
    console.log('reset outline', e);
    selector = e.target.value;
    try {
        nodes = document.querySelectorAll(`${prefix} ${selector}`);
        if (selector !== '') {
            console.log('nodes', nodes);
            nodes.forEach((node) => {
                node.classList.add('outline');
            });
            result.innerHTML = `Selector <mark>'${selector}'</mark> refers to <mark>${nodes.length}</mark> nodes
<b>JS</b>: document.querySelectorAll('${selector}').forEach((node) => { node.classList.add('outline'); });
<b>jQuery</b>: $('${selector}').addClass('outline');`;
        } else {
            result.innerHTML = '&nbsp;';
        }
    } catch (err) {
        result.innerHTML = `<mark class="secondary">'${selector}'</mark> is not a valid selector<br>&nbsp;<br>&nbsp;`;
    }
};

document.querySelector('#selector').addEventListener('keyup', (e) => {
    resetOutline();
    setOutline(e);
});
