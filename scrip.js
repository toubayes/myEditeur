//  sellecct button
var removedcode=document.querySelector(".remove-codes");
var runcode=document.querySelector(".run-codes");
var inputcodes=document.querySelector(".input-codes");
var outputcodes=document.querySelector(".output-codes");
//  rus  code
runcode.addEventListener("click" ,()=>{
    outputcodes.innerHTML = inputcodes.value;

    // localStorage.setItem("RESULT" , codes.value);
});

//  removed codes
removedcode.addEventListener("click" ,()=>{
    outputcodes.innerHTML = "";
    
});


onload = ()=>{
    codes.value =  localStorage.getItem("RESULT");
    outputcodes.innerHTML =     outputcodes.innerHTML = inputcodes.value;

 }