// For loop

/*for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 = Five");
    }
    console.log(element)
}

for (let i = 0; i <=10 ; i++) {
    console.log(`outer loop value: ${i}`);
    for(let j =0; j <=10; j++){
        console.log(i + '*' + j + '=' + i*j)
    }
    
}*/

/*let myArray = [10, 20, 30, 40, 50]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}*/

// While Loop and do while loop

/*let index = 0
while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2
}*/

let myArray = [10, 20, 30, 40, 50]
let arr_index = 0
while(arr_index < myArray.length){
    console.log(`Value at index: ${arr_index} = ${myArray[arr_index]}`)
    arr_index = arr_index + 1
}

let score = 1
do{
    console.log(`score is ${score}`);
    score++
}while(score <= 10);
