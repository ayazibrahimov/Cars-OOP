
const CarsCL = {
    cars :[
        {
            title: 'Aston Martin',
            imgUrl:'https://www.motortrend.com/files/661960e99541220008c31a6c/2024astonmartinvantageparkaveqstudio-1.jpg?w=768&width=768&q=75&format=webp',
            price:'194.400',
            description: 'Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin is acknowledged as an iconic global brand synonymous with style, luxury, performance and exclusivity.'
        },
        {
            title: 'Bugatti Chiron',
            imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/800px-Bugatti_Chiron_1.jpg',
            price:'300.400',
            description: 'The Bugatti Chiron is a mid-engine two-seater sports car designed and developed in Germany by Bugatti Engineering GmbH and manufactured in Molsheim'
        },
        {
            title: 'Maserati',
            imgUrl:'https://www.motortrend.com/uploads/2022/11/2023-Maserati-MC20-Cielo-11.jpg?w=768&width=768&q=75&format=webp',
            price:'200.400',
            description: 'Maserati S.p.A. (Italian: [mazeˈraːti]) is an Italian luxury vehicle manufacturer. Established on 1 December 1914 in Bologna, Italy,[4] the company " s headquarters are now in Modena, and its emblem is a trident'
        }
    ],



    render(){
        
       const renderHook = document.getElementById('app')
       const productList = document.createElement('ul')
       productList.className = 'product-list'

       for(let car of this.cars){

        const productItem = document.createElement('li')
        productItem.className = 'product-item '

        productItem.innerHTML = `
          <div>
            <img src='${car.imgUrl}' alt='${car.title}'/>
             <div class='product-item__content'> 
              <h2>${car.title}</h2>
              <h3>\$${car.price}</h3>
              <p>\$${car.description}</p>
              <button>Add to Card</button>
             </div>
          </div>
        `

        productList.append(productItem)
       }
       

       renderHook.append(productList)
    }

}



CarsCL.render()



























//