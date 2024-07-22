
window.scroll({
    top: 0,
    behavior: 'smooth',
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })

};

// manu responsivo//
document.getElementById('navbar-toggle').addEventListener("click", function () {
    const navbarMenu = document.getElementById('navbar__menu');
    if (navbarMenu.style.display === "none" || navbarMenu.style.display === '') {
        navbarMenu.style.display = "flex";

    } else {
        navbarMenu.style.display = 'none';

    }
});


const scrollers = document.querySelectorAll('.scroller');
console.log(scrollers);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();

}
function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    })

}


const container = document.querySelector('.cards-container');

function scrollLeft() {
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    container.scrollBy({ left: 300, behavior: 'smooth' });
}