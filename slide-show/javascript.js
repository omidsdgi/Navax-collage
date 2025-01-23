const slider = document.getElementById('slider');
const images = document.querySelectorAll('img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    images.forEach((img,i) => {
        img.classList.toggle("active", i===index);

    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide,5000)=
}
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}
nextButton.addEventListener('click', ()=>{
    nextSlide();
});
prevButton.addEventListener('click', ()=>{
    prevSlide();
})
slider.addEventListener('mouseenter', stopAutoPlay)
slider.addEventListener('mouseleave', startAutoPlay)

startAutoPlay();
