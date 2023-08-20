const active = document.querySelector('.active');

function showWrapper() {
    const wrapper = document.querySelector('.wrapper');
    let img = document.querySelector('.img');
    if (wrapper.hidden === true) {
        wrapper.hidden = false;
        img.style = 'background-image: url(./img.svg/Chevron2.svg)';
    } else {
        wrapper.hidden = true
        img.style = 'background-image: url(./img.svg/Chevron.svg)';
    }
}

active.addEventListener('click', function () {
    showWrapper()
});

const par = document.querySelector('.wrapper');

par.addEventListener('click',function(event){ 
let paragraph = document.querySelector('.active p');
paragraph.textContent = event.target.textContent; 
//target - цель(на что кликнули, то и получили)
showWrapper()
})
