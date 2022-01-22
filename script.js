

function encriptar(cadena){
    let cadenanueva ='';
    
    function cambiar(caracter){
        const vocales ='aeiou';
        const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
        return((vocales.indexOf(caracter) >= 0) ? mapa.get(caracter) : caracter);
    }

    for (let i = 0; i < cadena.length; i++){
        cadenanueva += cambiar(cadena.substr(i,1));
    }
    return (cadenanueva)
}

function desencriptar(cadena){
    const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
    let vocales ='aeiou';
    for (let i = 0 ; i < vocales.length; i++){
        let caracter = vocales.substr(i,1);
        let re = new RegExp(mapa.get(caracter), 'g');
        let cadena = cadena.replace(re, caracter)
    }
    return(cadena);
}

document.getElementById("input-texto").addEventListener("keyup", myFunction);

function myFunction() {
  let x = document.getElementById("input-texto");
  const expr = new RegExp("[^A-Za-z ]", 'g')
  x.value = x.value.toLowerCase().replace(expr, "");
}

let botonencriptar = document.querySelector("#btn-encriptar");

botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    let x = document.getElementById("input-texto");
    let y = document.getElementById("msg");
    y.value = encriptar(x.value);
});

let botondesencriptar = document.querySelector("#btn-desencriptar");

botondesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    let x = document.getElementById("input-texto");
    let y = document.getElementById("msg");
    y.value = desencriptar(x.value);
});


let botoncopiar = document.querySelector("#btn-copy");

botoncopiar.addEventListener("click",function(event){
    event.preventDefault();
    let y = document.getElementById("msg");
    console.log(y.value);
    y.select();
    navigator.clipboard.writeText(y.value)
});
