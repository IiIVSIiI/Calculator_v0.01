let buttons=document.querySelectorAll('.btn-num');
let display=document.querySelector('.display');
let operators=document.querySelectorAll('.operator')
let operString='';
let updisplay=document.querySelector('.updisplay');
let result=document.querySelector('.result')
let cancel=document.querySelector('.cancel')
let del=document.querySelector('.delete')
function getNumber(somebutton) {
  let number=somebutton.textContent;
  somebutton.addEventListener('click', function() {
    if (display.textContent.length<=9){
    display.textContent+=number;
    operString+=number; 
    console.log(operString)
    }
  })
}

function numOperation(buttonOP) {
  let oper=buttonOP.textContent;
  buttonOP.addEventListener('click', function(){
    let swap=display.textContent;
    console.log(swap)
    operString+=oper;
    updisplay.textContent=swap;
    display.textContent=''
    console.log(display.textContent)
    console.log(updisplay)
    console.log(operString)
  })
}

for (let i=0;i<buttons.length;i++) {
  if (i!==9||i!==11) {
   getNumber(buttons[i])}else{continue}}
for (let j=0;j<operators.length;j++) {
  numOperation(operators[j])
}   

result.addEventListener('click', function() {
  let getResult=eval(operString);
  updisplay.textContent=getResult;
  display.textContent=''
})
cancel.addEventListener('click', function(){
  operString='';
  display.textContent='';
  updisplay.textContent='';
})

del.addEventListener('click', function() {
    let textOn=display.textContent.slice(0, -1);
    display.textContent=textOn;
  
})
