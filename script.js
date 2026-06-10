const URL_API = "https://script.google.com/macros/s/AKfycbxeZS36wv37XevS2NoBfpQ8Y3LdsEym51-J3rYU90YXQkL91ufPgkfNZTzFNYNHGLUY5g/exec";

// Función para mostrar el formulario de registro
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Función para enviar los datos a Google Sheets
function register() {
    const data = {
        nombre: document.getElementById('reg-nombre').value,
        apellidos: document.getElementById('reg-apellido').value,
        telefono: document.getElementById('reg-tel').value,
        password: document.getElementById('reg-pass').value
    };

    // Validación básica
    if(!data.nombre || !data.telefono || !data.password) {
        alert("Por favor, llena todos los campos obligatorios.");
        return;
    }

    fetch(URL_API, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data)
    })
    .then(() => {
        alert("¡Registro exitoso! Ya puedes iniciar sesión.");
        location.reload(); // Recarga para volver al login
    })
    .catch(error => alert("Hubo un error: " + error));
}

function login() {
    // Aquí puedes añadir lógica de validación futura
    alert("Función de inicio de sesión en desarrollo.");
}
