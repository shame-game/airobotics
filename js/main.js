

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
        document.querySelector('body').setAttribute('style', 'overflow: hidden;')
    }
});

bg.forEach((btt, index) => {
    const boxx = box[index];
    btt.onclick = function () {
        btt.setAttribute('style', 'display: none');
        boxx.setAttribute('style', 'display: none');
        document.querySelector('body').setAttribute('style', 'overflow: auto;')
    }
});

clost.forEach((bttt, index) => {
    const bggg = bg[index];
    const boxxx = box[index];
    bttt.onclick = function () {
        boxxx.setAttribute('style', 'display: none');
        bggg.setAttribute('style', 'display: none');
        document.querySelector('body').setAttribute('style', 'overflow: auto;')
    }
});

const g1 = document.querySelector('.g1');
const g2 = document.querySelector('.g2');
const g3 = document.querySelector('.g3');
const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const d3 = document.querySelector('.d3');
const d4 = document.querySelector('.d4');
const d5 = document.querySelector('.d5');
const d6 = document.querySelector('.d6');
const d7 = document.querySelector('.d7');
const d8 = document.querySelector('.d8');
const d9 = document.querySelector('.d9');
const d10 = document.querySelector('.d10');
const d11 = document.querySelector('.d11');
const d12 = document.querySelector('.d12');
const d13 = document.querySelector('.d13');
const d14 = document.querySelector('.d14');
const d15 = document.querySelector('.d15');
const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');




g1.addEventListener('click', () => {
    d1.setAttribute('style', 'display: flex')
    d2.setAttribute('style', 'display: flex')
    d3.setAttribute('style', 'display: flex')
    d4.setAttribute('style', 'display: flex')
    d5.setAttribute('style', 'display: flex')
    d7.setAttribute('style', 'display: none')
    d6.setAttribute('style', 'display: none')
    d8.setAttribute('style', 'display: none')
    d9.setAttribute('style', 'display: none')
    d10.setAttribute('style', 'display: none')
    d11.setAttribute('style', 'display: none')
    d12.setAttribute('style', 'display: none')
    d13.setAttribute('style', 'display: none')
    d14.setAttribute('style', 'display: none')
    d15.setAttribute('style', 'display: none')
    x1.setAttribute('style', 'transform: rotate(90deg)')
    x2.setAttribute('style', 'transform: rotate(0deg)')
    x3.setAttribute('style', 'transform: rotate(0deg)')
})
g2.addEventListener('click', () => {
    d1.setAttribute('style', 'display: none')
    d2.setAttribute('style', 'display: none')
    d3.setAttribute('style', 'display: none')
    d4.setAttribute('style', 'display: none')
    d5.setAttribute('style', 'display: none')
    d7.setAttribute('style', 'display: flex')
    d6.setAttribute('style', 'display: flex')
    d8.setAttribute('style', 'display: flex')
    d9.setAttribute('style', 'display: flex')
    d10.setAttribute('style', 'display: none')
    d11.setAttribute('style', 'display: none')
    d12.setAttribute('style', 'display: none')
    d13.setAttribute('style', 'display: none')
    d14.setAttribute('style', 'display: none')
    d15.setAttribute('style', 'display: none')
    x1.setAttribute('style', 'transform: rotate(0deg)')
    x2.setAttribute('style', 'transform: rotate(90deg)')
    x3.setAttribute('style', 'transform: rotate(0deg)')
})
g3.addEventListener('click', () => {
    d1.setAttribute('style', 'display: none')
    d2.setAttribute('style', 'display: none')
    d3.setAttribute('style', 'display: none')
    d4.setAttribute('style', 'display: none')
    d5.setAttribute('style', 'display: none')
    d7.setAttribute('style', 'display: none')
    d6.setAttribute('style', 'display: none')
    d8.setAttribute('style', 'display: none')
    d9.setAttribute('style', 'display: none')
    d10.setAttribute('style', 'display: flex')
    d11.setAttribute('style', 'display: flex')
    d12.setAttribute('style', 'display: flex')
    d13.setAttribute('style', 'display: flex')
    d14.setAttribute('style', 'display: flex')
    d15.setAttribute('style', 'display: flex')
    x1.setAttribute('style', 'transform: rotate(0deg)')
    x2.setAttribute('style', 'transform: rotate(0deg)')
    x3.setAttribute('style', 'transform: rotate(90deg)')
})

fetchSheet
    .fetch({
        gSheetId: '1sfm3I2VT4byXlqFSCgYMRMNHNda7ozBwsGdDG8HqZ5A',
        wSheetName: 'video',
    })
    .then((rows) => {
        let items = '';
        rows.forEach((t) => {
            items +=
                `<div style="padding: 10px">
                    <div class="bao-img">
                        <a target="_blank" href="${t['Link_Video']}">
                            <div class="bao-card-img"><img src="${t['Hình ảnh_Video']}"></div>
                            <div class="bao-card-content">
                                <h2>${t['Tiêu đề_Video']}</h2>
                                <div style="display: flex; height: max-content;justify-content: space-between;align-items: center;margin: 20px 0;">
                                    <img src="${t['Hình logo_Báo']}" width="100px" height="auto" style="object-fit: cover;height: 30px;
                                    width: max-content;">
                                        <h3>Xem Thêm</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>`
        })
        document.querySelector('#video-sheet').innerHTML = items;
        $('#video-sheet').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            pauseOnHover: false,
            prevArrow: '<span class="prev"><i class="bi-chevrond-left"></i></span>',
            nextArrow: '<span class="next"><i class="bi-chevrond-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '',
                        nextArrow: '',
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                }
            ]
        });
    });

fetchSheet
    .fetch({
        gSheetId: '1sfm3I2VT4byXlqFSCgYMRMNHNda7ozBwsGdDG8HqZ5A',
        wSheetName: 'báo',
    })
    .then((rows) => {
        let items = '';
        rows.forEach((t) => {
            items +=
                `<div style="padding: 10px">
                    <div class="bao-img">
                        <a target="_blank" href="${t['Link_Báo']}">
                            <div class="bao-card-img"><img src="${t['Hình ảnh_Báo']}"></div>
                            <div class="bao-card-content">
                                <h2>${t['Tiêu đề_Báo']}</h2>
                                <div style="display: flex; height: max-content;justify-content: space-between;align-items: center;margin: 20px 0;">
                                    <img src="${t['Hình logo_Báo']}" width="100px" height="auto" style="object-fit: cover;height: 30px;
                                    width: max-content;">
                                        <h3>Xem Thêm</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>`
        })
        document.querySelector('#bao_sheet').innerHTML = items;
        $('#bao_sheet').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            pauseOnHover: false,
            prevArrow: '<span class="prev"><i class="bi-chevrond-left"></i></span>',
            nextArrow: '<span class="next"><i class="bi-chevrond-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '',
                        nextArrow: '',
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                }
            ]
        });
    });
$.getJSON('https://s4h.edu.vn/wp-json/wp/v2/posts?_embed', function (posts) {
    let items = '';

    
    posts.forEach(t => {
        let image = 'https://s4h.edu.vn/wp-content/uploads/' + t['_embedded']['wp:featuredmedia'][0]['media_details']['file']      
        console.log(image);
        if (t.class_list[t.class_list.length - 1] == 'category-tintuc') {
            items +=
                `<div style="padding: 10px">
                <div class="bao-img">
                    <a target="_blank" href="${t.link}">
                        <div class="bao-card-img"><img src="${image}"></div>
                        <div class="bao-card-content">
                            <h2>${t['title']['rendered']}</h2>
                            <div style="display: flex; height: max-content;justify-content: space-between;align-items: center;margin: 20px 0;">
                                
                                    <h3>Xem Thêm</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>`
        }
    })
    document.querySelector('#sk_sheet').innerHTML = items;
    $('#sk_sheet').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
        prevArrow: '<span class="prev"><i class="bi-chevrond-left"></i></span>',
        nextArrow: '<span class="next"><i class="bi-chevrond-right"></i></span>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '',
                    nextArrow: '',
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                },
            }
        ]
    });
})
