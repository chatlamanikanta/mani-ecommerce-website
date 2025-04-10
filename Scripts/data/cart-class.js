class Cart{
    cartItem;
    localStorageKey;

    // Constructor of the class Cart.
    // We have to use the name "constuctor" to create a constructor.
    // To make any property "Private" we have to add '#'(Hash or Number Sign) before the variable..
    // If there is no "#" symbol before a property then it is a "Public Property".
    constructor(localStorageKey){
        this.localStorageKey=localStorageKey;
        this.loadStorage();
    }
    loadStorage(){
        this.cartItem=JSON.parse(localStorage.getItem(this.localStorageKey))||[]
        
        if(!this.cartItem){[{
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
        }
    }


    saveToStorage(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItem));
    }

    addToCart(productId,quantity){
        let matchingItem;
        this.cartItem.forEach((item)=>{
            if(item.productId===productId){
                matchingItem=item;
            }
        });
    
        if(matchingItem){
            matchingItem.quantity+=quantity;
        }else{
            this.cartItem.push({
                productId,
                quantity,
                deliveryOptionId:'1'
            });
        }
        this.saveToStorage();
    }

    removeCartItem(productId){
        let newCart=[];
        this.cartItem.forEach(item=>{
            if(item.productId!==productId){
                newCart.push(item);
            }
        });
        this.cartItem=newCart;
        this.saveToStorage();
    }

    updateDeliveryDate(productId,deliveryOptionId){
        let matchingItem;
        this.cartItem.forEach((item)=>{
            if(item.productId===productId){
                matchingItem=item;
            }
        });
    
        matchingItem.deliveryOptionId=deliveryOptionId;
        this.saveToStorage(); 
    }
}

const cart = new Cart('cart');


console.log(cart);

console.log(cart instanceof Cart);

export default Cart

