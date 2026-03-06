const API="https://YOURBACKENDURL.onrender.com";

async function getBalance(){

const userId=document.getElementById("userId").value;

const res=await fetch(API+"/balance/"+userId);

const data=await res.json();

document.getElementById("balance").innerHTML=
JSON.stringify(data,null,2);

}

async function submitPayment(){

const debtId=document.getElementById("debtId").value;
const amount=document.getElementById("amount").value;
const reference=document.getElementById("reference").value;

await fetch(API+"/payment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
debtId,
amount,
reference
})
});

alert("payment submitted");
}