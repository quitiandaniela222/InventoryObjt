
const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2,
        "stock": [10, 8, 2]
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1,
        "stock": [3, 6, 15]
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15,
        "stock": [12, 2, 9]
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25,
        "stock": [5, 9, 10]
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05,
        "stock": [7, 6, 12]
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

const createBill = (userName, productName, productQuantity, storeId) => {
    const clientName = (customer) => customer.name === userName;
    const productNameFilter = (product) => product.name === productName;

    const currentClient = customers.find(clientName);
    const currentProduct = products.find(productNameFilter);

    if (currentClient === undefined || currentProduct === undefined) {
        return "Error: customer or product not found";
    }

    const storeIndex = storeId - 1;
    const availableStock = currentProduct.stock[storeIndex];

    if (availableStock < productQuantity) {
        return "Error: not enough product in stock";
    }

    const totalOrder = currentProduct.price * productQuantity * (1 - currentProduct.discount);
    const totalBill = {
        clientName: `${currentClient.name} ${currentClient.surname}`,
        address: `${currentClient.address.street}, ${currentClient.address.city}`,
        productName: currentProduct.name,
        productQuantity: productQuantity,
        total: totalOrder
    };

    currentProduct.stock[storeIndex] -= productQuantity;

    return totalBill;

}
console.log(createBill('John', 'Pants', 66, 2));
