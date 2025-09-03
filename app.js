const overlay = document.querySelector(".overlay");
const arrow_btn = document.querySelector(".arrow-btn");
const portfolio_btn = document.querySelector(".portfolio-btn");
const pdfCloseBtn = document.querySelector(".pdf-close-btn");

const pdfOverlay = document.querySelector(".pdf-overlay");
const iframe = document.querySelector(".pdf-iframe");

const openPortfolio = () => {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        overlay.classList.toggle("open");

        if (overlay.classList.contains("open")) {
            overlay.style.height = "100%";
            overlay.style.width = "100%";
            arrow_btn.style.transform = "rotate(180deg)";
        } else {
            overlay.style.height = "0";
            arrow_btn.style.transform = "rotate(0deg)";       
        }
    } else {
        if (overlay.style.width === "100%") {
            overlay.style.width = "16rem";
            arrow_btn.style.transform = "rotate(90deg)";
            portfolio_btn.style.left = "17rem";
        } else {
            overlay.style.width = "100%";
            arrow_btn.style.transform = "rotate(270deg)";
            portfolio_btn.style.left = "96%";
        }
    }
}

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
    pdfIframe.src = "";
});