// Set a date exactly 14 days from now so it always looks "active" when you open it
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 14); 

const eventDate = futureDate.getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h3>Sold Out</h3>";
    }
}, 1000);
