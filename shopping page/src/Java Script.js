const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');
const menuArrow = document.getElementById("menuArrow");
// ---چرخش فلش-----
menuButton.addEventListener("click", () => {
    menuArrow.classList.toggle("rotate-180");
});

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
});

// -- Offcanvas---
const openOffcanvas = document.getElementById("openOffcanvas");
const closeOffcanvas = document.getElementById("closeOffcanvas");
const offcanvas = document.getElementById("offcanvas");
const overlay = document.getElementById("offcanvasOverlay");
const toggleBtn = document.getElementById("toggleCategories");
const categoriesList = document.getElementById("categoriesList");
const arrowIcon = document.getElementById("arrowIcon");

//چرخش فلش باز شونده--
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleCategories");
    const categoriesList = document.getElementById("categoriesList");
    const arrowIcon = document.getElementById("arrowIcon");
    offcanvas.classList.add("-translate-x-full");
    overlay.classList.add("hidden");

    toggleBtn.addEventListener("click", function () {
        categoriesList.classList.toggle("hidden");
        arrowIcon.textContent = categoriesList.classList.contains("hidden") ? "▲" : "▼";
    });
});


// باز کردن Offcanvas
openOffcanvas.addEventListener("click", () => {
    offcanvas.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
});

// بستن Offcanvas
closeOffcanvas.addEventListener("click", () => {
    offcanvas.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});

// بستن Offcanvas با کلیک روی Overlay
overlay.addEventListener("click", () => {
    offcanvas.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});
//--swiper js--
// اسلایدر محصولات
new Swiper(".swiper1", {
    loop: false,
    navigation: {
        nextEl: ".next-products",
        prevEl: ".prev-products",
    },
    slidesPerView: 1,
    spaceBetween: 140,
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 120 },
        1024: { slidesPerView: 3, spaceBetween: 60 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
        1536: { slidesPerView: 5, spaceBetween: 20 },
    },
});

// اسلایدر میوه‌ها
new Swiper(".swiper2", {
    loop: false,
    navigation: {
        nextEl: ".next-fruits",
        prevEl: ".prev-fruits",
    },
    slidesPerView: 1,
    spaceBetween: 140,
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 120 },
        1024: { slidesPerView: 3, spaceBetween: 60 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
        1536: { slidesPerView: 5, spaceBetween: 20 },
    },
});
