export let cart;
loadStorage();
export function loadStorage(){
    cart=JSON.parse(localStorage.getItem('cart'))||[];

    if(!cart) {[{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:6,
            deliveryOptionId:'1'
        },{
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:4,
            deliveryOptionId:'2'
        },{
            productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
            quantity:8,
            deliveryOptionId:'3'
        }];

    };
}
export function addToCart(productId,quantity){
    let matchingItem;
    cart.forEach((item)=>{
        if(item.productId===productId){
            matchingItem=item;
        }
    });

    if(matchingItem){
        matchingItem.quantity+=quantity;
    }else{
        cart.push({
            productId,
            quantity,
            deliveryOptionId:'1'
        });
    }
    saveToStorage();
}

export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function removeCartItem(productId){
    let newCart=[];
    cart.forEach(item=>{
        if(item.productId!==productId){
            newCart.push(item);
        }
    });
    cart=newCart;
    saveToStorage();
}

export function updateDeliveryDate(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((item)=>{
        if(item.productId===productId){
            matchingItem=item;
        }
    });

    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage(); 
}

// For Promises...

export function fun1(fun){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
        console.log("Apple loaded");
        fun();
    })
    xhr.open('GET','https://supersimplebackend.dev/documentation');
    xhr.send();
}

export function fun2(fun){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
        console.log("First loaded");
        fun();
    })
    xhr.open('GET','https://supersimplebackend.dev/products');
    xhr.send();
}

export function fun3(){
    console.log("Hello Manikanta");
}

export function fun4(){
    fetch('https://supersimplebackend.dev/products/first').then(response=>{
        response.json();
    }).then(()=>{
        console.log("Fun4 loaded ");
    });
}




