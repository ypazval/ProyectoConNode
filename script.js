// Import Moment
var moment = require('moment'); // require
moment.locale('es');

// 1. Mostrar fecha mes(nombre del mes) dia año
let fechanaci = moment("1997-08-01").format('Do MMMM YYYY');
console.log("fecha nacimiento:", fechanaci);

// 2. Mostar que dia fue el dia que naci: 
let dianaci = moment("1997-08-01").format('dddd');
console.log("dia nacimiento:", dianaci);

// 3. Mostrar hace cuantos años naciste
let myear = moment().diff('1972-04-23', 'years',false);
console.log("Naci hace:", myear,"años");

// 4. Mostrar que fecha sera en 258 dias (dia-mes-año)
let dosc = moment().add(258,'d').format('DD-MM-YYYY');
console.log("Fecha dentro de 258:", dosc);

// 5. Mostrar que fecha sera en 4 semanas (dia-mes-año)
let cuatros = moment().add(4,'w').format('DD-MM-YYYY');
console.log("Fecha dentro de 4 sem:", cuatros);