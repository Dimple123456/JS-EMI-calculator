const principal = document.querySelector("#load-amount-input");
const interest = document.querySelector("#interest-rate-input");
const months = document.querySelector("#months-to-pay-input");
const calculate = document.querySelector("#calculate");
const emi = document.querySelector("#emi");

console.log(principal,interest,months);

function calculateEmi(){

    if(principal.value === "" || interest.value === "" || months.value == ""){
        alert("please enter all the values");
        return;

    }

    else{
       const p = principal.value;
       const r = interest.value/1200;
       const n = months.value;
       const emiValue = ( p * r * ( 1 + r ) ** n ) / ( ( 1 + r ) ** n - 1);
       emi.textContent = emiValue.toFixed(2);
       
    }


    
}

calculate.addEventListener("click", calculateEmi);