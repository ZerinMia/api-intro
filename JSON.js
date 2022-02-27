//javascript object natation(JSON)

const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);

// console.log(user)
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'monile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
}
const shopStrigified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStrigified);
const coverted = JSON.parse(shopStrigified);
console.log(coverted.owner)
