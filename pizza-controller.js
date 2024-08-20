/*
call backend API via apiclient.js
*/
import {apiCall} from "./api-client.js";
async function loadPizza(){
const URL="https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json";
try{
const response= await apiCall(URL);
const obj = await response.json();
    printPizzas(obj.Vegetarian);
console.log("code run");
}
catch (err){
  console.log('Error in fetch call', err);
}
}
loadPizza();
function printPizzas(pizzas)
{
    cartOperations.pizzas=pizzas;
    // loop and call printPizza
    for(var i=0;i<pizzas.length;i++)
    {
        printPizza(pizzas[i]);
    }

}
function addToCart(){
    const pizzaId=this.getAttribute('pizza-id');
   //console.log('Add To Cart Call',this.getAttribute('pizza-id'));
   cartOperations.addIncart(pizzaId);
    printCart();
}
function printCart(){
    const pizzasInCart = cartOperations.viewAll();
    document.getElementById('carts').innerHTML='';
    pizzasInCart.forEach(p=>printCartItem(p));
}
function printCartItem(pizza){
   const pTag=document.createElement('p');
   pTag.innerText=`${pizza.name} ${pizza.price}`;
   document.getElementById('carts').appendChild(pTag);
}
function printTotal(pizzasInCart){
return pizzasInCart.reduce((acc,pizza)=>acc + pizza.price);
}
function printPizza(pizza){
// design of one pizza
//runtime dOM 
const carddiv=document.createElement('div');//<div></div>
carddiv.className='card';
carddiv.style.width='18rem';
const img= document.createElement('img');//img
img.src=pizza.assets.menu[0].url;
img.className='card-img-top';
const cardBodyDiv=document.createElement('div');
cardBodyDiv.className='card-body';
const h5=document.createElement('h5');//h5
h5.className='card-title';
h5.innerText=pizza.name;
const pTag=document.createElement('p');
pTag.className='card-text';
pTag.innerText=pizza['menu_description'] + " \u20B9 " + pizza.price;
const button=document.createElement('button');
button.innerText='Add To Cart';
button.setAttribute('pizza-id',pizza.id);
button.className='btn btn-primary';
button.addEventListener('click',addToCart);
cardBodyDiv.appendChild(h5);
cardBodyDiv.appendChild(pTag);
cardBodyDiv.appendChild(button);
carddiv.appendChild(img);
carddiv.appendChild(cardBodyDiv);
const div=document.getElementById('pizzas');
div.appendChild(carddiv);
}