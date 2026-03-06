const API="http://charge-website.render.com";

async function createDebt(){

const name=document.getElementById("name").value;

const amount=document.getElementById("amount").value;

await fetch(API+"/create-debt",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
user:name,
amount:amount
})

});

alert("Debt created");

}

async function submitPayment(){

const debtId=document.getElementById("debtId").value;

const amount=document.getElementById("paymentAmount").value;

const reference=document.getElementById("reference").value;

await fetch(API+"/payment",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
debtId:debtId,
amount:amount,
reference:reference
})

});

alert("Payment submitted");

}

async function loadDebts(){

const res=await fetch(API+"/debts");

const data=await res.json();

document.getElementById("output").innerText=

JSON.stringify(data,null,2);

}
