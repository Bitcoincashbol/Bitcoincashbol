const URL_API = "https://script.google.com/macros/s/AKfycbwN046RozPx8CzDcoWv4G83S6ysjvgqq6ey-KLYH1CaEAPU6VD-sEJLpC20KJ0g5GFP/exec";

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    const d = new FormData();
    d.append('nombre', document.getElementById('reg-nombre').value);
    d.append('apellidos', document.getElementById('reg-apellido').value);
    d.append('telefono', document.getElementById('reg-tel').value);
    d.append('password', document.getElementById('reg-pass').value);
    fetch(URL_API, { method: 'POST', body: d }).then(() => { alert("Registro exitoso!"); location.reload(); });
}

async function login() {
    const t = document.getElementById('tel').value;
    const p =
