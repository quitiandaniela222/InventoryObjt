
const products = [
    {
        "name": "Shirt",
        "price": 25.99,
    },
    {
        "name": "Pants",
        "price": 55.99,
    },
    {
        "name": "Jacket",
        "price": 80.9,
    },
    {
        "name": "Shoes",
        "price": 60.99,
    },
    {
        "name": "cap",
        "price": 15.99,
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

const inventory = (products, country) => {
    let productWithDiscount = products.map(product => {
        switch (country) {
            case 'MEXICO':
                product.discount = 0.2;
                break;
            case 'BRAZIL':
                product.discount = 0.5;
                break;
            default:
                product.discount = 0;
                break;
        }
        return {
            name: product.name,
            price: product.price,
            newPrice: product.price - (product.discount * product.price)
        };
    });
    return productWithDiscount;
};

const billProducts = (userName, productName, productQuantity) => {
    const clientName = (customer) => customer.name === userName;
    const productsName = (product) => product['name'] === productName;
    let currentClient = customers.find(clientName);
    let productWithDiscount = inventory(products, currentClient.address.country);
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
        total: totalOrder
    };

    return totalBill;
};

console.log(billProducts('John', 'Pants', 3));


