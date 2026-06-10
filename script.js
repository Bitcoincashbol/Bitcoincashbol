const URL_API = "https://script.google.com/macros/s/AKfycbzkE5xqFYH7XOB8A90rCPO7YlPbPr1ZCArir764MEegIyR0Q2-VMYb7BTdDFmaAu-6G/exec";

function register() {
    // Obtenemos los valores de los inputs
    const nombre = document.getElementById('reg-nombre').value;
    const apellidos = document.getElementById('reg-apellido').value;
    const telefono = document.getElementById('reg-tel').value;
    const password = document.getElementById('reg-pass').value;

    if (!nombre || !telefono || !password) {
        alert("Por favor, completa los campos requeridos.");
        return;
    }

    // Preparamos los datos
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellidos', apellidos);
    formData.append('telefono', telefono);
    formData.append('password', password);

    // Enviamos
    fetch(URL_API, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("¡Registro exitoso! Datos guardados.");
        location.reload();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al conectar. Revisa la consola (F12).");
    });
}

