const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let users = [];
let debts = [];
let payments = [];

// create customer
app.post("/create-user", (req,res)=>{
    const user = {
        id: Date.now(),
        name:req.body.name,
        email:req.body.email
    };

    users.push(user);
    res.json(user);
});

// assign debt
app.post("/assign-debt",(req,res)=>{
    const debt = {
        id:Date.now(),
        userId:req.body.userId,
        original:req.body.amount,
        remaining:req.body.amount
    };

    debts.push(debt);
    res.json(debt);
});

// submit payment
app.post("/payment",(req,res)=>{
    const payment = {
        id:Date.now(),
        userId:req.body.userId,
        debtId:req.body.debtId,
        amount:req.body.amount,
        reference:req.body.reference,
        status:"pending"
    };

    payments.push(payment);
    res.json(payment);
});

// confirm payment
app.post("/confirm",(req,res)=>{
    const payment = payments.find(p=>p.id==req.body.paymentId);

    payment.status="confirmed";

    const debt = debts.find(d=>d.id==payment.debtId);
    debt.remaining -= payment.amount;

    res.json({message:"confirmed"});
});

// get balance
app.get("/balance/:userId",(req,res)=>{
    const userDebts = debts.filter(d=>d.userId==req.params.userId);
    res.json(userDebts);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server running");
});
