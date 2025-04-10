import { getProduct } from '../products.js';
import { getDeliveryOption } from '../deliveryOptions.js';
import { formattedCurrency } from '../../money/money.js';
import Cart from '../cart-class.js';
import { myOrders } from '../Orders/orders.js';

export function renderPaymentSummary(){
    const cart=new Cart('cart');
    let productPrice=0;
    let shippingPrice=0;
    let total=0;
    let afterTax=0;
    let totalAmount=0;
    let cartQuantity=0;

    function totalAmountCalc(){
        cart.cartItem.forEach((cartItem)=>{
            const matchingItem=getProduct(cartItem.productId);
            productPrice+=(Number(formattedCurrency(matchingItem.priceCents)))*cartItem.quantity;
            const deliveryOption=getDeliveryOption(cartItem);
            shippingPrice+=deliveryOption.priceRupees;
            cartQuantity+=cartItem.quantity;
        });
        total=(productPrice+shippingPrice);
        afterTax=Number(formattedCurrency(total));
        totalAmount=(total+afterTax);
        return totalAmount.toFixed(2);
    }

    function roundAround(number){
        return number.toFixed(2);
    }
    let calcValue=Number(totalAmountCalc());
    let paymentHtml=

    `
        <div class="payment-title">Order Summary</div>
            <div class="items-block">
                <div class="item-heading">Items ( 
                    <span>${cartQuantity}</span> ) :</div>
                <div class="item-price">Rs.${roundAround(productPrice)}</div>
            </div>
            <div class="items-block">
                <div class="shippping-name">Shipping & Handling</div>
                <div class="shipping-charges">Rs.${shippingPrice}</div>
            </div>
            <div class="items-block ">
                <div class="items-total subtotal-row">Total Before Tax : </div>
                <div class="items-price">Rs.${roundAround(total)}</div>
            </div>
            <div class="items-block">
                <div>Estimated Tax (10%) : </div>
                <div class="total-price">Rs.${roundAround(afterTax)}</div>
            </div>
            <hr class="new1">
            <div class="items-block total-order-block">
                <div class="order-total">Order Total : </div>
                <div class="total-amount">Rs.${roundAround(calcValue)}</div>
            </div>
            <div class="order-buttons">
                <a href="orders.html">
                    <button class="order-button js-place-order-button">Place Your Order</button>
                </a>            
            </div>
    `;
    document.querySelector('.js-payment-summary').innerHTML=paymentHtml;
    
    let innerButton = document.querySelector('.js-place-order-button');
    if(cart.cartItem.length === 0) {
        innerButton.disabled = true;
        innerButton.style.cursor='default';
    }

    // Add event listener to the button if it's not disabled.
    if (innerButton && !innerButton.disabled) {
        innerButton.addEventListener('click', () => {
            cart.saveToStorage();
            myOrders();
        });
    }

    
}

