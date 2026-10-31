function showMessage() {
    alert("Hello Sunny! JavaScript is working!");
}

function showClock() {
    let time = new Date();

    let hours = String(time.getHours()).padStart(2, "0");
    let minutes = String(time.getMinutes()).padStart(2, "0");
    let seconds = String(time.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(showClock, 1000);
showClock();

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
