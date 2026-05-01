const pdfCloseBtn = document.querySelector(".pdf-close-btn");
const pdfOverlay = document.querySelector(".pdf-overlay");
const iframe = document.querySelector(".pdf-iframe");

const drivePdfLinks = {
    "radtonics.pdf": "https://drive.google.com/file/d/1R8eiBd_iuxAfbEUyzeShgc4J-u_AxbNq/preview",
    "levovc.pdf": "https://drive.google.com/file/d/1EgJ8fPFGnrTfF5qTIHbOTOUvXbLy0kNF/preview",
    "cookspace.pdf": "https://drive.google.com/file/d/167wuiopbVuqciCrEe8CXxSo9a5cc1H5r/preview",
    "iscamboh.pdf": "https://drive.google.com/file/d/1aK_wVVoTjEvLAeiWJrdU3fUoAJTvJbNy/preview",
    "wawlet.pdf": "https://drive.google.com/file/d/1K7POuAGtYcMfq4tWQazzOxUocnhqf7ZS/preview",
    "specchio.pdf": "https://drive.google.com/file/d/1e-jfscZcDDUga6ElJZ1coFfEPml3aaJi/preview",
    "2o2.pdf": "https://drive.google.com/file/d/1poftO-dPbNynzxOnbxc9HkNCdtiE0Rb2/preview"
};

document.querySelectorAll(".btn-abrir-pdf").forEach(button => {
    button.addEventListener("click", () => {
        const pdfFile = button.getAttribute("data-pdf");
        const pdfUrl = drivePdfLinks[pdfFile];

        if (pdfUrl) {
            iframe.src = pdfUrl;
            pdfOverlay.style.display = "flex";
        } else {
            console.error(`Link não encontrado para: ${pdfFile}`);
        }
    });
});

pdfOverlay.addEventListener("click", (event) => {
    if (event.target === pdfOverlay) {
        pdfOverlay.style.display = "none";
        iframe.src = "";
    }
});

pdfCloseBtn.addEventListener("click", () => {
    pdfOverlay.style.display = "none";
    iframe.src = "";
});

// Carousel
const carousel = document.getElementById('portfolioCarousel');
const nextBtn = document.getElementById('carouselNext');
const indicators = document.getElementById('carouselIndicators');
const cards = document.querySelectorAll('.portfolio-card');

if (carousel && indicators && cards.length > 0) {

    cards.forEach((card, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            carousel.scrollTo({
                left: card.offsetLeft - carousel.offsetLeft,
                behavior: 'smooth'
            });
        });

        indicators.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-indicators .dot');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentScroll = carousel.scrollLeft;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            let nextIndex = 0;
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].offsetLeft - carousel.offsetLeft > currentScroll + 10) {
                    nextIndex = i;
                    break;
                }
            }

            if (currentScroll >= maxScroll - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollTo({
                    left: cards[nextIndex].offsetLeft - carousel.offsetLeft,
                    behavior: 'smooth'
                });
            }
        });
    }

    carousel.addEventListener('scroll', () => {
        let activeIndex = 0;
        let minDiff = Infinity;

        cards.forEach((card, index) => {
            const diff = Math.abs((card.offsetLeft - carousel.offsetLeft) - carousel.scrollLeft);
            if (diff < minDiff) {
                minDiff = diff;
                activeIndex = index;
            }
        });

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[activeIndex]) {
            dots[activeIndex].classList.add('active');
        }
    });
}

const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

const typingElements = document.querySelectorAll('.eyebrow, .role');

const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
            const el = entry.target;
            el.classList.add('typed');

            const text = el.textContent.trim();
            el.textContent = '';
            el.classList.add('typing-cursor');

            el.style.minHeight = '1.2em';
            el.style.display = 'inline-block';

            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;

                    const speed = Math.random() * (120 - 50) + 50;
                    setTimeout(typeWriter, speed);
                } else {

                    setTimeout(() => {
                        el.classList.remove('typing-cursor');
                        el.style.borderRight = 'none';
                    }, 2500);
                }
            }

            setTimeout(typeWriter, 300);
        }
    });
}, { threshold: 0.5 });

typingElements.forEach(el => typingObserver.observe(el));