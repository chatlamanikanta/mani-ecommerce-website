import {renderOrderSummary} from './checkoutJS/orderSummary.js';
import { renderPaymentSummary } from './checkoutJS/paymentSummary.js';
import '../data/cart-class.js';
// import '../data/backend-practice.js'
// import {fun4,fun2,fun3} from '../data/cart.js';

renderOrderSummary();
renderPaymentSummary();

/*
Promise.all([
    fun4(),
new Promise((resolve)=>{
    fun2(()=>{
        resolve('Value2');
    });
})

]).then((values)=>{
    console.log(values);
    fun3();
})

/*
new Promise((resolve)=>{
    fun1(()=>{
        resolve();
    })
}).then(()=>{
    return new Promise((resolve)=>{
        fun2(()=>{
            resolve();
        });
    });
}).then(()=>{
    fun3();
})*/

// Using fetch()---> alternative way for the XMLHttpRequest.

/*
function fetchRequest(){
    fetch('https://supersimplebackend.dev/products').then((response)=>{
        return response.json();
    }).then((productsDetails)=>{
        console.log(productsDetails);
    })
}

fetchRequest();

// shortcut for Promise
async function loadPage(){
    console.log("I'm async function");

    await fetch('https://supersimplebackend.dev/products').then((response)=>{
        console.log(response.json());
    });

    return 'Value Fun';// same as resolve("Value Fun")
}
loadPage().then((value)=>{
    console.log("Async function loaded successfully");
    console.log(value);
});

*/