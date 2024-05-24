// Tạo format trang Student 
function pageStudent(student) {
    vam('#main').innerHTML +=
        `<div id='T__Student' class="main-title row" style="height:100%;min-width:1100px;margin:0">
            <div class="col-lg-12" style="height: 100%;display: flex;flex-direction: column;padding: calc(20px + .5rem)">
                <div class="Student__Main">
                    <div class="Student__Main-wrap">
                        <div class="loading title">
                           <div style="display:flex;gap:16px;align-items:center">
                           <div class="chonlop">
                           <button>Tất cả lớp</button>
                           <i class="bi bi-caret-down-fill"></i>
                           <div class="danhsachlop">
                               <div>

                               </div>
                           </div>

                       </div>
                       <div style="display:flex;gap:10px">
                           <div style="display:flex;gap:10px;align-items:center"><div style="width: 16px;
height: 16px;
background-color: red;
border-radius: 3px;"></div>Chưa đóng hoc phí</div>
                           <div style="display:flex;gap:10px;align-items:center"><div style="width: 16px;
height: 16px;
background-color: green;
border-radius: 3px;"></div>Đã đóng học phí</div>
                       </div>
                           </div>
                            <div class="detail__search">
                                <input type="search" onkeyup="searchData()" placeholder="Tìm kiếm bằng tên" id="SearchStudent">
                                    <button id="search" class="">
                                        <i class="bi bi-search"></i>
                                    </button>
                                    <p><i class="bi bi-x-lg"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="Student__Main-wrap" style="margin-top: 1rem;height: calc(100% - 5rem);">
                        <div class="loading student-detail" >
                            <div class="student__title">
                                <a>STT</a>
                                <a>Họ và tên</a>
                                <a>Lớp</a>
                                <a>Địa chỉ</a>
                                <a>Số điện thoại</a>
                                <a>Trạng thái</a>
                            </div>
                            <div id="student__data" style="overflow: hidden;
                            overflow-y: auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    let data = 'd'
    student(data);

}

// Hiển thị trang Student
function HienStudent() {
    pageStudent(() => {
        loadstudent((student, checkin) => {
            // Hiển thị danh sách lớp
            DsLop(student)
            // Hiển thị danh sách học sinh
            Student(student)
            // Chi tiết học sinh
            DetailStudent(student, checkin)

            // Set trạng thái học sinh
            vams('.Student__status').forEach((t) => {
                if (t.innerText == 'Đang học') {
                    t.setAttribute('style', 'color:#29bcce')
                }
                else if (t.innerText == 'Chờ lên khóa') {
                    t.setAttribute('style', 'color:#fed45b')
                }
                else if (t.innerText == 'Nghỉ học') {
                    t.setAttribute('style', 'color:#f15353')
                }
            })

            vams('.danhsachlop>div>p').forEach((t) => {
                t.onclick = () => {
                    vam('.chonlop>button').innerText = t.innerText;
                    if (t.innerText == 'Tất cả lớp') {
                        vams('.student__detail').forEach((f) => {
                            if (f.getAttribute('class').includes("search") == true) {
                                f.classList.remove('search')
                            }
                            f.classList.add('visi')
                        })
                    }
                    else {
                        vams('.student__detail').forEach((f) => {
                            if (f.getAttribute('class').includes("visi") == true) {
                                f.classList.remove('visi')
                            }
                            if (f.getAttribute('class').includes("search") == true) {
                                f.classList.remove('search')
                            }
                            let g = f.getAttribute('data-class')
                            if (g == t.innerText) {
                                f.classList.add('visi')
                            }
                        })
                    }
                }
            })
        });
        vam('.detail__search>p').onclick = () => {
            vams(`.student__detail.visi`).forEach((t) => {
                if (t.getAttribute('class').includes("search") == true) {
                    t.classList.remove('search')
                }
            })
        }
        vam('.chonlop').onclick = () => {
            vam('.danhsachlop').classList.toggle('hide')
        }


    })
}

// tìm kiếm thông tin học sinh
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function searchData() {
    const searchValue = removeAccents(document.querySelector("#SearchStudent").value.toLowerCase());
    let data = [];
    vams(`.student__detail.visi`).forEach((t) => {
        data = data.concat(t.getAttribute('data-name'))
        t.classList.add('search')
    })
    const filteredData = data.filter(item => removeAccents(item.toLowerCase()).includes(searchValue));
    filteredData.forEach(item => {
        vams(`.student__detail.search[data-name="${item}"]`).forEach((t) => {
            t.classList.remove('search')
        })
    });
}