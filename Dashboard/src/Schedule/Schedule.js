// Tạo format trang Student 
function pageSchedule(student) {
    vam('#main').innerHTML +=
        `<div id="Schedule_wrap">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FHo_Chi_Minh&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=dmFtbmFvbmUyMjIyQGdtYWlsLmNvbQ&color=%23039BE5"
         style="border-width:0;width:100%;height:auto;min-height:calc(100% - 64px);margin:32px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;border-radius:8px" frameborder="0" scrolling="no"></iframe>
        </div>`
    let data = 'd'
    student(data);

}

// Hiển thị trang Student
function HienSchedule() {
    pageSchedule(() => {

    })
}
