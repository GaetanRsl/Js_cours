# Javascript

Rappel :
-> Lancer le programmer : > node nomdufichier.js
-> Installer un paquet : > npm install nom-du-paquet

## Cours
### Function
```javascript

function toto(x) {console.log(x);} 	// declaration de fonction -> disponible des le lancment
let a = (x) => {console.log(x);}	// expression de fonction -> disponible que apres

  ```
### Details
```javascript
// Details
"" == 0;	// true
"" === 0;	// false
"Appolo" + 5;	// "Appolo5"
null+"ify";	// "nullify"
"5"*5;	//25
"strawberry" * 5 ;// NaN

// -- Q1 -- Fonction qui multiplie a et b
(a,b) => {return a*b}
// -- Q2 -- Fonction qui retourne un fonction 
// qui multiplie par a
(a,b) => {return (b)=>{return b*a}}

// -- Q4 -- Scope implicite / Objet
function create() {
	let reponse = 23;
	return (x)=> { return x + reponse; }
}
let a = create();	// recup function
console.log(a(12)); // 35

function create2() {
	this.reponse = 23;
	this.calc = function (x) { return x + this.reponse; }
}
let a = new create2()	// recup objet
console.log(a.calc(12)) // 35

  ```
### Hashmap
```javascript
obj = { "hello" : "coucou", 3:10};
  ```
### Tableau
```javascript
tab = ["bob", "raoul", "louis"];
tabvide = new Array();
tabvide = []

  ```
### Map / Reduce
```javascript
notes = [10, 15, 3, 20, 19, 9]
reducer = (accumulateur, currentval) => accumulateur + currentval
moyenne =notes.reduce(reducer)/notes.length // 12.66


  ```
## Les classes
### Ecriture
```javascript

// Ceci est une classe javascript
function Create() {this.reponse = 23;}
Create.prototype.calc =  (x)=> { return x + this.reponse; }
let a = new Create()
console.log(a.calc(12))//35
  ```

### Heritage
```javascript
// 1) Une classe de base
function Create() { this.reponse = 23; }
Create.prototype.calc = function (x) { return x + this.reponse }
// 2) Un héritage
function Create2() {this.reponse = 32}
Create2.prototype = new Create()
Create2.prototype.hello = function () { console.log("hello"); }
// 3) Une surcharge
Create2.prototype.calc = function (x) { return 2*x + this.reponse; }
let a = new Create2()

console.log(a.calc(12)) // 2*12 + 32 = 56
a.hello()	// "hello"

console.log(a.__proto__.calc(12)) // 2*12 + 23 = 47
console.log(a.__proto__.__proto__.calc(12)) // NaN

console.log(a.__proto__) // Create {rep=23, hello:Func., calc:Func.}
console.log(a.__proto__.__proto__) // Create{calc:Func.}
console.log(a.__proto__.__proto__.__proto__) // {}
console.log(a.__proto__.__proto__.__proto__.__proto__) // null

  ```
  ## Callback
  
  ```javascript
  
function test(f) {
	for (var i = 0; i < 20; i++) {
		console.log("coucou", i);
	}
	f("termine");
}
test((message)=>{console.log("->", message);});
  
const fs = require('fs');

fs.readFile('test.txt', 'utf8',(err, data) => {
if (err) throw err;
console.log(data);
});

request = require('request');
fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data)=>{request(data, (err, res){console.log(res);}); });

  ```
  ## Promesses
  
  ```javascript
// -- Q0 --
// fs = require('fs-extra-promise');
// fs.readFileAsync('./test.txt', 'utf-8').then((data) => {
//     console.log(data);
// });

// -- Q1 -- 
Promise = require('bluebird') //Presque plus nécessaire 

wait = (time) => {
	return a = new Promise((resolve, reject)=>{	// Faire une promesse qui invoque la fonction resolve
		if (time <=3000) 
			{setTimeout(resolve, time);}		// Qd time est fini, invoque la fonction resolve
		else {reject('Erreur')}					// Si le temps est trop long, invoquer la function reject						
	});
}
wait(1000)
	.then(()=>{ console.log('Bonjour');}) 	// Definition de la function resolve
	.catch((erreur)=>{console.log(erreur)});// Definition de la function reject

wait(4000)
	.then(()=>{ console.log('Bonjour');}, (erreur)=>{console.log(erreur)}) 
	.catch((erreur)=>{console.log(erreur)});
// Ici le premier wait affichera sa réponse après le 2e wait, 
// setTimeout -> dans la pile d'evennment pendant time ms

// -- Q4 -- 
wait(2000)
	.then(()=>{ return wait(4000);}) // Toujours avoir un retour pour pouvoir executer la suite (console.log est une execption)
	.then(()=> {console.log('Bonjour');})
	.catch((erreur)=>{console.log(erreur)});

// -- Q6 --
wait = (time) => {
	return a = new Promise((resolve, reject)=>{
		if (time <=3000){
			//setTimeout(resolve(25), time)	// SetTimeout recoit en paramètre un fonction : resolve(25) est le resultat d'une fonction, pas un fonction
			setTimeout(()=>{resolve(25);}, time);
			setTimeout(resolve, time, 25);	// Soluce 2
			setTimeout(resolve.bind(null,25), time); // Soluce 3
		}
		else {reject('Erreur')}					// Si le temps est trop long, invoquer la function reject						
	});
}
wait(2000)
	.then((val)=>{ return wait(4000);}) // Toujours avoir un retour pour pouvoir executer la suite (console.log est une execption)
	.then((val)=> {console.log('Bonjour');})
	.catch((erreur)=>{console.log(erreur)});
	
  ```


