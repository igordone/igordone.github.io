const overlay = document.querySelector(".overlay");
const arrow_btn = document.querySelector(".arrow-btn");
const portfolio_btn = document.querySelector(".portfolio-btn");

function openPortfolio() {
    if(overlay.style.width === "100%"){
        overlay.style.width = "16rem";
        arrow_btn.style.transform = "rotate(90deg)";
        portfolio_btn.style.left = "17rem";
    } else {
        overlay.style.width = "100%";
        arrow_btn.style.transform = "rotate(270deg)";
        portfolio_btn.style.left = "96%";
    }
}