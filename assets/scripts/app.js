
class CarsCL{
    constructor(id,title,imgUrl,price,description){
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description
    }
}


// cart of amound order
class CardShopping{

    
    cars = [];


     addProduct(product){
        this.cars.push(product)
        this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
        console.log(this.cars);
    }


    
    render(){
        const cartEl = document.createElement('section')
        cartEl.innerHTML=`
        
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `
        cartEl.className = 'cart'
        this.totalOutput = cartEl.querySelector('h2')
        return cartEl;
    }
}


// one cart
class CarItem{
    constructor(product){
        this.product = product
    }

    addToCard(){
        App.addProductToCard(this.product)
    }

    
    render(){
        const productItem = document.createElement('li')
        productItem.className = 'product-item '

        productItem.innerHTML = `
         
            <img src='${this.product.imgUrl}' alt='${this.product.title}'/>
             <div class='product-item__content'> 
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>\$${this.product.description}</p>
              <button>Add to Card</button>
             </div>
          </div>
        `

        const addCardButton = productItem.querySelector('button')
        addCardButton.addEventListener('click', this.addToCard.bind(this))

        return productItem;
    }
}


// All cart
class CarList{
    cars= [
        new CarsCL(1,'Aston Martin','https://www.motortrend.com/files/661960e99541220008c31a6c/2024astonmartinvantageparkaveqstudio-1.jpg?w=768&width=768&q=75&format=webp','194.400','Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin is acknowledged as an iconic global brand synonymous with style, luxury, performance and exclusivity.'),
        new CarsCL(2,'Bugatti Chiron','https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/800px-Bugatti_Chiron_1.jpg','300.400','The Bugatti Chiron is a mid-engine two-seater sports car designed and developed in Germany by Bugatti Engineering GmbH and manufactured in Molsheim'),
        new CarsCL(3,'Maserati','https://www.motortrend.com/uploads/2022/11/2023-Maserati-MC20-Cielo-11.jpg?w=768&width=768&q=75&format=webp','200.400','Maserati S.p.A. (Italian: [mazeˈraːti]) is an Italian luxury vehicle manufacturer. Established on 1 December 1914 in Bologna, Italy,[4] the company " s headquarters are now in Modena, and its emblem is a trident')
    ]

    constructor(){}

    render(){
        const productList = document.createElement('ul')
        productList.className = 'product-list'
        for(let car of this.cars){
         
         const productData = new CarItem(car)

         const productItem = productData.render()
         productList.append(productItem)
        }
 
        
        return productList;
     }
}



//Shopping render wishlist and all cars
class Shopping{

    render(){
        const renderHook = document.getElementById('app')
        this.cardShopping = new CardShopping()
        const cart = this.cardShopping.render()

        const carList = new CarList()
        const cars = carList.render()

        renderHook.append(cart)
        renderHook.append(cars)
    }
}




class App{

   static init(){   
     const shopping = new Shopping()
     shopping.render()
     this.card = shopping.cardShopping
   }

   static addProductToCard(product){
     this.card.addProduct(product)
   }

}



App.init()
























// const ayaz = {
//     name: 'Ayaz',
//     age:26,


//     calcAge(a,b){
//         console.log((2024 - this.age)* a *b);
//     }
// }

// const asef = {
//     name: 'Asef',
//     age: 22
// }

// const ageCalc = ayaz.calcAge.bind(asef, 10, 20);


// ageCalc()






//