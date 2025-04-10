export let deliveryOptions=[{
    id:'1',
    deliveryDays:7,
    priceRupees:0
},{
    id:'2',
    deliveryDays:3,
    priceRupees:120
},{
    id:'3',
    deliveryDays:1,
    priceRupees:200
}];

export function getDeliveryOption(cartItem){
    let matchingDeliveryOption;
    deliveryOptions.forEach((item)=>{
        if(item.id===cartItem.deliveryOptionId){
            matchingDeliveryOption=item;
        }
    });
    return matchingDeliveryOption || deliveryOptions[0];
}