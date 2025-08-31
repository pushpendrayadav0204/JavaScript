const marvel_heros = ["Thor", "Ironman", "spiderman"];
//console.log(marvel_heros); //Output => [ 'Thor', 'Ironman', 'spiderman' ].

const dc_heros = ["superman", "flash", "batman"];
//console.log(dc_heros); // Output => [ 'superman', 'flash', 'batman' ].

/*marvel_heros.push(dc_heros);
console.log(marvel_heros); // Output => [ 'Thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ].
console.log(marvel_heros[3][1]); // output => flash.*/


//const allHeros = marvel_heros.concat(dc_heros); // used to Merge both Strings.
//console.log(allHeros); // output => [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // output => [ 'Thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ].


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // Flate is used to seprate out each element of an Array.
console.log(real_another_array); // output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("PUSHP")); // Output => false.
console.log(Array.from("PUSHP")); // output => [ 'P', 'U', 'S', 'H', 'P' ].

console.log(Array.from({name: "PUSHP"})); // Output => it provide the empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // output => [ 100, 200, 300 ].

