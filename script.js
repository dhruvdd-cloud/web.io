function goToPage(page) {
    window.location.href = page;
}

function goBack() {
    window.history.back();
}

//  50 reasons generator
const reasons = [
    "Your smile",
    "Your kindness",
    "Your eyes",
    "Your voice",
    "Your love",
    "Your care",
    "Your hugs",
    "Your laugh",
    "Your support",
    "Your beauty",
    "My Favourite reason",
    "YOU"
];

const list = document.getElementById("reasonsList");

if (list) {
    for (let i = 0; i < reasons.length; i++) {
        const li = document.createElement("li");
        li.textContent = reasons[i];
        list.appendChild(li);
    }
}

function showMessage() {
    document.getElementById("hiddenMessage").innerText =
        "I love you more than words can ever express ❤️ Happy Birthday!";
}
function startCelebration() {
    document.getElementById("hiddenMessage").innerText =
        "Happy Birthday My Love ❤️ You Are My Everything!";

    launchFireworks();
}

// FIREWORKS ANIMATION
function launchFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;

        for (let i = 0; i < 120; i++) {
            particles.push({
                x: x,
                y: y,
                radius: 2,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                speedX: (Math.random() - 0.5) * 6,
                speedY: (Math.random() - 0.5) * 6,
                life: 100
            });
        }
    }

    function animate() {
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;
            p.life--;

            if (p.life <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    setInterval(createFirework, 800);
    animate();
}
// FLOATING HEARTS
function createHearts() {
    const container = document.querySelector(".hearts-container");
    if (!container) return;

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart-float");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 500);
}

createHearts();
// TYPING LOVE LETTER
const message = `My Love,

From the moment you came into my life, everything changed.
You brought light into my darkness,
peace into my chaos,
and love into my heart.

Every smile of yours feels like magic.
Every hug feels like home.
Every second with you feels like a dream I never want to wake up from.

On your birthday, I just want to promise you one thing —
I will always stand with you,
To protect you,
love you,
and choose you.

Forever yours ❤️`;

function typeWriter() {
    const textElement = document.getElementById("typedText");
    if (!textElement) return;

    let index = 0;

    function type() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    type();
}

typeWriter();
// PAGE TRANSITION EFFECT
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

function navigateWithFade(url) {
    document.body.classList.remove("loaded");
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = url;
    }, 1500);
}
function checkPassword() {
    const password = document.getElementById("passwordInput").value;

    // 🔐 CHANGE THIS PASSWORD
    const correctPassword = "CUTUUPIE";

    if (password === correctPassword) {
        navigateWithFade("home.html");
    } else {
        document.getElementById("errorMessage").innerText =
            "Wrong password… try again ❤️";
    }
}
