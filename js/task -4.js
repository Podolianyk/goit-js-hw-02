// функція повинна перевіряти можливість доставки товару в країну користувача (параметр country) 
// і повертати повідомлення про результат.
function getShippingCost(country) {
    //змінні вартості доставки у країну
    let priceChina = 100;
    let priceChile = 250;
    let priceAustralia = 170;
    let priceJamaica = 120;

    switch (country) {
        //якщо країна користувача China, то повертається повідомлення з вартістю доставки:
        case "China":
            return `"Shipping to ${country} will cost ${priceChina} credits"`
        //якщо країна користувача Chile, то повертається повідомлення з вартістю доставки:
        case "Chile":
            return `"Shipping to ${country} will cost ${priceChile} credits"`
        //якщо країна користувача Australia, то повертається повідомлення з вартістю доставки:
        case "Australia":
            return `"Shipping to ${country} will cost ${priceAustralia} credits"`
        //якщо країна користувача Jamaica, то повертається повідомлення з вартістю доставки:
        case "Jamaica":
            return `"Shipping to ${country} will cost ${priceJamaica} credits"`
        default:
            //Якщо зазначена країна відсутня у списку доставки, то функція повинна повернути рядок:
            return `"Sorry, there is no delivery to your country"`
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

