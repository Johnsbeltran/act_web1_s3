function esValida(contraseña) {
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneMinuscula = /[a-z]/.test(contraseña);
    const tieneNumero = /[0-9]/.test(contraseña);
    return contraseña.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero;
}

let contraseña = "";
while (true) {          
    contraseña = prompt("Ingresa una contraseña (mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número):");
    if (esValida(contraseña)) {
        console.log("Contraseña válida.");
        break;          
    } else {
        console.log("Contraseña inválida. Intenta de nuevo.");
    }
}
