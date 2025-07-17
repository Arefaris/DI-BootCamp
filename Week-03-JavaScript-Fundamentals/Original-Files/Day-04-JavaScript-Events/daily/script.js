let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit))

displayGroceries()

const cloneGroceries = () => {
    let user = client
    client = "betty"
    //we dont see change in the user variable because
    //in javacript, strings are primitive values
    //and it will copy the value, when you assign it, not reference it

    console.log(user)
    console.log(client)

    let shopping = groceries
    groceries.totalPrice = "35$"
    groceries.other.paid = false
    console.log(groceries)
    console.log(shopping)
    //we also see this modification in the shopping variable because groceries is an object
    //and objects assigned by reference, that means assigning dosent create a new copy of object
    //it points to same object in the memory
    //if we want to copy the object and not reference it, we could use spreading operator
    // const shopping = { ...groceries };
}

cloneGroceries()