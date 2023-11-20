$(function () {
    let tabnm = "";
    $(".tabhead h4 a").click(function (e) {
        e.preventDefault()
        tabnm = $(this).attr("href")
        $(tabnm).addClass("act").siblings().removeClass("act")
    })
})