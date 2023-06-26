"use strict"

const body = document.querySelector('body');
const elToggle = document.getElementById('toggle');
const elDemo = document.getElementById('demo');
const elSpan = document.querySelector('.color');
const elColor = document.querySelector('.black');
const elDye = document.querySelector('.dye');

elToggle.onclick = function() {
   elToggle.classList.toggle('active');
   body.classList.toggle('active');
   elDemo.classList.toggle('active');
   elSpan.classList.toggle('active');
   elColor.classList.toggle('active');
   elDye.classList.toggle('active');
}
