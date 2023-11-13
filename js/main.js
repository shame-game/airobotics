

const btttt = document.querySelectorAll('.btttt');
const bg = document.querySelectorAll('.bg');
const box = document.querySelectorAll('.box');
const clost = document.querySelectorAll('.clost')

btttt.forEach((bt, index) => {
    const bgg = bg[index];
    const boxx = box[index];
    bt.onclick = function () {
        bgg.setAttribute('style', 'display: flex');
        boxx.setAttribute('style', 'display: flex');
        document.querySelector('body').setAttribute('style','overflow: hidden;')
    }
});

bg.forEach((btt, index) => {
    const boxx = box[index];
    btt.onclick = function () {
        btt.setAttribute('style', 'display: none');
        boxx.setAttribute('style', 'display: none');
        document.querySelector('body').setAttribute('style','overflow: auto;')
    }
});

clost.forEach((bttt, index) => {
    const bggg = bg[index];
    const boxxx = box[index];
    bttt.onclick = function () {
        boxxx.setAttribute('style', 'display: none');
        bggg.setAttribute('style','display: none');
        document.querySelector('body').setAttribute('style','overflow: auto;')
    }
});