
$(document).ready(function () {
    const $menuButton = $(".menu-toggle");
    const $navigation = $(".site-nav");

    $menuButton.on("click", function () {
        const isOpen = $navigation.toggleClass("is-open")
                                  .hasClass("is-open");

        $menuButton.attr("aria-expanded", isOpen);
    });
});
