document.querySelector('#formsign').onsubmit = (e) =>{
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
    if(requioj.length>0){
        requioj.forEach((item)=> {
            item.innerText = '';
        })
    }
    let errors = {};
    if (nameph.trim()==''){
        errors['nameph'] = 'Họ tên không được để trống';
        namephoj.parentElement.querySelector('.requi').innerText = errors['nameph']
    }
    if (phone.trim()==''){
        errors['phone'] = 'Họ tên không được để trống';
        phoneoj.parentElement.querySelector('.requi').innerText = errors['phone']
    }
    if (namehs.trim()==''){
        errors['namehs'] = 'Họ tên không được để trống';
        namehsoj.parentElement.querySelector('.requi').innerText = errors['namehs']
    }
    if (age.trim()==''){
        errors['age'] = 'Họ tên không được để trống';
        ageoj.parentElement.querySelector('.requi').innerText = errors['age']
    }
    if (text.trim()==''){
        errors['text'] = 'Họ tên không được để trống';
        textoj.parentElement.querySelector('.requi').innerText = errors['text']
    }
    if(Object.keys(errors).length==0){
        alert('Đăng ký thành công')
    }else{
        alert('vui lòng kiểm tra lại thông tin')
    }
}