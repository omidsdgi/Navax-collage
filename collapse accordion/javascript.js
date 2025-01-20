$(document).ready(function(){
    // عملکرد برای هر گروه آکاردئون به طور مستقل
    $(".accordion-header").click(function(){
        var group = $(this).closest(".accordion-group"); // گروه مربوطه
        var content = $(this).next(".accordion-content"); // محتوای مربوطه
        var isVisible = content.is(":visible");

        // بستن تمام محتواهای این گروه
        group.find(".accordion-content").slideUp().prev(".accordion-header").removeClass("active");

        // اگر محتوا باز نبوده، آن را باز کن
        if (!isVisible) {
            content.slideDown();
            $(this).addClass("active");
        }
    });
});