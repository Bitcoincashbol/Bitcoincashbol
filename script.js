const URL_API = "https://script.google.com/macros/s/AKfycbzfGLlQmqYfh24BvPqC5ZFKoWba8DlwiIP8IQsTdyyxXiEzhbnimvtz501rwcr0i3yL/exec";

function register() {
    const data = new URLSearchParams();
    data.append('nombre', document.getElementById('reg-nombre').value);
    data.append('apellidos', document.getElementById('reg-apellido').value);
    data.append('telefono', document.getElementById('reg-tel').value);
    data.append('password', document.getElementById('reg-pass').value);

    fetch(URL_API, {
        method: 'POST',
        body: data
    })
    .then(res => res.text())
    .then(data => {
        alert("¡Registro exitoso! Los datos se enviaron a la hoja.");
        location.reload();
    })
    .catch(err => {
        console.error(err);
        alert("Error al enviar. Revisa la consola (F12).");
    });
}
