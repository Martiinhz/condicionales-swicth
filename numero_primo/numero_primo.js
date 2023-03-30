let primo = parseInt(prompt("ingrese un numero entre 1 y 15"));

let esNumeroPrimo = true;

for (let i = 2; i < primo/2; i++) {
   if (primo % i == 0) {
esNumeroPrimo = false;
   }
}

if (esNumeroPrimo) {
    console.log("si es numero primo", primo);
}else{
    console.log("no es numero primo", primo);
}

