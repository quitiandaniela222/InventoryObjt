
const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05
    }
]
const customers = [
    {
        name: 'John',
        surname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
        }
    },
    {
        name: 'Mary',
        surname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
        }
    },
    {
        name: 'Peter',
        surname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        }
    }
]

let productWithDiscount = [];

const inventory = (products) => {
    let expensive = [];
    let chep = [];

    expensive = products.filter(product => product.price > 50);
    chep = products.filter(product => product.price < 50);

    productWithDiscount = products.map(product => ({
        name: product.name,
        price: product.price,
        newPrice: product.price - (product.discount * product.price)
    }));

    return productWithDiscount;
};

inventory(products);

const billProducts = (userName, productName, productQuantity) => {
    const clientName = (customer) => customer.name === userName;
    const productsName = (product) => product['name'] === productName;

    let currentClient = customers.find(clientName);
    let currentProductName = productWithDiscount.find(productsName);

    if (currentClient === undefined || currentProductName === undefined) {
        return "Problem: customer or product not found";
    }

    let totalOrder = currentProductName.newPrice * productQuantity;

    let totalBill = {
        clientName: `${currentClient.name} ${currentClient.surname}`,
        address: `${currentClient.address.street}, ${currentClient.address.city}`,
        productName: currentProductName['name'],
        productQuantity: productQuantity,
        total: currentProductName.newPrice * productQuantity
    };

    return totalBill;
};

console.log(billProducts('John', 'Pants', 3));

