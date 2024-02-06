const store = new Map([
    ["t-shirt", 20],
    ["socks", 10],
    ["shoes", 40]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("shoes");
console.log(shoppingCart)


store.forEach((value, key) => console.log(`${key} $${value}`));