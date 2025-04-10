import { bookedOrders } from '../saveOrders.js';
import Cart from '../cart-class.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const cart=new Cart('cart');
function updatedOrders(){
    updateCart();
    let currentDate=dayjs();
    let complete='';
    bookedOrders.forEach(item=>{
        const parser=new DOMParser();
        const doc=parser.parseFromString(item.fullHtml,'text/html');
        // console.log(doc);

        doc.querySelectorAll('.js-orders-page').forEach(page=>{
            const statusElement=page.querySelector('.js-check-status');
            const dateSelection=page.querySelector('.js-check-date');
            
            let objectDate=dayjs(dateSelection.innerHTML);

            if(currentDate.month() > objectDate.month() || 
                (currentDate.month() === objectDate.month() && 
                currentDate.date() > objectDate.date())
            ){
                statusElement.textContent="Delivered";
            }else{
                console.log("Arriving");
                statusElement.textContent="Arriving";
            }
        });
        // console.log(doc.body.innerHTML);

        item.fullHtml=doc.body.innerHTML;

        complete+=item.fullHtml;
    });
    document.querySelector('.js-outer-border').innerHTML=complete;

    document.querySelectorAll('.js-buy-again').forEach((button)=>{
        button.addEventListener('click',()=>{ 
            const {productId}=button.dataset;
            cart.addToCart(productId,1);
            updateCart();
            button.classList.add('added-button'); 
            setTimeout(()=>{
                button.classList.remove('added-button');
            },1500);
        });
    });

    document.querySelectorAll('.js-track-button').forEach((button)=>{
        button.addEventListener('click',()=>{
            const {productName,productQuantity,productImage,productArrivingDate}=button.dataset;
            const trackingData={
                productName,
                productQuantity,
                productImage,
                productArrivingDate
            }
            localStorage.setItem('track',JSON.stringify(trackingData));
        });
    });
    
}

updatedOrders();
const hamburger = document.querySelector('.js-ham-menu');
const rightSection = document.querySelector('.right-sec');

hamburger.addEventListener('click', () => {
    rightSection.classList.toggle('active');
});

function updateCart(){
    let total=0;
    cart.cartItem.forEach(item=>{
        total+=item.quantity;
    });
    if(cart.cartItem.length===0){
        document.querySelector('.js-cart-quantity').innerHTML='';
    }else{
        document.querySelector('.js-cart-quantity').innerHTML=total;
    }
}
console.log(bookedOrders)


