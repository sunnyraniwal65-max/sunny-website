
// DIGITAL CLOCK

function showClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

}

showClock();
setInterval(showClock, 1000);


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", function () {

        const isOpen = mobileNav.classList.toggle("show");

        menuBtn.textContent = isOpen ? "✕" : "☰";

        menuBtn.setAttribute("aria-expanded", String(isOpen));

    });

    mobileNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("show");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// BACK TO TOP BUTTON

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

}, { passive: true });


function backToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// GOLDEN SCROLL PROGRESS BAR

function updateProgressBar() {

    const bar = document.getElementById("progressBar");

    if (!bar) return;

    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = totalHeight > 0
        ? (window.scrollY / totalHeight) * 100
        : 0;

    bar.style.width = progress + "%";

}

window.addEventListener("scroll", updateProgressBar, {
    passive: true
});

updateProgressBar();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("active");
    });

}
