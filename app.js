let slider = document.querySelector ('.slider');
let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')
let line3 = document.getElementById('line3')
let line4 = document.getElementById('line4')
let active = document.getElementById('active')
let container = document.querySelector('.container')


line1.addEventListener('click', function(){
slider.style.transform = 'translateX(0)';
active.style.top = "0";
})

line2.addEventListener('click', function(){
slider.style.transform = 'translateX(-25%)';
active.style.top = "80px";

})
line3.addEventListener('click', function(){
slider.style.transform = 'translateX(-50%)';
active.style.top = "160px";

})
line4.addEventListener('click', function(){
slider.style.transform = 'translateX(-75%)';
active.style.top = "240px";
})