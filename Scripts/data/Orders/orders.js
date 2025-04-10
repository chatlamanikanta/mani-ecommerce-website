import { getProduct } from '../products.js';
import {getDeliveryOption} from '../deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formattedCurrency } from '../../money/money.js';
import Cart from '../cart-class.js';
import { addOrder } from '../saveOrders.js';

export function myOrders(){
    const cart=new Cart('cart');
    let uniqueID=crypto.randomUUID();
    let presentDate=dayjs().format('MMMM D');

    function updatingDate(deliveryOption){
        const date=dayjs();
        const orderDate=date.add(deliveryOption.deliveryDays,'days');
        return orderDate.format('MMMM D');
    }

    function deliveryDateDeclaration(deliveryOption){
        const date=dayjs();
        const orderDate=date.add(deliveryOption.deliveryDays,'days');
        return orderDate.format('dddd, MMMM D');
    }

    function totalAmountCalc(){
        let productPrice=0;
        let shippingPrice=0;
        let total=0;
        let afterTax=0;
        let totalAmount=0;
        let cartQuantity=0;
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
    
    const total=totalAmountCalc();    
    let html='';
    let htmlHeader='';

    cart.cartItem.forEach((item)=>{
        const matchingItem=getProduct(item.productId);
        const matchingDeliveryOption=getDeliveryOption(item);
        html+=
        `<div class="order-block js-orders-page">
            <div class="order-details"> 
                <div class="details-left-sec">
                    <div class="product-img-block">
                        <img class="product-img" src=${matchingItem.image}>
                    </div>
                    <div class="product-details-block">
                        <div class="product-name">
                            ${matchingItem.name}
                        </div>
                        <div class="arriving-details">
                            <span class="js-check-status">Arriving</span> On : 
                            <span class="js-check-date">${updatingDate(matchingDeliveryOption)}</span>;
                        </div>
                        <div class="quantity-details">Quantity : ${item.quantity}</div>
                        <button class="buy-again-button js-buy-again" data-product-id="${matchingItem.id}">
                            <div class="buy-inner-block">
                                <img class="buy-img" src="img/buy-again.png">
                                <span class="buy-again-label">Buy it again</span>
                            </div>
                            <span class="buy-again-success">✓ Added</span>
                        </button>
                    </div>
                    <div class="tracking-button-block js-track-button" 
                    data-product-name="${matchingItem.name}"
                    data-product-quantity="${item.quantity}"
                    data-product-image="${matchingItem.image}"
                    data-product-arriving-date="${deliveryDateDeclaration(matchingDeliveryOption)}"
                    >
                        <a href="tracking.html">
                            <button class="track-button">Track Package</button>
                        </a>
                    </div>
                </div>
            </div>  
        </div>      
        `;
        
        htmlHeader=`
            <div class="js-outer-header-block">
                <div class="order-header">
                    <div class="order-header-sec">
                        <div class="order-date">
                            <div class="order-placed">Order Placed:</div>
                            <div>${presentDate}</div>
                        </div>
                        <div class="total-amount">
                            <div class="order-placed">Total:</div>
                            <div>Rs.${total}</div>
                        </div>
                        <div class="order-id-block">
                            <div class="order-placed">Order ID:</div>
                            <div>${uniqueID}</div>
                        </div>
                    </div>
                </div>
                <div class="header-border"></div>
            </div>`;

        
    });
    let fullHtml='';
    
    fullHtml=`
        <div class="orders-block js-orders-comp-block">${htmlHeader+html+''}</div>
    `;
    localStorage.removeItem('cart');
    addOrder({
        fullHtml,
        uniqueID,
        presentDate
    });
    
}

