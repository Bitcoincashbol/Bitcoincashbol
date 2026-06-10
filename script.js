const URL_API = "https://script.google.com/macros/s/AKfycbzfGLlQmqYfh24BvPqC5ZFKoWba8DlwiIP8IQsTdyyxXiEzhbnimvtz501rwcr0i3yL/exec";

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    const data = new FormData();
    data.append('nombre', document.getElementById('reg-nombre').value);
    data.append('apellidos', document.getElementById('reg-apellido').value);
    data.append('telefono', document.getElementById('reg-tel').value);
    data.append('password', document.getElementById('reg-pass').value);

    fetch(URL_API, { method: 'POST', body: data })
    .then(() => {
        alert("¡Registro exitoso! Ya puedes iniciar sesión.");
        location.reload();
    })
    .catch(err => alert("Error: " + err));
}
