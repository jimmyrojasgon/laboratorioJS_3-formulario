document.getElementById('miFormulario').addEventListener('submit',validarFormulario);

function validarFormulario(e) {
e.preventDefault();

const usuario = document.getElementById('usuario').value;

const usuarioError = document.getElementById('usuarioError');
const passError = document.getElementById('repetirContraseñaError');

let esValido = true;

const usuarioRegex = ^[a-zA-Z0-9_]{4,16}$/
if(usuario === ''){
usuarioError.textContent = 'el nombre de usuario es obligatorio';
esValido = false;
}else if(!usuarioRegex.test(usuario)){
    usuarioError.textContent = 'el nombre de usuario debe tener minimo 5 y 16 digitos y sol puede contener numero y quien bajo';
    
    esValido = false
}



if(usuario === ''){
document.getElementById('usuarioError').textContent = 'el nombre de usuario es obligatorio';
esValido = false;
}

if(pass1 === pass2)

if (esValido == true) {
alert('formulario valido')
}

console.log('hola');
}    