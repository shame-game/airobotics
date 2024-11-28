let url = '1cuhLv5O7043CjbIHAeBBXvnLIJzv1USA1wpjHedWeRg'
let currentURL = new URL(window.location.href);
let rootURL = window.location.protocol + "//" + window.location.host
const colorSkill = ['#f75023', '#1cbe59', '#8067f0', '#23ebf7', '#e4e223', '#2f5cd1']
const lv = {
    FZ1: 1,
    FZ2: 2,
    SL1: 3,
    SL2: 4,
    MW1: 5,
    TW1: 6,
    TW2: 7,
    SA1: 8,
    SA2: 9,
    SE1: 10,
    SE2: 11,
    SD1: 12,
    SD2: 13,
    AE1: 14,
    AE2: 15
}
let studentId = currentURL.searchParams.get('ID')
Loadcontent(studentId)

async function Loadcontent(id) {
    let data = await fetch(`https://system.airobotic.edu.vn/api/Student_PF/getPF_web?ID=${id}`)
    data = await data.json()
    document.querySelector('meta[property="og:image"]').setAttribute('content', data.data.Avatar)
    document.querySelector('meta[property="og:title"]').setAttribute('content', `Hồ sơ điện tử của học viên ${data.name}`)
    document.querySelector('meta[property="og:description"]').setAttribute('content', `Hồ sơ điện tử của học viên ${data.name}`)

    document.querySelector('#LoadID').innerHTML = (
        `<div class="dizme_tm_mobile_menu">
                <div class="mobile_menu_inner">
                    <div class="mobile_in">
                        <div class="logo">
                            <a href="#"><img src="https://airobotic.edu.vn/staric/Image/Logo.png" alt /></a>
                        </div>
                        <div class="trigger">
                            <div class="hamburger hamburger--slider">
                                <div class="hamburger-box">
                                    <div class="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="dropdown_inner">
                        <ul class="anchor_nav">
                            <li class="current"><a href="#home">Trang chủ</a></li>
                            <li><a href="#about">Giới thiệu</a></li>
                            <li><a href="#portfolio">Sản phẩm</a></li>
                            <li><a href="#skill">Kĩ năng</a></li>
                            <li><a href="#service">Khóa học</a></li>
                            <!--  <li class="download_cv"><a onclick="downloadPDF()"><span>Download CV</span></a></li>-->
                        </ul>
                    </div>
                </div>
            </div>
    
    
            <div class="dizme_tm_header">
                <div class="container">
                    <div class="inner">
                        <div class="logo">
                            <a href="#"><img src="https://lh3.googleusercontent.com/d/1ONDBWZlaTQ66ukD4GowxjAEuOHP9bkbr" alt /></a>
                        </div>
                        <div class="menu">
                            <ul class="anchor_nav">
                                <li class="current"><a href="#home">Trang chủ</a></li>
                                <li><a href="#about">Giới thiệu</a></li>
                                <li><a href="#portfolio">Sản phẩm</a></li>
                                <li><a href="#skill">Kĩ năng</a></li>
                                <li><a href="#service">Khóa học</a></li>
                                <!-- <li class="download_cv"><a onclick="downloadPDF()"><span>Download CV</span></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="dizme_tm_section" id="home">
                <div class="dizme_tm_hero">
                    <div class="background" data-img-url="img/slider/1.jpg"></div>
                    <div class="container">
                        <div class="content">
                            <div class="details">
                                <div class="hello">
                                    <h3 class="orangeText">Xin chào, tôi là</h3>
                                </div>
                                <div class="name">
                                    <h3 style="font-weight: 600;">${data.name}</h3>
                                </div>
                                <div class="job">
                                    <p>Là <span class="purpleText">Học sinh của Trung Tâm AI Robotic</span></p>
                                </div>
                                <div class="button" style="gap: 24px;">
                                    <div class="dizme_tm_button">
                                        <a class="anchor" href="#about"><span>Chi tiết</span></a>
                                    </div>
                                    <div class="dizme_tm_button">
                                        <a class="anchor" href="#about"><span>Khóa học khác</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="avatar">
                                <div class="image">
                                    <img src="${data.data.Avatar}" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dizme_tm_down">
                        <a class="anchor" href="#process">
                            <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                                <path id="wheel" d="M123.359,79.775l0,72.843"
                                    style="fill:none;stroke:#000;stroke-width:20px;" />
                                <path id="mouse"
                                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                    style="fill:none;stroke:#000;stroke-width:20px;" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="dizme_tm_section" id="about">
                <div class="dizme_tm_about">
                    <div class="container">
                        <div class="wrapper">
                            <div class="left">
                                <div class="image">
                                    <img src="${data.data.Avatar}" />
                                    <div class="numbers year">
                                        <div class="wrapper">
                                            <h3><span class="dizme_tm_counter" data-from="00" data-to="${data.course ? Object.keys(data.course).length : 0}"
                                                    data-speed="2000">${data.course ? Object.keys(data.course).length : null}</span></h3>
                                            <span class="name">Khóa học<br />tham gia</span>
                                        </div>
                                    </div>
                                    <div class="numbers project">
                                        <div class="wrapper">
                                            <h3><span class="dizme_tm_counter" data-from="0" data-to="${data.course ? Object.keys(data.course).length * 7 : 0}"
                                                    data-speed="2000">${data.course ? Object.keys(data.course).length * 7 : null}</span></h3>
                                            <span class="name">Dự án<br />thực hiện</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="title wow fadeInUp" data-wow-duration="1s">
                                    <span>Học viên trung tâm AI ROBOTIC</span>
                                    <h3>Bạn có thể biết một vài điều về tôi</h3>
                                </div>
                                <div class="text wow fadeInUp" data-wow-duration="1s">
                                    <p style="text-align: justify;">${data.data.Intro}</p>
                                </div>
    
                            </div>
                        </div>
                    </div>
                    <div class="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/about/1.png" alt />
                    </div>
                    <div class="brush_2 wow fadeInRight" data-wow-duration="1s"><img src="img/brushes/about/2.png" alt />
                    </div>
                </div>
            </div>
            <div class="dizme_tm_section" id="portfolio">
                <div class="dizme_tm_portfolio">
                    <div class="container">
                        <div class="dizme_tm_main_title" data-align="center">
                            <span>Hình ảnh sản phẩm</span>
                            <h3>Sản phẩm học tập</h3>
                            <p>Hình ảnh những mô hình nổi bật ứng dụng thông minh của khóa học AI Robotic mà học viên đã
                                hoàn thành trong quá trình học tập.</p>
                        </div>
                        <div class="dizme_tm_portfolio_titles"></div>
                        <div class="portfolio_list wow fadeInUp" data-wow-duration="1s" style="padding-top: 50px;">
                            <ul class="gallery_zoom grid">
                                ${getIMGProject(data.data.ImgPJ)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dizme_tm_section" id="skill">
                <div class="dizme_tm_skills">
                    <div class="container">
                        <div class="wrapper">
                            <div class="left">
                                <div class="dizme_tm_main_title wow fadeInUp" data-wow-duration="1s" data-align="left">
                                    <span>Kĩ năng cá nhân</span>
                                    <h3>6 Kĩ năng của học sinh trong quá trình học</h3>
                                </div>
                                <div class="dodo_progress wow fadeInUp" data-wow-duration="1s">
                                    ${Object.entries(data.data.Skill).map((key, index) => {
            return ` <div class="progress_inner" data-value="${key[1]}" data-color="${colorSkill[index]}">
                                        <span><span class="label">${key[0]}</span><span
                                                class="number">${key[1]}%</span></span>
                                        <div class="background">
                                            <div class="bar">
                                                <div class="bar_in"></div>
                                            </div>
                                        </div>
                                    </div> `
        }).join('')}   
                                </div>
                            </div>
                            <div class="right">
                                <img src="${data.data.ImgSkill}" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="dizme_tm_section" id="service">
                <div class="dizme_tm_services">
                    <div class="container">
                        <div class="dizme_tm_main_title" data-align="center">
                            <span>Về học tập</span>
                            <h3>Các khóa học đã tham gia</h3>
                        </div>
                        <div class="service_list">
                            <ul>
                            ${data.course ? Object.keys(data.course).map((key) => {
            let item = 'Hoàn thành'
            if (!data.course[key].StatusLearn) return null

            return `<li class="wow fadeInLeft" data-wow-duration="1s">
                    <div class="list_inner tilt-effect">
                        <span class="icon">
                            <img class="back" src="https://airobotic.edu.vn/staric/Image/LV${lv[key.slice(2, 5)]}.png" alt />
                        </span>
                        <div class="title">
                            <h3>${key}</h3>
                            <span class="price">Trạng thái: <span>${item} </span></span>
                        </div>
                        <a class="dizme_tm_full_link" href="#"></a>
                        <img class="popup_service_image"
                            src="${data.course[key].Image}" />
                        <div class="service_hidden_details">
                            <div class="service_popup_informations">
                                <div class="descriptions">
                                    <p style="text-align: justify;">${data.course[key].Comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
        }).join('') : null}
                            </ul>
                        </div>
                    </div>
                    <div class="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/service/5.png" alt />
                    </div>
                    <div class="brush_2 wow zoomIn" data-wow-duration="1s"><img src="img/brushes/service/6.png" alt /></div>
                </div>
            </div>
    
            <div class="dizme_tm_section" id="blog">
                <div class="dizme_tm_news">
                    <div class="container">
                        <div class="dizme_tm_main_title" data-align="center">
                            <span>Một số video thuyết trình</span>
                            <h3>Dưới đây là một trong các video thuyết trình của học sinh trong suốt quá trình học tập</h3>
                        </div>
                        <div class="news_list">
                           <ul>${loadVideoTt(data.data.Present)}</ul>
                        </div>
                    </div>
                    <div class="brush_1 wow zoomIn" data-wow-duration="1s"><img src="img/brushes/news/1.png" alt /></div>
                    <div class="brush_2 wow zoomIn" data-wow-duration="1s"><img src="img/brushes/news/2.png" alt /></div>
                </div>
            </div>
            <div class="dizme_tm_section">
                <div class="dizme_tm_copyright">
                    <div class="container">
                        <div class="inner">
                            <div class="left wow fadeInLeft" data-wow-duration="1s">
                                <p>Thực hiện bởi <a href="https://airobotic.edu.vn/" target="_blank">Trung tâm AI
                                        Robotic</a> &copy; 2022</p>
                            </div>
                            <div class="right wow fadeInRight" data-wow-duration="1s">
                                <ul>
                                    <li><a href="#">Chính sách</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div class="mouse-cursor cursor-outer"></div>
            <div class="mouse-cursor cursor-inner"></div>
    
    
            <div class="progressbar">
                <a href="#"><span class="text">Lên trên</span></a>
                <span class="line"></span>
            </div>`
    )

    function getIMGProject(data) {
        let items = ''
        data.forEach(t => {
            items +=
                `<li class="youtube grid-item">
                <div class="inner">
                    <div class="entry dizme_tm_portfolio_animation_wrap">
                        <a class="popup-youtube">
                            <img
                                src="${t}" />
                            <div class="main"
                                data-img-url="${t}">
                            </div>
                        </a>
                    </div>
                </div>
            </li>`
        })
        return items
    }

    function loadVideoTt(data) {
        let items = ''
        if (!data) return ''
        Object.keys(data).forEach(t => {
            console.log(data[t]);
            items +=
                `<li class="wow fadeInUp" data-wow-duration="1s" >
                <div class="list_inners" data-iframe="${data[t].Video}">
                    <div class="image">
                        <img src="img/thumbs/42-29.jpg" alt />
                        <div class="main"
                            data-img-url="${data[t].Img}">
                        </div>
                        <div class="date">
                            <h3>${t.slice(-2)}</h3>
                            <span>Tháng ${t.slice(5, 7)}</span>
                        </div>
                    </div>
                </div>
            </li>`
        })
        return items
    }
    document.querySelectorAll('.list_inners').forEach(t => {
        t.onclick = () => {
            document.querySelector('.c661412b2-background_click').setAttribute('style', 'display:flex')
            document.querySelector('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
            var c661412b2Iframe = `<iframe class="c661412b2-iframe" src="${t.getAttribute('data-iframe')}" frameborder="0"
                                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            document.querySelector('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
            document.querySelector('.c661412b2-background_click').addEventListener('click', () => {
                document.querySelector('.c661412b2-background_click').setAttribute('style', 'display:none')
                document.querySelector('.c661412b2-iframe_click').setAttribute('style', 'display:none')
                document.querySelector('.c661412b2-iframe').remove()
            })
        }
    })
    jQuery(document).ready(function () { "use strict"; dizme_tm_modalbox(); dizme_tm_nav_bg(); dizme_tm_trigger_menu(); dizme_tm_service_popup(); dizme_tm_modalbox_news(); dizme_tm_modalbox_portfolio(); progress_by_frenify(); dizme_tm_mycounter(); dizme_tm_projects(); dizme_tm_portfolio(); dizme_tm_cursor(); dizme_tm_imgtosvg(); dizme_tm_popup(); dizme_tm_data_images(); dizme_tm_contact_form(); dizme_tm_owl_carousel(); dizme_tm_input_padding(); dizme_tm_totop(); dizme_tm_down(); jQuery(window).load('body', function () { dizme_tm_my_load(); }); jQuery(window).on('scroll', function () { dizme_tm_progress_line(); }); }); function dizme_tm_modalbox() { "use strict"; jQuery('.dizme_tm_all_wrap').prepend('<div class="dizme_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>'); }
    function dizme_tm_nav_bg() { "use strict"; jQuery(window).on('scroll', function () { var menu = jQuery('.dizme_tm_header'); var progress = jQuery('.progressbar'); var WinOffset = jQuery(window).scrollTop(); if (WinOffset >= 100) { menu.addClass('animate'); progress.addClass('animate'); } else { menu.removeClass('animate'); progress.removeClass('animate'); } }); }
    function dizme_tm_trigger_menu() {
        "use strict"; var hamburger = jQuery('.trigger .hamburger'); var mobileMenu = jQuery('.dizme_tm_mobile_menu .dropdown'); var mobileMenuList = jQuery('.dizme_tm_mobile_menu .dropdown .dropdown_inner ul li a'); hamburger.on('click', function () {
            var element = jQuery(this); if (element.hasClass('is-active')) { element.removeClass('is-active'); mobileMenu.slideUp(); } else { element.addClass('is-active'); mobileMenu.slideDown(); }
            return false;
        }); mobileMenuList.on('click', function () { jQuery('.trigger .hamburger').removeClass('is-active'); mobileMenu.slideUp(); return false; });
    }
    function dizme_tm_service_popup() { "use strict"; var modalBox = jQuery('.dizme_tm_modalbox'); var button = jQuery('.dizme_tm_services .service_list ul li .dizme_tm_full_link'); var closePopup = modalBox.find('.close'); button.on('click', function () { var element = jQuery(this); var parent = element.closest('.dizme_tm_services .service_list ul li'); var elImage = parent.find('.popup_service_image').attr('src'); var title = parent.find('.title').html(); var content = parent.find('.service_hidden_details').html(); modalBox.addClass('opened'); modalBox.find('.description_wrap').html(content); modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + elImage + '"></div></div>'); dizme_tm_data_images(); modalBox.find('.service_popup_informations .image').after('<div class="main_title">' + title + '</div>'); return false; }); closePopup.on('click', function () { modalBox.removeClass('opened'); modalBox.find('.description_wrap').html(''); return false; }); }
    function dizme_tm_modalbox_news() { "use strict"; var modalBox = jQuery('.dizme_tm_modalbox'); var button = jQuery('.dizme_tm_news .dizme_tm_full_link,.dizme_tm_news ul li .details .title a'); var closePopup = modalBox.find('.close'); button.on('click', function () { var element = jQuery(this); var parent = element.closest('.list_inner'); var content = parent.find('.news_hidden_details').html(); var image = element.closest('.list_inner').find('.image .main').data('img-url'); var category = parent.find('.details .category').html(); var title = parent.find('.details .title a').text(); modalBox.addClass('opened'); modalBox.find('.description_wrap').html(content); modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>'); modalBox.find('.news_popup_informations .image').after('<div class="details"><h3>' + title + '</h3><span>' + category + '</span><div>'); dizme_tm_data_images(); return false; }); closePopup.on('click', function () { modalBox.removeClass('opened'); modalBox.find('.description_wrap').html(''); return false; }); }
    function dizme_tm_modalbox_portfolio() { "use strict"; var modalBox = jQuery('.dizme_tm_modalbox'); var button = jQuery('.dizme_tm_portfolio .portfolio_popup'); var closePopup = modalBox.find('.close'); button.off().on('click', function () { var element = jQuery(this); var parent = element.closest('.inner'); var content = parent.find('.hidden_content').html(); var image = parent.find('.entry .main').data('img-url'); var category = parent.find('.entry').data('category'); var title = parent.find('.entry').data('title'); modalBox.addClass('opened'); modalBox.find('.description_wrap').html(content); modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>'); modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>' + title + '</h3><span><a href="#">' + category + '</a></span><div>'); dizme_tm_data_images(); return false; }); closePopup.on('click', function () { modalBox.removeClass('opened'); modalBox.find('.description_wrap').html(''); return false; }); }
    function dizme_tm_portfolio() { "use strict"; if (jQuery().isotope) { var filter = jQuery('.dizme_tm_portfolio .portfolio_filter ul'); if (filter.length) { filter.find('a').on('click', function () { var element = jQuery(this); var selector = element.attr('data-filter'); var list = element.closest('.dizme_tm_portfolio').find('.portfolio_list').children('ul'); list.isotope({ filter: selector, animationOptions: { duration: 750, easing: 'linear', queue: false } }); filter.find('a').removeClass('current'); element.addClass('current'); return false; }); } } }
    function dizme_tm_projects() {
        "use strict"; jQuery('.dizme_tm_portfolio_animation_wrap').each(function () {
            jQuery(this).on('mouseenter', function () {
                if (jQuery(this).data('title')) { jQuery('.dizme_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>'); jQuery('.dizme_tm_portfolio_titles').addClass('visible'); }
                jQuery(document).on('mousemove', function (e) { jQuery('.dizme_tm_portfolio_titles').css({ left: e.clientX - 10, top: e.clientY + 25 }); });
            }).on('mouseleave', function () { jQuery('.dizme_tm_portfolio_titles').removeClass('visible'); });
        });
    }
    function tdProgress(container) { "use strict"; container.find('.progress_inner').each(function () { var progress = jQuery(this); var pValue = parseInt(progress.data('value'), 10); var pColor = progress.data('color'); var pBarWrap = progress.find('.bar'); var pBar = progress.find('.bar_in'); var number = progress.find('.number'); var label = progress.find('.label'); number.css({ right: (100 - pValue) + '%' }); setTimeout(function () { label.addClass('opened'); }, 500); pBar.css({ width: pValue + '%', backgroundColor: pColor }); setTimeout(function () { pBarWrap.addClass('open'); }); }); }
    function progress_by_frenify(wrapper) {
        "use strict"; var element; if (wrapper) { element = wrapper.find('.dodo_progress'); } else { element = jQuery('.dodo_progress'); }
        element.each(function () { var pWrap = jQuery(this); pWrap.find('.number').css({ right: '100%' }); console.log(pWrap.find('.number').length); pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' }); });
    }
    jQuery('.tilt-effect').tilt({ maxTilt: 6, easing: "cubic-bezier(.03,.98,.52,.99)", speed: 500, transition: true })
    function dizme_tm_preloader() { "use strict"; var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; var preloader = $('#preloader'); if (!isMobile) { setTimeout(function () { preloader.addClass('preloaded'); }, 800); setTimeout(function () { preloader.remove(); }, 2000); } else { preloader.remove(); } }
    function dizme_tm_mycounter() { "use strict"; jQuery('.dizme_tm_counter').removeClass('stop'); jQuery('.dizme_tm_counter').each(function () { var el = jQuery(this); el.waypoint({ handler: function () { if (!el.hasClass('stop')) { el.addClass('stop').countTo({ refreshInterval: 50, formatter: function (value, options) { return }, }); } }, offset: '95%' }); }); }
    function dizme_tm_my_load() { "use strict"; var speed = 500; setTimeout(function () { dizme_tm_preloader(); }, speed); }
    function dizme_tm_cursor() { "use strict"; var myCursor = jQuery('.mouse-cursor'); if (myCursor.length) { if ($("body")) { const e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer"); let n, i = 0, o = !1; window.onmousemove = function (s) { o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX }, $("body").on("mouseenter", "a, .cursor-pointer", function () { e.classList.add("cursor-hover"), t.classList.add("cursor-hover") }), $("body").on("mouseleave", "a, .cursor-pointer", function () { $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover")) }), e.style.visibility = "visible", t.style.visibility = "visible" } } }; function dizme_tm_imgtosvg() {
        "use strict"; jQuery('img.html').each(function () {
            var jQueryimg = jQuery(this); var imgClass = jQueryimg.attr('class'); var imgURL = jQueryimg.attr('src'); jQuery.get(imgURL, function (data) {
                var jQuerysvg = jQuery(data).find('svg'); if (typeof imgClass !== 'undefined') { jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg'); }
                jQuerysvg = jQuerysvg.removeAttr('xmlns:a'); jQueryimg.replaceWith(jQuerysvg);
            }, 'xml');
        });
    }
    function dizme_tm_popup() { "use strict"; jQuery('.gallery_zoom').each(function () { jQuery(this).magnificPopup({ delegate: 'a.zoom', type: 'image', gallery: { enabled: true }, removalDelay: 300, mainClass: 'mfp-fade' }); }); jQuery('.popup-youtube, .popup-vimeo').each(function () { jQuery(this).magnificPopup({ disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); }); jQuery('.soundcloude_link').magnificPopup({ type: 'image', gallery: { enabled: true, }, }); }
    function dizme_tm_data_images() { "use strict"; var data = jQuery('*[data-img-url]'); data.each(function () { var element = jQuery(this); var url = element.data('img-url'); element.css({ backgroundImage: 'url(' + url + ')' }); }); }
    function dizme_tm_contact_form() {
        "use strict"; jQuery(".contact_form #send_message").on('click', function () {
            var name = jQuery(".contact_form #name").val(); var email = jQuery(".contact_form #email").val(); var message = jQuery(".contact_form #message").val(); var subject = jQuery(".contact_form #subject").val(); var success = jQuery(".contact_form .returnmessage").data('success'); jQuery(".contact_form .returnmessage").empty(); if (name === '' || email === '' || message === '') { jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500); }
            else {
                jQuery.post("modal/contact.html", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {
                    jQuery(".contact_form .returnmessage").append(data); if (jQuery(".contact_form .returnmessage span.contact_error").length) { jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500); } else { jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>"); jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500); }
                    if (data === "") { jQuery("#contact_form")[0].reset(); }
                });
            }
            return false;
        });
    }
    function dizme_tm_owl_carousel() {
        "use strict"; var carousel = jQuery('.dizme_tm_testimonials .owl-carousel'); var rtlMode = false; if (jQuery('body').hasClass('rtl')) { rtlMode = 'true'; }
        carousel.owlCarousel({ loop: true, items: 1, lazyLoad: false, margin: 0, autoplay: true, autoplayTimeout: 7000, rtl: rtlMode, dots: true, nav: false, navSpeed: false }); dizme_tm_imgtosvg();
    }
    $('.grid').masonry({ itemSelector: '.grid-item', }); function dizme_tm_input_padding() { "use strict"; var inpText = jQuery('.dizme_tm_subscribe .field input[type="text"]'); var inpSubmit = jQuery('.dizme_tm_subscribe .field input[type="submit"]').outerWidth(); inpText.css({ paddingRight: inpSubmit + 30 + 'px' }); }
    function dizme_tm_progress_line() { "use strict"; var line = jQuery('.progressbar .line'); var documentHeight = jQuery(document).height(); var windowHeight = jQuery(window).height(); var winScroll = jQuery(window).scrollTop(); var value = (winScroll / (documentHeight - windowHeight)) * 100; var position = value; line.css('height', position + "%"); }
    function dizme_tm_totop() { "use strict"; var text = $('.progressbar .text'); text.css({ bottom: 105 + text.width() }); $(".progressbar a").on('click', function (e) { e.preventDefault(); $("html, body").animate({ scrollTop: 0 }, 'slow'); return false; }); }
    jQuery('.anchor_nav').onePageNav(); function dizme_tm_down() {
        "use strict"; var topbar = jQuery('.dizme_tm_header').outerHeight(); jQuery('.anchor').on('click', function () {
            if ($.attr(this, 'href') !== '#') { $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - topbar - 175 }, 800); }
            return false;
        });
    }
    new WOW().init(); $('.portfolio_list').waitForImages().done(function () { $('.grid').masonry({ itemSelector: '.grid-item', }); });

}





