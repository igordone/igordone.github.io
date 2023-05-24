const chk = document.getElementById('chk')
const additional = document.getElementById("add-card");

chk.addEventListener('change', () => {
    document.body.classList.toggle('theme')
});


additional.style.cursor = 'pointer';

additional.addEventListener('click', () => {
    cardExtend();
    additional.style.cursor = 'default';
});

function cardExtend() {
    if(additional.style.width === ''){
    additional.style.width = '100%';
    }
}

additional.addEventListener('mouseleave', () => {
    additional.style.width = '';
    additional.style.cursor = 'pointer';
});