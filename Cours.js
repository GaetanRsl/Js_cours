/*
# Rappel : 	-> Lancer le programmer : > node nomdufichier.js
			-> Installer un paquet : > npm install nom-du-paquet
*/

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//				CALLBACK

// const fs = require('fs');

// fs.readFile('test.txt', 'utf8',(err, data) => {
// if (err) throw err;
// console.log(data);
// });

// request = require('request');
// fs = require('fs');

// fs.readFile('test.txt', 'utf8', (err, data)=>{request(data, (err, res){console.log(res);}); });


// ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//				PROMESSE

// -- Q0 --
// fs = require('fs-extra-promise');
// fs.readFileAsync('./test.txt', 'utf-8').then((data) => {
//     console.log(data);
// });

// -- Q1 -- 
Promise = require('bluebird') //Presque plus nécessaire 

// wait = (time) => {
// 	return a = new Promise((resolve, reject)=>{	// Faire une promesse qui invoque la fonction resolve
// 		if (time <=3000) 
// 			{setTimeout(resolve, time);}		// Qd time est fini, invoque la fonction resolve
// 		else {reject('Erreur')}					// Si le temps est trop long, invoquer la function reject						
// 	});
// }
// wait(1000)
// 	.then(()=>{ console.log('Bonjour');}) 	// Definition de la function resolve
// 	.catch((erreur)=>{console.log(erreur)});// Definition de la function reject

// wait(4000)
// 	.then(()=>{ console.log('Bonjour');}, (erreur)=>{console.log(erreur)}) 
// 	.catch((erreur)=>{console.log(erreur)});
// Ici le premier wait affichera sa réponse après le 2e wait, setTimeout -> dans la pile d'evennment pendant time ms

// -- Q4 -- 
// wait(2000)
// 	.then(()=>{ return wait(4000);}) // Toujours avoir un retour pour pouvoir executer la suite (console.log est une execption)
// 	.then(()=> {console.log('Bonjour');})
// 	.catch((erreur)=>{console.log(erreur)});

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
	
