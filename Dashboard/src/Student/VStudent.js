// Danh sách lớp học
function DsLop(student) {
    console.log(student);
    let danhsachlop = '<p>Tất cả lớp</p>';
    var teacher = {};
    student.forEach((data) => {
        if (data['Class'] != '') {
            if (teacher[data['Class']]) {
                teacher[data['Class']]++
            }
            else {
                teacher[data['Class']] = 1
            }
        }
    })
    console.log(teacher);
    Object.keys(teacher).forEach((key) => {
        danhsachlop += `<p>${key}</p>`
    })
    vam('.danhsachlop>div').innerHTML = danhsachlop
}
// Chi tiết học sinh
function Student(student) {
    let items = '';
    let status_pay = ''
    student.forEach((t) => {
        if (t.ID != '') {
            if (t.PaymentStatus == '0') {
                status_pay = 'none'
            } else if (t.PaymentStatus == '1') {
                status_pay = 'done'
            } else if (t.PaymentStatus == '') {
                status_pay = ''
            }
            items +=
                `<div class="student__detail visi ${status_pay}" data-name="${t.Fullname}" data-id="${t[['ID']]}" data-class="${t['Class']}">
                <a>${t.ID}</a>
                <a>${t.Fullname}</a>
                <a>${t.Class}</a>
                <a>${t.Address}</a>
                <a>${t.Numbers}</a>
                <a class="Student__status">${t.Status}</a>
            </div>`
        }
    })
    vam('#student__data').innerHTML = items;
}
// Chi tiết học sinh 
function DetailStudent(student, checkin) {
    vams('.student__detail').forEach((t) => {
        t.onclick = () => {
            vam('#inforstudentdetail').setAttribute('style', 'display:block');
            vam('.infordetail_wrap').setAttribute('style', 'display:block');
            vam('#inforstudentdetail').onclick = () => {
                vam('#inforstudentdetail').setAttribute('style', 'display:none');
                vam('.infordetail_wrap').setAttribute('style', 'display:none');
                vam('#loadcheckin').setAttribute('style', 'display:none');
            }
            student.forEach((data) => {
                if (t.getAttribute('data-id') == data['ID']) {
                    vam('.infordetail_back-mid__name>h1').innerText = data['Fullname'];
                    let id = data['ID'];
                    // Hiển thị các khóa học 

                    let Khoahoc = '';
                    checkin.forEach((d) => {
                        Khoahoc += `
                        <div class="col-4 infordetail_back-bottom_wrapbox">
                            <div class="on"  data-kh="${d['Kí hiệu']}">
                                <p>${d['Khóa học']}</p>
                                <i class="bi bi-lock-fill lock"></i>
                            </div>
                        </div>`
                    })
                    vam('#loadkhoahoc').innerHTML = Khoahoc

                    // Xử lý dữ liệu báo danh 

                    checkin.forEach((d) => {
                        var ketQua
                        if (t.getAttribute('data-class') == d['Tên lớp']) {
                            // Lấy khóa học lớp đã và đang học
                            function getTwoByTwo(str) {
                                var result = [];
                                for (var i = 0; i < str.length; i += 2) {
                                    result.push(str.substring(i, i + 2));
                                }
                                return result;
                            }
                            ketQua = getTwoByTwo(d['Đã - đang học']);

                            // Khóa các khóa học chưa học
                            for (i = 0; i < ketQua.length; i++) {
                                vams('.on').forEach((log) => {
                                    if (log.getAttribute('data-kh') == ketQua[i]) {
                                        log.classList.remove('on')
                                        log.classList.add('off')
                                    }
                                })
                            }

                            // Xem chi tiết từng khóa
                            vams('.off').forEach((div) => {
                                div.onclick = () => {
                                    let g = div.getAttribute('data-kh')
                                    vam('#loadcheckin h1').innerText = div.innerText
                                    for (let i = 0; i < ketQua.length; i++) {
                                        fetchSheet
                                            .fetch({
                                                gSheetId: d['Điểm danh'],
                                                wSheetName: g,
                                            })
                                            .then((checkindetail) => {
                                                vam('#loadcheckin').setAttribute('style', 'display:flex')
                                                let color = ''
                                                let items = ''
                                                let i = 0
                                                checkindetail.forEach((checkindetails) => {
                                                    if (i == 0) { } else {
                                                        if (checkindetails[`${id}`] == '0') {
                                                            color = '#ffd6d6'
                                                        } else if (checkindetails[`${id}`] == '1') {
                                                            color = '#dfffdf'
                                                        } else if (checkindetails[`${id}`] == '') {
                                                            color = '#afafaf'
                                                        }
                                                        items +=
                                                            `<div class="checkin_box col-2">
                                                        <div style="background-color:${color}">${checkindetails['Mã số học sinh']}</div>
                                                    </div>`

                                                    }
                                                    i++
                                                })
                                                document.querySelector('#loadcheckin_main').innerHTML = items
                                                vam('#Out_checkin').onclick = () => {
                                                    vam('#loadcheckin').setAttribute('style', 'display:none')
                                                }
                                            });
                                    }
                                }
                            })


                        }
                    })
                    async function kiemTraDuongDan(duongDan) {
                        try {
                            const response = await fetch(duongDan);
                            vam('#profile_student').onclick = () => {
                                window.open(`${data['Profile']}`, '_blank');
                            }
                            if (!response.ok) {
                                vam('#profile_student').onclick = () => {
                                    alert('Học sinh chưa có hồ sơ điện tử')
                                }
                            }
                        } catch (error) {

                        }
                    }
                    kiemTraDuongDan(`${data['Profile']}`);
                }
            })
        }
    })
}