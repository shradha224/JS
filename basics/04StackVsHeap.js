// Stack Memory --> Primitive data types
let num1=5
let num2=num1
num2=6
console.log(num1)
console.log(num2)
//A copy of data is created=>No change in original values

// Heap Memory --> Non Primitive data types
let obj1={
    name:"Shradha",
    email:"xyz",
}
let obj2=obj1
obj2.name="Shivam"
console.log(obj1)
console.log(obj2)
//Data is referenced=> Original value changes as well