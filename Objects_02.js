 tinderUser = new  Object() // Singleton object 
console.log(tinderUser); // Output => {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // Output => { id: '123abc', name: 'Sammy', isLoggedIn: false }.


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sammy",
            lastname: "choudhary"
        }
    }

}
console.log(regularUser.fullname.userfullname.firstname) // Output => sammy.


const obj1 ={1: "a" , 2: "b"}
const obj2 ={3: "a" , 4: "b"}

//const obj3 = {obj1 , obj2}
//console.log(obj3) // Output => {obj1:{'1':'a','2':'b'}, obj2:{'3':'a','4':'b'}} (It is not proper way to merge two objects.)
  
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3); // output => { '1':'a','2':'b','3':'a','4':'b'} (It is right way to merge objects.)

const obj3 = {...obj1, ...obj2} // it used to spread the values of objects.
console.log(obj3); // Output =>  { '1':'a','2':'b','3':'a','4':'b'}

const users =[
    {

    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {

    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // Output => [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // Output => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]-


console.log(tinderUser.hasOwnProperty("isLoggedIn")) // Output => True