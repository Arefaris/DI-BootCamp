type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

const user: User = {
  type: 'user',
  name: 'Alice',
  age: 30,
};

const product: Product = {
  type: 'product',
  id: 101,
  price: 29.99,
};

const order: Order = {
  type: 'order',
  orderId: 'ORD123456',
  amount: 59.98,
};


const handleData = (arr:(User| Product | Order)[])=>{

  return arr.map(el => el.type === "user" ? 
    `Hi there ${el.name} ${el.age} years old`: 
    el.type === "product" ? `Product price is ${el.price} and id is ${el.id}`:
    el.type === "order" ? `Your order id ${el.orderId} full amount to be paid ${el.amount}`: "")

}

console.log(handleData([user, product, order]))