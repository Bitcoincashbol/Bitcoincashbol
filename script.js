const URL_API = "https://script.google.com/macros/s/AKfycbyKSz2l-mpQF9xWkILNUN2IS504QKW0bcHlk6y_SkOMIqTndRQBRKXYaQCI1pPtRRrX/exec";

function register() {
    const data = {
        nombre: document.getElementById('reg-nombre').value,
        apellidos: document.getElementById('reg-apellido').value,
        telefono: document.getElementById('reg-tel').value,
        password: document.getElementById('reg-pass').value
    };

    // Validación
    if(!data.nombre || !data.telefono || !data.password) {
        alert("Por favor, llena todos los campos obligatorios.");
        return;
    }

    // Enviamos los datos
    fetch(URL_API, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data)
    })
    .then(() => {
        alert("¡Registro exitoso! Tus datos han sido enviados.");
        location.reload(); 
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al conectar con la base de datos.");
    });
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function login() {
    alert("Función de inicio de sesión en desarrollo.");
}
