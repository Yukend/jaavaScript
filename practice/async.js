function makeCoffee(coffee) {
    return new Promise(function (resolve, reject) {
        console.log("Making " + coffee)
        if (coffee === "Black Coffee") {
            resolve("Here is your coffee");
        } else {
            reject("Order canceled");
        }
    });
}

function placeOrder(order) {
    return new Promise(function (resolve, reject) {
        console.log("Processing order");
        resolve("Extra Info" + order);
    })
}

// makeCoffee("Black Coffee").then(order => {
//     console.log("order placed");
//     return placeOrder(order)
// }).then(placeOrder => {
//     console.log(placeOrder)
// }).catch(err => {
//     console.log(err)
// });

// makeCoffee("Black").then(order => {
//     console.log("order placed");
//     return placeOrder(order)
// }).then(placeOrder => {
//     console.log(placeOrder)
// }).catch(err => {
//     console.log(err)
// });

async function func() {
    try {
        var order = await makeCoffee("Black Coffee");
        console.log("order placed");
        var placedOrder = await placeOrder(order);
        console.log(placedOrder);
    } catch (error) {
        console.log(error);
    }
};

func()