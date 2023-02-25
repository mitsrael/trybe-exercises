const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
/* Complete a função customerInfo() para que seu retorno seja similar a 
'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
R. Rua das Flores, Nº: 389, AP: 701'. */
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order['name'];
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const ap = order.address.apartment

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${number}, R. ${street}, ${number}, AP: ${ap}`);
};

customerInfo(order);

/* Complete a função orderModifier() para que seu retorno seja similar a 
'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00. */
const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva';
    const saborPizza = order.order.pizza.marguerita;
    const saborPizza2 = order.order.pizza.pepperoni;
    const cocaCola = order.order.drinks.coke.type;
    const price = order.order.payment = '50'
    console.log(`Olá ${name} o total do seu pedido de ${saborPizza}, ${pepperoni} e ${cocaCola} é R$ ${price},00`);
};

orderModifier(order);