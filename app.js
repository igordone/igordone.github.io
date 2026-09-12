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

// ── Tech Sphere ──────────────────────────────────────────────
(function () {
    const container = document.getElementById('esferaTecnologias');
    if (!container) return;

    const wrapper = container.parentElement;

    const tecnologias = [
        { name: 'React',           icon: 'code' },
        { name: 'JavaScript',      icon: 'javascript' },
        { name: 'TypeScript',      icon: 'code' },
        { name: 'HTML5',           icon: 'html' },
        { name: 'CSS3',            icon: 'css' },
        { name: 'UI / UX',         icon: 'palette' },
        { name: 'Node.js',         faIcon: 'fa-brands fa-node-js' },
        { name: 'REST APIs',       icon: 'cloud' },
        { name: 'C# .NET',         icon: 'code' },
        { name: 'SQL',             icon: 'database' },
        { name: 'Git',             icon: 'account_tree' },
        { name: 'GitHub',          icon: 'terminal' },
        { name: 'Figma',           icon: 'draw' },
        { name: 'Illustrator',     icon: 'brush' },
        { name: 'Photoshop',       icon: 'photo_camera' },
        { name: 'CI / CD',         icon: 'sync' },
    ];

    function getRaio() {
        return Math.min(wrapper.offsetWidth, wrapper.offsetHeight) * 0.37;
    }
    const total = tecnologias.length;

    function gerarPontosEsfera(n, raio) {
        const pontos = [];
        const offset = 2 / n;
        const incremento = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < n; i++) {
            const y = i * offset - 1 + offset / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = i * incremento;
            pontos.push({
                x: Math.cos(phi) * r * raio,
                y: y * raio,
                z: Math.sin(phi) * r * raio,
            });
        }
        return pontos;
    }

    const pontosBase = gerarPontosEsfera(total, 1);

    const elementos = tecnologias.map((tech, i) => {
        const el = document.createElement('div');
        el.className = 'sphere-tecnologia';

        if (tech.faIcon) {
            const icon = document.createElement('i');
            icon.className = tech.faIcon;
            icon.style.fontSize = 'clamp(16px, 12px + 2vw, 24px)';
            el.appendChild(icon);
        } else {
            const icon = document.createElement('span');
            icon.className = 'material-symbols-outlined';
            icon.textContent = tech.icon;
            el.appendChild(icon);
        }

        const label = document.createElement('span');
        label.textContent = tech.name;

        el.appendChild(label);
        container.appendChild(el);
        return { el, baseNorm: pontosBase[i] };
    });

    let rotX = 0.3;
    let rotY = 0;
    let autoRotate = true;
    const velY = 0.0025;

    let dragging = false;
    let lastX = 0, lastY = 0;

    function onPointerDown(e) {
        dragging = true;
        autoRotate = false;
        lastX = e.touches ? e.touches[0].clientX : e.clientX;
        lastY = e.touches ? e.touches[0].clientY : e.clientY;
    }

    function onPointerMove(e) {
        if (!dragging) return;
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        rotY += (cx - lastX) * 0.005;
        rotX += (cy - lastY) * 0.005;
        rotX = Math.max(-1.2, Math.min(1.2, rotX));
        lastX = cx;
        lastY = cy;
    }

    function onPointerUp() {
        dragging = false;
        setTimeout(() => { if (!dragging) autoRotate = true; }, 1500);
    }

    container.addEventListener('mousedown', onPointerDown);
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    function render() {
        if (autoRotate) rotY += velY;

        const raio = getRaio();
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

        elementos.forEach(({ el, baseNorm }) => {
            const bx = baseNorm.x * raio;
            const by = baseNorm.y * raio;
            const bz = baseNorm.z * raio;

            let x = bx * cosY - bz * sinY;
            let z = bx * sinY + bz * cosY;
            let y = by;

            let y2 = y * cosX - z * sinX;
            let z2 = y * sinX + z * cosX;

            const escala = (z2 + raio * 1.6) / (raio * 2.6);
            const opacidade = Math.max(0.15, Math.min(1, (z2 + raio) / (raio * 2)));
            const blur = Math.max(0, (1 - escala) * 3);
            const zIndex = Math.round((z2 + raio) * 10);

            el.style.transform = `translate3d(${x}px, ${y2}px, 0) scale(${escala.toFixed(3)})`;
            el.style.opacity = opacidade.toFixed(2);
            el.style.filter = `blur(${blur.toFixed(2)}px)`;
            el.style.zIndex = zIndex;
        });

        requestAnimationFrame(render);
    }

    render();
})();