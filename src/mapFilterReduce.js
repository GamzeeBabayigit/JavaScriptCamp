let cart =[
    {id:1, productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2, productName:"Bardak",quantity:5,unitPrice:50},
    {id:3, productName:"Kalem",quantity:4,unitPrice:10},
    {id:4, productName:"Şarj Cihazı",quantity:2,unitPrice:200},
    {id:5, productName:"Kitap",quantity:3,unitPrice:30},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")
console.log("----------------------")

let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)

console.log("----------------------")

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)



console.log("----------------------")

function addToCart(sepet){
    sepet.push({id:6, productName:"Ehliyet", quantity:1, unitPrice:1090})
}

cart.map(product=>console.log(product.productName))

addToCart(cart)

console.log(cart)

let sayi = 10
function sayiTopla(number){
    number +=1
}
sayiTopla(sayi)
console.log(sayi)