$(document).ready(function () {
    $("#nav-placeholder").load("./components/navigation-bar.html", function () {
        setupNavigation();

        $('.nav-btn[data-page="home"]').addClass("nav-btn-active");
    });

    $("#page-content").load("./pages/home.html");
});

function setupNavigation() {
    $(".nav-btn").on("click", function () {
        const page = $(this).data("page");

        $("#page-content").load(`./pages/${page}.html`);

        $(".nav-btn").removeClass("nav-btn-active");
        $(this).addClass("nav-btn-active");
    });
}