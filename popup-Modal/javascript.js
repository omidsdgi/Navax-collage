$(document).ready(function () {
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal");
        $("#modal-" + modalId).fadeIn();
    });

    $(".close, .close-button").click(function () {
        $(this).closest(".modal").fadeOut();
    });

    $(window).click(function (event) {
        if ($(event.target).hasClass("modal")) {
            $(event.target).fadeOut();
        }
    });

    $(".save").click(function () {
        var modalId = $(this).data("modal");
        if (confirm("آیا مطمئن هستید که می‌خواهید تغییرات ذخیره شوند؟")) {
            alert("تغییرات مودال " + modalId + " ذخیره شدند.");
            $("#modal-" + modalId).fadeOut();
        }
    });
});