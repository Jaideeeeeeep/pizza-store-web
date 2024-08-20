const cartOperations={
    pizzas:[],
addIncart(pizzaId){
  const pizza=this.pizzas.find(currentPizza=>currentPizza.id==pizzaId );
  pizza.isIncart=true;
  console.log(this.pizzas);
  },
removeFromCart(){

},
viewAll(){
  return this.pizzas.filter(pizza=>pizza.isIncart);
},
totalcompute(){

}
}

export default cartOperations;