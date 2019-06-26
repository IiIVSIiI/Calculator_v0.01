let buttons=document.querySelectorAll('.btn-num');
console.log(buttons)
let display=document.querySelector('.display');
let tablo=display.textContent;

function getNumber(somebutton) {
  let number=somebutton.textContent;
  somebutton.addEventListener('click', function() {
    if (display.textContent.length<=9){
    display.textContent+=number}
  })
}
for (var i=0;i<buttons.length;i++) {
  if (i!==9||i!==11) {
   getNumber(buttons[i])}else{continue}}