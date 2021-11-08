function addToCart(quantity, productName="Tarçın"){ //"Tarçın default değer olarak girildi"
    console.log("sepete eklendi : Ürün : "
     +productName + " Adet : " +quantity)
}
addToCart()
addToCart( 10, "Elma")
addToCart( 15,"Yumurta")
addToCart(1)

let sayHello = ()=>{
    console.log("Hello World !")
}

sayHello()

let sayHello2 = function (){
    console.log("Hello World 2 !")
}

sayHello2()

function addToCart2(){

}


let product1 = {productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product){
    console.log("Ürün : " +product1.productName)
    console.log("Adet : " +product1.quantity)
    console.log("Fiyat : " +product1.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(products){
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)


function add(...numbers){ //rest (...'dan geliyor)
    let total = 0;
    for(let i = 0; i<numbers.length; i++){
        total = total +numbers[i]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)

let numbers = [30,10,40,200]
console.log(Math.max(...numbers))

let[icAnadolu, marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"iç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)



console.log("** ** ** ** ** ** ** ** ** ** ** ** ")


function findPrime(...numbers) {
    let bolunen = numbers;
    let bolen = [];
    let sayac;
    for (let i = 0; i < bolunen.length; i++) {
        sayac = 0;
        for (let j = 2; j < bolunen[i]; j++) {
            if (bolunen[i] % j == 0) {
                sayac++;
            }
        }
        if (sayac == 0) {
            console.log(bolunen[i] + "-->bir asal sayidir");
        } else {
            console.log(bolunen[i] + "-->asal sayi değildir ");
        }
    }
}

findPrime(5, 11, 15, 52, 63, 107);

console.log("** ** ** ** ** ** ** ** ** ** ** ** ")

  


function friendNumber(firstNumber, secondNumber) {
    let firstNumberSum = 0;
    let secondNumberSum = 0;
    for (let i = 1; i < firstNumber; i++) {
        if (firstNumber % i == 0) {
            firstNumberSum = firstNumberSum + i;
        }
    }
    for (let j = 1; j < secondNumber; j++) {
        if (secondNumber % j == 0) {
            secondNumberSum = secondNumberSum + j;
        }
    }

    if (firstNumberSum == secondNumber && secondNumberSum == firstNumber) {
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayı");
    } else {
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayı değildir");
    }
}

friendNumber(8619765, 9627915);

console.log("** ** ** ** ** ** ** ** ** ** ** ** ")

function perfectNUmber (){
    for(let numbers = 1; numbers<1000; numbers++){
        let total = 0;
        for(let i=1; i<numbers; i++){
            if (numbers % i == 0) {
                total = total + i;
            }
            if(numbers==total) {
                console.log(numbers + " Mükemmel Sayı");
            }  
        }
    }
} 
perfectNUmber();
 
console.log("** ** ** ** ** ** ** ** ** ** ** ** ")

function findPrimeNumbers(n) {
    let primeNumbers = []
    for (let i = 1; i <= n; i++) {
        let count = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++ 
            }
        }
        if (count == 0) {
            primeNumbers.push(i) 
        }
        count == 0 
    }  
    console.log("1000'e kadar olan asal sayılar :" + "\n" +primeNumbers + "\n" )
}

findPrimeNumbers(1000)