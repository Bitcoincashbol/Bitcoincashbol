const URL_API = "https://script.google.com/macros/s/AKfycbwN046RozPx8CzDcoWv4G83S6ysjvgqq6ey-KLYH1CaEAPU6VD-sEJLpC20KJ0g5GFP/exec";

function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function register() {
    const d = new FormData();
    d.append('nombre', document.getElementById('reg-nombre').value);
    d.append('apellidos', document.getElementById('reg-apellido').value);
    d.append('telefono', document.getElementById('reg-tel').value);
    d.append('password', document.getElementById('reg-pass').value);
    fetch(URL_API, { method: 'POST', body: d }).then(() => { alert("Registro exitoso."); location.reload(); });
}

async function login() {
    const t = document.getElementById('tel').value;
    const p = document.getElementById('pass').value;
    const res = await fetch(URL_API);
    const data = await res.json();
    const user = data.find(f => f[2] == t && f[3] == p);

    if (user) {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('menu-principal').classList.remove('hidden');
        document.getElementById('nombreUsuario').innerText = "Hola, " + user[0];
        const saldoUSD = user[4] || 0;
        document.getElementById('usdDisplay').innerText = "$" + parseFloat(saldoUSD).toFixed(2) + " USD";
        document.getElementById('bobDisplay').innerText = "Bs." + (saldoUSD * 6.96).toFixed(2) + " BOB";
    } else { alert("Datos incorrectos."); }
}
