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
    const p = document.getElementById('pass').value;
    const res = await fetch(URL_API);
    const data = await res.json();
    const user = data.find(f => f[2] == t && f[3] == p);

    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        // --- MODIFICACIÓN AQUÍ ---
        // Forzamos la ocultación de la vista de saldo al entrar al menú
        document.getElementById('agregar-saldo').style.display = 'none'; 
        // -------------------------
        document.getElementById('menu-principal').style.display = 'block';
        
        document.getElementById('nombreUsuario').innerText = "Hola, " + user[0];
        const saldoUSD = user[4] || 0;
        document.getElementById('usdDisplay').innerText = "$" + parseFloat(saldoUSD).toFixed(2) + " USD";
        document.getElementById('bobDisplay').innerText = "Bs." + (saldoUSD * 6.96).toFixed(2) + " BOB";
    } else { alert("Datos incorrectos."); }
}

function abrirAgregarSaldo() {
    document.getElementById('menu-principal').style.display = 'none';
    document.getElementById('agregar-saldo').style.display = 'block';
}

function regresarAlMenu() {
    document.getElementById('agregar-saldo').style.display = 'none';
    document.getElementById('menu-principal').style.display = 'block';
}

function enviarWhatsApp() {
    const nombre = document.getElementById('nombreUsuario').innerText;
    const saldo = document.getElementById('usdDisplay').innerText;
    const telefono = "59177827866";
    const mensaje = encodeURIComponent("Hola, soy " + nombre + ". Deseo solicitar un retiro de mis fondos actuales (" + saldo + "). ¿Cómo procedo?");
    const url = "https://wa.me/" + telefono + "?text=" + mensaje;
    window.open(url, '_blank');
}

function abrirGraficos() {
    window.open("https://es.tradingview.com/chart/bOWsNnsG/", "_blank");
}

function enviarAyuda() {
    const nombre = document.getElementById('nombreUsuario').innerText;
    const telefono = "59177827866";
    const mensaje = encodeURIComponent("Hola, soy " + nombre + ". Necesito ayuda con mi cuenta en Bitcoin Cash Bol.");
    const url = "https://wa.me/" + telefono + "?text=" + mensaje;
    window.open(url, '_blank');
}
