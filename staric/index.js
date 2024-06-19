function Loadfullvn() {
    let full =
        `<div class="Menu-nav" style="display: none;">
        <div style="display: flex;justify-content: end;padding: .5rem; font-size: 1.5rem;">
            <i class="bi bi-x-lg" onclick="X()"></i>
        </div>
        <div class="menunav">
            <a class="home acc" href="#banner">Giới thiệu</a>
            <a class="template" href="#d551412a1">Dự án</a>
            <a class="template" href="#d551412a2">khóa học đã học</a>
            <a class="create" href="#d551412a3">Kỹ năng</a>
            <a class="contact" href="#tongquan">Tổng quát</a>

        </div>
    </div>
    <div class="loadweb">
        <div></div>
    </div>
    <div id="mainintro"></div>
    <main class="main-wrap">
        <section id="header1412a1">
            <div class="header1412a1">
                <div class="menu" style="display: none;">
                    <i class="bi bi-list"></i>
                </div>
                <div class="header1412a1-logo">
                    <img style="height: 100%;width: auto;" src="../../staric/Image/Logo.png" alt="">
                </div>
                <ul class="header1412a1-list">
                    <a class="home acc" href="#banner">Giới thiệu</a>
                    <a class="template" href="#d551412a1">Dự án</a>
                    <a class="template" href="#d551412a2">khóa học đã học</a>
                    <a class="create" href="#d551412a3">Kỹ năng</a>
                    <a class="contact" href="#tongquan">Tổng quát</a>
                    <select id="langf" class="form-select" aria-label="Default select example"
                        onchange="genderChanged(this)">
                        <option value="vn">VN</option>
                        <option value="en">EN</option>
                    </select>
                </ul>
            </div>
        </section>
        <div class="main">
            <section id="banner">
                <div class="banner__background">
                    <img src="./staric/Image/banner-lg.jpg" alt="">
                </div>
                <div class="banner__content">
                    <div class="banner__content-wrap">
                        <p class="Title__non">Thông tin cá nhân</p>
                        <h4 class="TT__name">Họ và Tên: <p></p>
                        </h4>
                        <h4 class="TT__class">Lớp học: <p></p>
                        </h4>
                        <h4 class="TT__date">Năm nhập học: <p></p>
                        </h4>
                        <h4 class="TT__address">Địa chỉ: <p></p>
                        </h4>
                        <div class="banner_button">
                            <a href="https://airobotic.edu.vn/" target="_blank">Xem các khóa học khác</a>
                            <a href="#d551412a2">Các khóa học đã học</a>
                        </div>
                        <div id="slick__banner" class="row"></div>
                        <p class="jhgjf" style="padding: .5rem 0; font-size: 1.1rem;">Học tất cả các khóa học sẽ có đủ
                            các huy hiệu.</p>
                    </div>
                </div>
            </section>
            <section id="d551412a1">
                <div class="d551412a1">
                    <div class="d551412a1-wrap row">
                        <div class="d551412a1__left col-lg-6">
                            <div class="d551412a1-left-content">
                                <p class="Title__non"> Dự án đã làm </p>
                                <div class="Title__main"> Sản Phẩm Học Tập</div>
                                <div class="Content__main">Hình ảnh những mô hình nổi bật ứng dụng thông minh của khóa
                                    học AI Robotic mà học
                                    viên Nguyễn Minh Khôi đã hoàn thành trong quá trình học tập. </div>
                                <div class="Content__main"> Các dự án làm tại khóa học AI Robotic </div>
                            </div>
                        </div>
                        <div class="d551412a1__right col-lg-6">
                            <div class="d551412a1-right-slick row">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="d551412a2">
                <div class="d551412a2">
                    <div class="d551412a2-wrap row">
                        <div class="d551412a2__left col-lg-6">
                            <div class="d551412a2-left-img">
                                <img src="https://lh3.googleusercontent.com/d/1DaNF3GCz7KY4smZFpQZ0iflpYM2yLFbZ" alt="">
                            </div>
                        </div>
                        <div class="d551412a2__right col-lg-6">
                            <div class="d551412a2-right-wrap">
                                <div class="Title__main"> Khóa học đã học</div>
                                <div class="d551412a2-right__content" style="padding: 1rem 0;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="d551412a3" style="border-bottom: 1px solid rgb(216, 216, 216);border-top: unset;">
                <div class="d551412a3">
                    <div class="d551412a3-wrap row">
                        <div class="d551412a3__left col-lg-6">
                            <div class="d551412a3-right-wrap">
                                <div class="Title__main"> Kỹ năng cá nhân</div>
                                <div class="d551412a3-right__content" style="padding: 1rem 0;"></div>
                            </div>
                        </div>
                        <div class="d551412a3__right col-lg-6">
                            <div class="d551412a3-left-img">
                                <img src="../../staric/Image/Profiling-amico.png" class="indetro">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tongquan" id="tongquan">
                <div class="tongquan_wrap row">
                    <div class="tongquan_video col-lg-6">
                        <iframe id="iframevideo" src="" style="width: 90%; height: auto;aspect-ratio: 16/9;"
                            allow="autoplay"></iframe>
                    </div>
                    <div class="tongquan_content col-lg-6">
                        <div class="tongquan_text">
                            <h1 class="Title__main baocaoen" style="color: var(--color-text);font-weight: 400;">Báo cáo
                                tổng quát
                            </h1>
                            <p id="contentbctq"></p>
                        </div>
                        <div class="tongquan_image"></div>
                    </div>
                </div>
            </section>
            <section style="padding-top: 50px;background-color: #f8f8f8;">
                <div class="row" style="width: 90%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;">
                    <div class="col-lg-6 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">Nơi hoạt động</h1>
                        <ul style="padding: 1rem 0;">
                            <li>Địa chỉ: Số 10, Huỳnh Văn Nghệ, P. Bửu Long, Tp. Biên Hòa - Tỉnh Đồng Nai</li>
                            <li>Tụ sở chính: T&A LAB, Trường Đại Học Lạc Hồng</li>
                        </ul>
                    </div>
                    <div class="col-lg-3 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">Liên hệ</h1>
                        <ul style="padding: 1rem 0;">
                            <li>Số Điện Thoại: 0946734111</li>
                            <li>Email: nmson@lhu.edu.vn</li>
                        </ul>
                    </div>
                    <div class="col-lg-3 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">Các liên kết khác</h1>
                        <ul style="padding: 1rem 0;">
                            <li><a class="ft12" href="https://airobotic.edu.vn/#dk">Đăng ký học</a></li>
                            <li><a class="ft12"
                                    href="https://s4h.edu.vn/tintuc/chuong-trinh-ai-robotic-sach-ai-super-assistant/">Xem
                                    thêm về chúng tôi </a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="ft1412c1" style=" background-color: #f8f8f8;">
                <div class="ft1412c1">
                    <div class="ft1412c1-wrap">
                        <div class="ft1412c1-dot"></div>
                        <div class="ft1412c1-content row">
                            <div class="ft1412c1-text col-lg-6 dd">
                                <p>© Product created by T&A Lab</p>
                            </div>
                            <div class="ft1412c1-icon col-lg-6 dd" style="justify-content: end;">
                                <p style="margin-right: 1rem;">Theo dõi: </p>
                                <a href="https://www.facebook.com/profile.php?id=100071172378187" target="_blank">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.youtube.com/@Share4Happy" target="_blank">
                                    <i class="bi bi-youtube"></i>
                                </a>
                                <a href="https://www.tiktok.com/@ai.robot8" target="_blank">
                                    <i class="bi bi-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>`
    document.querySelector('#loadwweb_main').innerHTML = full
}

function Loadfullen() {
    let full =
        `<div class="Menu-nav" style="display: none;">
        <div style="display: flex;justify-content: end;padding: .5rem; font-size: 1.5rem;">
            <i class="bi bi-x-lg" onclick="X()"></i>
        </div>
        <div class="menunav">
            <a class="home acc" href="#banner">Introduce</a>
            <a class="template" href="#d551412a1">Project</a>
            <a class="template" href="#d551412a2">Courses studied</a>
            <a class="create" href="#d551412a3">Skill</a>
            <a class="contact" href="#tongquan">Generality</a>
            <select id="lang" class="form-select" aria-label="Default select example" onchange="fenderChanged(this)">
                <option value="en">EN</option>
                <option value="vn">VN</option>

            </select>
        </div>
    </div>
    <div class="loadweb">
        <div></div>
    </div>
    <div id="mainintro"></div>
    <main class="main-wrap">
        <section id="header1412a1">
            <div class="header1412a1">
                <div class="menu" style="display: none;">
                    <i class="bi bi-list"></i>
                </div>
                <div class="header1412a1-logo">
                    <img style="height: 100%;width: auto;" src="../../staric/Image/Logo.png" alt="">
                </div>
                <ul class="header1412a1-list">
                    <a class="home acc" href="#banner">Introduce</a>
                    <a class="template" href="#d551412a1">Project</a>
                    <a class="template" href="#d551412a2">Courses studied</a>
                    <a class="create" href="#d551412a3">Skill</a>
                    <a class="contact" href="#tongquan">Generality</a>
                    <select id="langf" class="form-select" aria-label="Default select example"
                        onchange="genderChanged(this)">
                        <option value="en">EN</option>
                        <option value="vn">VN</option>

                    </select>
                </ul>
            </div>
        </section>
        <div class="main">
            <section id="banner">
                <div class="banner__background">
                    <img src="./staric/Image/banner-lg.jpg" alt="">
                </div>
                <div class="banner__content">
                    <div class="banner__content-wrap">
                        <p class="Title__non">Personal information</p>
                        <h4 class="TT__name">Name: <p></p>
                        </h4>
                        <h4 class="TT__class">Class: <p></p>
                        </h4>
                        <h4 class="TT__date">Year of admission: <p></p>
                        </h4>
                        <h4 class="TT__address">Address: <p></p>
                        </h4>
                        <div class="banner_button">
                            <a href="https://airobotic.edu.vn/" target="_blank">See other courses</a>
                            <a href="#d551412a2"> Courses studied</a>
                        </div>
                        <div id="slick__banner" class="row"></div>
                        <p class="jhgjf" style="padding: .5rem 0; font-size: 1.1rem;">
                            Studying all courses will earn you enough badges.</p>
                    </div>
                </div>
            </section>
            <section id="d551412a1">
                <div class="d551412a1">
                    <div class="d551412a1-wrap row">
                        <div class="d551412a1__left col-lg-6">
                            <div class="d551412a1-left-content">
                                <p class="Title__non"> Project was implemented </p>
                                <div class="Title__main"> Sản Phẩm Học Tập</div>
                                <div class="Content__main">Hình ảnh những mô hình nổi bật ứng dụng thông minh của khóa
                                    học AI Robotic mà học
                                    viên Nguyễn Minh Khôi đã hoàn thành trong quá trình học tập. </div>
                                <div class="Content__main"> Projects done at the AI ​​Robotic course </div>
                            </div>
                        </div>
                        <div class="d551412a1__right col-lg-6">
                            <div class="d551412a1-right-slick row">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="d551412a2">
                <div class="d551412a2">
                    <div class="d551412a2-wrap row">
                        <div class="d551412a2__left col-lg-6">
                            <div class="d551412a2-left-img">
                                <img src="https://lh3.googleusercontent.com/d/1DaNF3GCz7KY4smZFpQZ0iflpYM2yLFbZ" alt="">
                            </div>
                        </div>
                        <div class="d551412a2__right col-lg-6">
                            <div class="d551412a2-right-wrap">
                                <div class="Title__main">Courses Learned</div>
                                <div class="d551412a2-right__content" style="padding: 1rem 0;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="d551412a3" style="border-bottom: 1px solid rgb(216, 216, 216);border-top: unset;">
                <div class="d551412a3">
                    <div class="d551412a3-wrap row">
                        <div class="d551412a3__left col-lg-6">
                            <div class="d551412a3-right-wrap">
                                <div class="Title__main">Personal skills</div>
                                <div class="d551412a3-right__content" style="padding: 1rem 0;"></div>
                            </div>
                        </div>
                        <div class="d551412a3__right col-lg-6">
                            <div class="d551412a3-left-img">
                                <img src="../../staric/Image/Profiling-amico.png" class="indetro">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tongquan" id="tongquan">
                <div class="tongquan_wrap row">
                    <div class="tongquan_video col-lg-6">
                        <iframe id="iframevideo" src="" style="width: 90%; height: auto;aspect-ratio: 16/9;"
                            allow="autoplay"></iframe>
                    </div>
                    <div class="tongquan_content col-lg-6">
                        <div class="tongquan_text">
                            <h1 class="Title__main baocaoen" style="color: var(--color-text);font-weight: 400;">General
                                report
                            </h1>
                            <p id="contentbctq"></p>
                        </div>
                        <div class="tongquan_image"></div>
                    </div>
                </div>
            </section>
            <section style="padding-top: 50px;background-color: #f8f8f8;">
                <div class="row" style="width: 90%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;">
                    <div class="col-lg-6 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">Place of operation</h1>
                        <ul style="padding: 1rem 0;">
                            <li>Address: No. 10, Huynh Van Nghe, Buu Long Ward, City. Bien Hoa - Dong Nai Province</li>
                            <li>Headquarters: T&A LAB, Lac Hong University</li>
                        </ul>
                    </div>
                    <div class="col-lg-3 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">Contact</h1>
                        <ul style="padding: 1rem 0;">
                            <li>Phone: 0946734111</li>
                            <li>Email: nmson@lhu.edu.vn</li>
                        </ul>
                    </div>
                    <div class="col-lg-3 hg">
                        <h1 style="font-size: 1.5em;color: var(--color-text)">
                            Other links</h1>
                        <ul style="padding: 1rem 0;">
                            <li><a class="ft12" href="https://airobotic.edu.vn/#dk">
                                    Register to study</a></li>
                            <li><a class="ft12"
                                    href="https://s4h.edu.vn/tintuc/chuong-trinh-ai-robotic-sach-ai-super-assistant/">
                                    See more about us </a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="ft1412c1" style=" background-color: #f8f8f8;">
                <div class="ft1412c1">
                    <div class="ft1412c1-wrap">
                        <div class="ft1412c1-dot"></div>
                        <div class="ft1412c1-content row">
                            <div class="ft1412c1-text col-lg-6 dd">
                                <p>© Product created by T&A Lab</p>
                            </div>
                            <div class="ft1412c1-icon col-lg-6 dd" style="justify-content: end;">
                                <p style="margin-right: 1rem;">Follow: </p>
                                <a href="https://www.facebook.com/profile.php?id=100071172378187" target="_blank">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.youtube.com/@Share4Happy" target="_blank">
                                    <i class="bi bi-youtube"></i>
                                </a>
                                <a href="https://www.tiktok.com/@ai.robot8" target="_blank">
                                    <i class="bi bi-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>`
    document.querySelector('#loadwweb_main').innerHTML = full
}


function Loadcontent(url, en) {
    const vam = document.querySelector.bind(document);
    const vams = document.querySelectorAll.bind(document);
    const w = screen.width
    const intromain =
        `<div class="intro">
        <div class="intrologo">
            <div class="intrologo-hiden">
                <img style="width:30%" src="../../staric/Image/Logo.png">
            </div>
        </div>
        <div class="introone"></div>
    </div>`;
    vam('.loadweb').remove();
    vam('#mainintro').innerHTML = intromain
    setTimeout(() => {
        vam('.intro').remove()
    }, 2500)

    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'Banner',
        })
        .then((rows) => {
            console.log(rows);
            let g = rows[0]
            ThongTin(g['Name'], g['Date'], g['Address'], g['Class']);
            vam('.banner__background>img').src = g['BackGround'];
            if (w <= 700) {
                vam('#banner').style.aspectRatio = "1182/2560";
                vam('.banner__background>img').src = g['BackGround-sm'];
                vam('.menu').setAttribute('style', 'display:block')
            }
        });
    // Lấy thông tin cá nhân 
    function ThongTin(name, date, address, contact) {
        document.querySelector('.TT__name>p').innerHTML = name
        document.querySelector('.TT__date>p').innerHTML = date
        document.querySelector('.TT__address>p').innerHTML = address
        document.querySelector('.TT__class>p').innerHTML = contact
    }
    function Duan(All) {
        let Items = "";
        document.querySelector('.d551412a1 .Title__main').innerHTML = All[0]['Title']
        document.querySelector('.d551412a1 .Content__main').innerHTML = All[0]['Content']
        All.forEach((tab) => {
            Items += `<div class="banner-wrap__img col-lg-12">
        <img src="${tab['Image']}" alt="">
    </div>`
        })
        document.querySelector('.d551412a1-right-slick').innerHTML = Items
    }
    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'Duan',
        })
        .then((rows) => {
            Duan(rows)
            $('.d551412a1-right-slick').slick({
                autoplay: false,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                pauseOnHover: false,
                prevArrow: `<span class="prev"><svg style="transform: scale(-1);" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48">
    <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span>`,
                nextArrow: `<span class="next"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48">
    <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span></span>`,
            });
        });






    $('.d551412a2-right__ctTi').on('mousedown', e => {
        $('.d551412a2-right__ctall').toggleClass('hiden')
        $('.d55svg').toggleClass('hiden')
    });

    vams('.d551412a2-right__ctTi').forEach((t, index) => {
        let g = vams('.d551412a2-right__ctTi')[index]
        t.onclick = () => {
            $('.d551412a2-right__ctall').toggleClass('hiden')
            $('.d55svg').toggleClass('hiden')
        }
    })


    /* dữ liệu duan */
    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'Khoahoc',
        })
        .then((rows) => {

            let gut = []
            rows.forEach((t) => {
                if (gut[t['TenKH']]) {
                    gut[t['TenKH']]++
                }
                else {
                    gut[t['TenKH']] = 1
                }
            })
            vam('.d551412a2-left-img>img').src = rows[0]['Hinh']

            let Pro_wrap = ''
            Object.keys(gut).forEach(key => {
                Pro_wrap +=
                    `<div class="main-content" index='${key}'>
                    <div class="d551412a2-right__ctTi">
                        ${key} (${gut[key]} ${en})
                        <div class="d55svg" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                viewBox="0 0 24 24" width="24" fill="#606368">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="d551412a2-right__ctall"></div>
                </div>`
            })
            let f =
                `<div class="banner_button" style="padding: 3rem 0">
                <a href="https://airobotic.edu.vn/" target="_blank">Các khóa học khác</a>
            </div>`
            document.querySelector('.d551412a2-right__content').innerHTML = Pro_wrap + f
            let Project = ''
            let i = 0
            document.querySelectorAll('.main-content').forEach((t, index) => {
                let f = t.getAttribute('index')
                /* lấy dữ liệu */

                rows.forEach((tab) => {
                    Object.keys(tab).forEach(key => {
                        if (tab[`${key}`] == '') {
                            tab[key] = '-';
                        }
                    })
                    Project =
                        `<div class="main-content-tt" id="${i}" index="${tab['TenKH']}"><h4 class="name-project items"><p>${tab['TenCD']}</p></h4></div >`
                    vam(`.main-content[index='${f}'] .d551412a2-right__ctall`).innerHTML += Project
                    let g = document.querySelector(`.main-content-tt[id='${i}']`).getAttribute('index')
                    if (f == g) { }
                    else {
                        document.querySelector(`.main-content[index='${f}'] .d551412a2-right__ctall .main-content-tt[id='${i}']`).remove()
                    }
                    i++
                });
                /* xổ xuống */
                document.querySelector(`.main-content[index='${f}'] .d551412a2-right__ctTi`).onclick = () => {
                    if (vam(`.main-content[index='${f}'] .d551412a2-right__ctall`).getAttribute('class') == 'd551412a2-right__ctall hide') {

                    }
                    else {
                        vams(`.d551412a2-right__ctall.hide`).forEach((t) => {
                            t.classList.remove('hide')
                        })
                        vams(`.d55svg.hiden`).forEach((t) => {
                            t.classList.remove('hiden')
                        })
                    }
                    $(`.main-content[index='${f}'] .d551412a2-right__ctall`).toggleClass('hide')
                    $(`.main-content[index='${f}'] .d55svg`).toggleClass('hiden')
                }
            })
        });
    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'Kinang',
        })
        .then((rows) => {
            let gut = []
            rows.forEach((t) => {
                if (gut[t['Title']]) {
                    gut[t['Title']]++
                }
                else {
                    gut[t['Title']] = 1
                }
            })

            let Pro_wrap = ''
            let d = 1;
            Object.keys(gut).forEach(key => {
                Pro_wrap +=
                    `<div class="main-content3" index='${key}' id=${d}>
                    <div class="d551412a3-right__ctTi" >
                        <p style="text-transform: capitalize;">${key}</p>
                        <div class="d54svg" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                viewBox="0 0 24 24" width="24" fill="#606368">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="d551412a3-right__ctall"></div>
                </div>`
                d++
            })
            document.querySelector('.d551412a3-right__content').innerHTML = Pro_wrap
            let Project = ''
            let i = 0;
            let gdd = 1
            let gd = '';
            rows.forEach((tab) => {
                gd += `<img index="${gdd}" src="${tab['Image']}" style="display:none">`
                gdd++
            });
            document.querySelector('.d551412a3-left-img').innerHTML += gd
            document.querySelectorAll('.main-content3').forEach((t) => {
                let f = t.getAttribute('index')

                /* lấy dữ liệu */
                rows.forEach((tab) => {
                    Object.keys(tab).forEach(key => {
                        if (tab[`${key}`] == '') {
                            tab[key] = '-';
                        }
                    })
                    Project =
                        `<div class="main-content-tt3" id="${i}" index="${tab['Title']}"><h4 class="name-project items"><p style="text-align: justify">${tab['Content']}</p></h4></div >`
                    vam(`.main-content3[index='${f}'] .d551412a3-right__ctall`).innerHTML += Project
                    let g = document.querySelector(`.main-content-tt3[id='${i}']`).getAttribute('index')
                    if (f == g) { }
                    else {
                        document.querySelector(`.main-content3[index='${f}'] .d551412a3-right__ctall .main-content-tt3[id='${i}']`).remove()
                    }
                    i++
                });

                /* xổ xuống */
                document.querySelector(`.main-content3[index='${f}'] .d551412a3-right__ctTi`).onclick = () => {
                    let i = vam(`.main-content3[index='${f}']`).getAttribute('id')
                    if (vam(`.main-content3[index='${f}'] .d551412a3-right__ctall`).getAttribute('class') == 'd551412a3-right__ctall hide') { }
                    else {
                        vams(`.d551412a3-right__ctall.hide`).forEach((t) => {
                            t.classList.remove('hide')
                        })
                        vams(`.d54svg.hiden`).forEach((t) => {
                            t.classList.remove('hiden')
                        })
                    }
                    $(`.main-content3[index='${f}'] .d551412a3-right__ctall`).toggleClass('hide')
                    $(`.main-content3[index='${f}'] .d54svg`).toggleClass('hiden')
                    vams('.d551412a3-left-img>img').forEach((t) => {
                        t.setAttribute('style', 'display:none')
                    })
                    vam(`.d551412a3-left-img>img[index="${i}"]`).setAttribute('style', 'display:block')

                }
            })

        });

    vams('.header1412a1-list>a').forEach((t) => {
        t.onclick = () => {
            vam('.header1412a1-list>a.acc').classList.remove('acc');
            t.classList.add('acc');
        }
    })

    console.log('Chào mừng bạn đến tới AI Robotic.');
    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'Huyhieu',
        })
        .then((rows) => {
            let t = '';
            let link = '';
            let i = 1;
            rows.forEach((tab) => {
                if (tab['Đã học'] == 'TRUE') {
                    link = `../../staric/Image/LV${i}.png`
                } else {
                    link = `../../staric/Image/log_LV${i}.png`
                }
                t +=
                    `<div class="banner-wrap__img col-lg-4">
                    <img src="${link}" alt="">
                </div>`
                i++
            })
            document.querySelector(`#slick__banner`).innerHTML = t
            $("#slick__banner").slick({
                autoplay: false,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: true,
                pauseOnHover: false,
                prevArrow: `<span class="prev"><svg style="transform: scale(-1);" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span>`,
                nextArrow: `<span class="next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span></span>`,
                responsive: [
                    {
                        breakpoint: 700,
                        settings: {
                            dots: false,
                        },
                    },
                ],
            });
        });



    function X() {
        vam('.Menu-nav').setAttribute('style', 'display:none')
    }
    fetchSheet
        .fetch({
            gSheetId: url,
            wSheetName: 'bctq',
        })
        .then((rows) => {
            let g = ''
            vam('#iframevideo').src = rows[0]['video']
            vam('#contentbctq').innerText = rows[0]['Content']
            rows.forEach((tab) => {
                g += `<img style="flex: 1; aspect-ratio: 1/1;object-fit: cover;width: 30%;"
            src="${tab['Image']}" alt="">`
            })
            vam('.tongquan_image').innerHTML = g
        });

    vam('.menu').onclick = () => {
        vam('.Menu-nav').setAttribute('style', 'display:flex')
    }
    vam('.bg').onclick = () => {
        vam('.Menu-nav').setAttribute('style', 'display:none')
    }
}

/*            <select id="lang" class="form-select" aria-label="Default select example" onchange="fenderChanged(this)">
                <option value="vn">VN</option>
                <option value="en">EN</option>
            </select>*/