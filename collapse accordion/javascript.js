$(document).ready(function(){
    $(".accordion-header").click(function(){
        var group = $(this).closest(".accordion-group");
        var content = $(this).next(".accordion-content");
        var isVisible = content.is(":visible");

          group.find(".accordion-content").slideUp().prev(".accordion-header").removeClass("active");
       
        if (!isVisible) {
            content.slideDown();
            $(this).addClass("active");
        }
    });
});
