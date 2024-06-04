document.getElementById('miFormulario').addEventListener('submit',validarFormulario);

function validarFormulario(e) {
e.preventDefault();

const usuario = document.getElementById('usuario').value;

let esValido = true;

if(usuario === ''){
document.getElementById('usuarioError').textContent = 'el nombre de usuario es obligatorio';
esValido = false;
}

if(usuario === ''){
document.getElementById('usuarioError').textContent = 'el nombre de usuario es obligatorio';
esValido = false;
}

if (esValido == true) {
alert('formulario valido')
}

console.log('hola');
}