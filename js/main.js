const scriptURL = 'https://script.google.com/macros/s/AKfycbw80bgt7eB6jiaJv3YgaBJB8QuR7n38XrP6zcHZy3SmjW1VD7qCfErpXUdxwqa64v0Now/exec'

document.querySelector('#formsign').onsubmit = (e) => {
    e.preventDefault();
    /* truy cập vào tp html tương ứng */
    let namephoj = document.querySelector('input[name="nameph"]');
    let phoneoj = document.querySelector('input[name="phone"]');
    let namehsoj = document.querySelector('input[name="namehs"]');
    let ageoj = document.querySelector('input[name="age"]');
    let textoj = document.querySelector('input[name="text"]');
    /* lấy giá trị */
    let nameph = namephoj.value;
    let phone = phoneoj.value;
    let namehs = namehsoj.value;
    let age = ageoj.value;
    let text = textoj.value;

    /**/
    let requioj = document.querySelectorAll('.requi');
    if (requioj.length > 0) {
        requioj.forEach((item) => {
            item.innerText = '';
        })
    }
    let errors = {};
    if (nameph.trim() == '') {
        errors['nameph'] = '';
        namephoj.parentElement.querySelector('.requi').innerText = errors['nameph']
    }
    if (phone.length < 7 || phone.length > 11) {
        errors['phone'] = '';
        phoneoj.parentElement.querySelector('.requi').innerText = errors['phone']
    }
    if (namehs.trim() == '') {
        errors['namehs'] = '';
        namehsoj.parentElement.querySelector('.requi').innerText = errors['namehs']
    }
    if (age < 0) {
        errors['age'] = '';
        ageoj.parentElement.querySelector('.requi').innerText = errors['age']
    }
    if (text.trim() == '') {
        errors['text'] = '';
        textoj.parentElement.querySelector('.requi').innerText = errors['text']
    }
    if (Object.keys(errors).length == 0) {
        const form = document.forms['contact-form']
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Bạn đã đăng ký thành công!"))
                .then(() => { window.location.reload(); })
                .catch(error => console.error('Error!', error.message))
        })
    } else{
        alert('Vui lòng kiểm tra lại thông tin!')
    }
}

const btttt = document.querySelectorAll('.btttt');
const bg = document.querySelectorAll('.bg');
const box = document.querySelectorAll('.box');

btttt.forEach((bt, index) => {
    const bgg = bg[index];
    const boxx = box[index];
    bt.onclick = function () {
        bgg.setAttribute('style', 'display: flex');
        boxx.setAttribute('style', 'display: flex');
    }
});

bg.forEach((btt, index) => {
    const boxx = box[index];
    btt.onclick = function () {
        btt.setAttribute('style', 'display: none');
        boxx.setAttribute('style', 'display: none');
    }
});
