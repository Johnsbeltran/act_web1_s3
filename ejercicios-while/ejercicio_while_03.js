let contrasena = "Vastroalejandro1234";
let contrasenaValida = false;


while (!contrasenaValida) {
  contrasena = prompt("Ingrese su contraseña:");
  
  if (contrasena === null) {
    console.log("Programa cancelado.");
    break;
  }

  //validacion
  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let tieneNumero = false;
  let errores = [];

  if (contrasena.length < 8) {
    errores.push("La contraseña debe tener al menos 8 caracteres.");
  }

  for (let i = 0; i < contrasena.length; i++) {
    let caracter = contrasena[i];
    
    if (caracter >= 'A' && caracter <= 'Z') {
      tieneMayuscula = true;
    }
    if (caracter >= 'a' && caracter <= 'z') {
      tieneMinuscula = true;
    }
    if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true;
    }
  }

  // Agregamos los errores si no se cumplieron los criterios
  if (!tieneMayuscula) {
    errores.push("La contraseña debe contener al menos una letra mayúscula.");
  }
  if (!tieneMinuscula) {
    errores.push("La contraseña debe contener al menos una letra minúscula.");
  }
  if (!tieneNumero) {
    errores.push("La contraseña debe contener al menos un número.");
  }

  if (errores.length === 0) {
    contrasenaValida = true;
    console.log("¡Contraseña aceptada! Ha cumplido con todos los criterios.");
  } else {

    console.log("La contraseña no cumple con los requisitos.");
  }
}