export function formattedCurrency(priceRupees){
    return (Math.round(priceRupees)/10).toFixed(2);
}