const URL_API = "https://script.google.com/macros/s/AKfycbwaQkDbt_KbkHLOvwwYxpqazLi1TXvSxJZ4S2qpQEWRcth_LMvzOf9rwZGnstlNLzMo/exec"; 

function register() {
    const d = new FormData();
    d.append('nombre', document.getElementById('reg-nombre').value);
    d.append('apellidos', document.getElementById('reg-apellido').value);
    d.append('telefono', document.getElementById('reg-tel').value);
    d.append('password', document.getElementById('reg-pass').value);

    fetch(URL_API, { method: 'POST', body: d }).then(() => {
        alert("Registro exitoso."); location.reload();
    });
}

async function login() {
    const t = document.getElementById('tel').value;
    const p = document.getElementById('pass').value;
    const res = await fetch(URL_API);
    const data = await res.json();
    
    // Validar: columna 2 (tel) y columna 3 (pass)
    const usuario = data.find(f => f[2] == t && f[3] == p);

    if (usuario) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('menu-principal').style.display = 'block';
    } else {
        alert("Credenciales inválidas.");
    }
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
