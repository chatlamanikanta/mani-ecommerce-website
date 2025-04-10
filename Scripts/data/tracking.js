import Cart from '../data/cart-class.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const cart=new Cart('cart');
function trackingOrder(){
    const trackingData=JSON.parse(localStorage.getItem('track'));
    let trackingHtml='';

    const date1=new Date(dayjs().add(0,'days').format('dddd, MMMM D'));
    const date2=new Date(trackingData.productArrivingDate);

    trackingHtml=`
        <div>
            <a href="orders.html">
                <button class="all-orders-button js-view-orders-button">View all orders</button>
            </a>
        </div>
        <div class="arrived-delivered"><span class="js-status-check">Arriving</span> on ${trackingData.productArrivingDate}</div>
        <div style="font-size:17px">${trackingData.productName}</div>
        <div style="margin-top: 4px;margin-bottom:25px;font-size:17px">Quantity : <span>${trackingData.productQuantity}</span></div>
        <img src=${trackingData.productImage} width="130px" height="130px" style="margin-bottom: 35px;">
        <div class="progress-labels-container">
            <div class="prepared-label">Preparing</div>
            <div class="prepared-label">Shipped</div>
            <div class="delivered-label">Delivered</div>
        </div>
        <div class="progress" style="height: 30px;">
          <div id="dynamicProgressBar" 
               class="progress-bar progress-bar-striped progress-bar-animated" 
               role="progressbar" 
               style="width: 0%;background-color:rgb(6, 146, 6)" 
               aria-valuenow="0" 
               aria-valuemin="0" 
               aria-valuemax="100"
               >
            0%
          </div>
        </div>

    `;

    document.querySelector('.js-tracking-body').innerHTML=trackingHtml;
    updateCart();
    document.querySelector('.js-status-check').innerHTML=(date1<=date2)?'Arriving':'Delivered';
    document.querySelector('.js-view-orders-button').addEventListener('click',()=>{
        localStorage.removeItem('track');
    });

    const progressBar=document.getElementById('dynamicProgressBar');
    // let currentProgress=parseInt(progressBar.getAttribute('aria-valuenow'));
    let currentProgress=0;
    
    let updatedDate1=dayjs(date1).date();
    let updatedDate2=dayjs(date2).date();

    console.log(updatedDate2 ,updatedDate1);
  
    let differDate=updatedDate2-updatedDate1+1;
    console.log(differDate);
    
    for(let i=1;i<=10-differDate;i++){
        setTimeout(()=>{
            currentProgress+=10;
            progressBar.style.width=currentProgress+'%';
            progressBar.setAttribute('aria-valuenow',currentProgress);
            progressBar.textContent=null;
        },700);
    }
    

}
trackingOrder();
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

