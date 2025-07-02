// const products = [
//     {
//         id : 1,
//         name : "maggie",
//         price : 200
//     } ,
//     {
//         id : 2,
//         name : "phone",
//         price : 500
//     }
// ]
// const name = products.map(p => p.name)
// const totalAmount = products.reduce((sum, amount) => sum+amount.price, 0)
// console.log(name);
// console.log(totalAmount);
// const keys = Object.keys(products)
// console.log(keys);

const person = {
    greet() {
        console.log(`Hello ${this.name}`)
    }
}
const employee = Object.create(person)
employee.name = "Pooja"
employee.greet()

const obj = {
    firstName : "Pooja",
    lastName : "NG",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name){
        const[f,l] = name.split(" ")
        this.firstName = f
        this.lastName = l
    }
}
console.log(obj.fullName)
obj.fullName = "Preethi NG"
console.log(obj.firstName);
console.log(obj.lastName)

const account = {
    _balance : 0,
    get balance(){
        return this._balance
    },
    set balance(amount){
        if(amount<=0){
            console.log("Low balance")
        }
        this._balance = amount
    }
}
account.balance = 5000
console.log(account.balance);

const user = {name : "Pooja", age: 20}
const jsonString = JSON.stringify(user)
console.log(jsonString);
console.log(user);
localStorage.setItem("user", JSON.stringify(user))
const userObj = JSON.parse(jsonString)
console.log(userObj.name);

const add = new Function("a", "b", "return a+b")
console.log(add(2,6));

function logDecorator(fn){
    return function(...args){

    }
}

const original = {
    name : "Pooja",
    address: {
        city : "Bengaluru",
        pincode : 323772
    }
}
// const shallow = {...original}
// console.log(shallow);
// console.log(original)
// shallow.name = "Anjali"
// shallow.address.city = "Delhi"
// console.log(original.address.city);

const deep = JSON.parse(JSON.stringify(original))
deep.address.city = "Pune"
console.log(original.address.city);


