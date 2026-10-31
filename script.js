
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


// BACK TO TOP BUTTON
const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (!topButton) return;

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
