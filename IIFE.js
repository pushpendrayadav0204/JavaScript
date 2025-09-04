// Immediately Invoked function Expressions (IIFE)


/* IIFE is a function that is defined and executed immediately after its creation. 
This pattern is often used to create a private scope for variables, preventing 
them from polluting the global scope and avoiding naming conflicts.*/ 


// 1- Named IIFE
(function chai(){
    console.log(`DB connected.`); // Output => DB connected.
})();

// Agr function ko Immediate Invoke karwaya or uske bad ek or function hai to pehle wale ko ";" se break / stop karna padega.

(function chaiaurcode(){
    console.log(`DB is connected Two`) // Output => DB connected Two.
})();


 // 2- Unknown IIFE
( () => {
    console.log(`DB Connected Third`) // Output => DB connected third.
})();


// // 3- Perameter IIFE
( (name)=> {
    console.log(`Name: ${name}`)
}) ("Pushp") // Output => Name: Pushp.