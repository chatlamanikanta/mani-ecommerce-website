import {getProduct} from '../products.js';
import {deliveryOptions, getDeliveryOption} from '../deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
import Cart from '../cart-class.js';

/* import the ESM modules directly from the Internet*/ 

import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'; // These are known as Named Exports which have '{}'.
// here dayjs is a default export.So,we have to use import a function without any curly braces.
// Each file can only have one default export...Check the ESM module of dayjs..
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

// check the documentation for all functions info #dayjs documentation search in google or use AI tool.
/* for simple dddd --> for day
              MMMM --> for month
              D --> for date,etc
*/
/*const currDate=dayjs();
const updatedDate=currDate.add(7,'days');
const newUpadteDate=updatedDate.format('dddd, MMMM D');
console.log(newUpadteDate);*/
export function renderOrderSummary(){
    let cart=new Cart('cart');
    hello();

    let cartSummaryHtml='';
    let emptySec='';
    emptySec=`
        <div class="empty-selection js-empty-selection">
            <div>Your Cart is Empty</div>
            <a href="../../mani-ecommerce-website/index.html">
                <button class="view-products">View Products</button>
            </a>
        </div>
    `
    cart.cartItem.forEach((cartItem)=>{
        const matchingItem=getProduct(cartItem.productId);
        const matchingDeliveryOption=getDeliveryOption(cartItem);

        cartSummaryHtml+=`
            <div class="outer-order-summary">
                <div class="order-summary 
                js-test-summary
                js-outer-order-summary-${matchingItem.id}">
                    <div class="cart-summary">
                        <div class="delivery-date">
                            Delivery date: ${updatingDate(matchingDeliveryOption)}
                        </div>
                        <div class="cart-item-grid">
                            <img src=${matchingItem.image} class="product-image">
                            <div class="cart-item-details">
                                <div class="product-name
                                js-test-product-name-${matchingItem.id}
                                ">
                                    ${matchingItem.name}
                                </div>
                                <div class="product-price js-test-price-${matchingItem.id}">Rs.${matchingItem.getPrice()}</div>
                                <div class="product-quantity js-test-quantity-${matchingItem.id}">
                                    Quantity : <span class="quantity js-quantity-label-${matchingItem.id}">${cartItem.quantity}</span>
                                    <span class="js-updating-button update-button" data-product-id=${matchingItem.id}>Update</span>
                                    <input type="number" class="input-class js-input-block-${matchingItem.id}">
                                    <span class="js-save-button save-button" data-product-id=${matchingItem.id}>Save</span>
                                    <span class="js-deleting-button delete-button
                                    js-delete-test-${matchingItem.id}
                                    " data-product-id=${matchingItem.id}>Delete</span>
                                </div>
                            </div>
                            <div class="delivery-details">
                                <div class="delivery-title">Choose a delivery Option: </div>
                                ${deliveryOptionsFun(matchingItem,cartItem)}
                            </div>
                    </div>
                </div>
            </div>
        `;

    });    
    if(cart.cartItem.length===0){
        document.querySelector('.js-order-summary').innerHTML=cartSummaryHtml+emptySec;
    }else{
        document.querySelector('.js-order-summary').innerHTML=cartSummaryHtml;
    }

    function updatingDate(deliveryOption){
        const date=dayjs();
        const updatedDate=date.add(
            deliveryOption.deliveryDays,'days'
        );
        return updatedDate.format('dddd, MMMM D');
    }
    
    function deliveryOptionsFun(matchingItem,cartItem){
        let html='';
        deliveryOptions.forEach((deliveryOption)=>{
            const formattedDate=updatingDate(deliveryOption);
            const money=(deliveryOption.priceRupees===0)
                ? `FREE` : `Rs.${(deliveryOption.priceRupees)}`;
            const isChecked=deliveryOption.id===cartItem.deliveryOptionId;

            html+=
            `
            <div class="radio-block1 js-delivery-date"
            data-product-id="${matchingItem.id}"
            data-delivery-option-id="${deliveryOption.id}"
            >
                    <div class="radio-input1">
                        <input type="radio" 
                        ${isChecked ? 'checked' : ''}
                        class="radio-input-class" name="radio-${matchingItem.id}">
                    </div>
                    <div class="radio-label1">
                        ${formattedDate}
                    </div>
                    <div class="radio-down1">
                        ${money} - Shipping
                    </div>
                </div>
            
            `
        });
        return html;   
    }
    function updateNumbers(){
        let cartNumber=0;
        cart.cartItem.forEach(item=>{
            cartNumber+=item.quantity;
        });
        if(cartNumber===0){
            document.querySelector('.js-header-number').innerHTML='';
        }else{
            document.querySelector('.js-header-number').innerHTML=cartNumber;
        }
    }
    document.querySelectorAll('.js-deleting-button').forEach((link)=>{
        link.addEventListener('click',()=>{
            const productId=link.dataset.productId;
            cart.removeCartItem(productId);
            updateNumbers();
            const container=document.querySelector(`.js-outer-order-summary-${productId}`);
            container.remove();
            renderOrderSummary();
            renderPaymentSummary();
        });
    });
    document.querySelectorAll('.js-updating-button').forEach(link=>{
        link.addEventListener('click',()=>{
            const productId=link.dataset.productId;
            const container=document.querySelector(`.js-outer-order-summary-${productId}`);
            container.classList.add('is-editing-quantity');
            const defaultValue=document.querySelector(`.js-quantity-label-${productId}`).innerHTML;
            document.querySelector(`.js-input-block-${productId}`).value=defaultValue;
        });
    });
    document.querySelectorAll('.js-save-button').forEach(link=>{
        link.addEventListener('click',()=>{
            const productId=link.dataset.productId;
            const container=document.querySelector(`.js-outer-order-summary-${productId}`);
            container.classList.remove('is-editing-quantity'); 
            const value=Number(document.querySelector(`.js-input-block-${productId}`).value);
            if(value<0 || value>=100){
                alert("Not a valid quantity");
                return;
            }
            document.querySelector(`.js-quantity-label-${productId}`).innerHTML=value;
            cart.cartItem.forEach(item=>{
                if(item.productId===productId){
                    item.quantity=value;
                }
                updateNumbers();
            });
            cart.saveToStorage();  
            renderPaymentSummary();
        });
        
    });
    document.querySelectorAll('.js-delivery-date').forEach((element)=>{
        element.addEventListener('click',()=>{
            const {productId,deliveryOptionId}=element.dataset;
            cart.updateDeliveryDate(productId,deliveryOptionId);
            renderOrderSummary();
            renderPaymentSummary();
        });
    });
    updateNumbers();    
    
}
