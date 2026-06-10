const URL_API = "https://script.google.com/macros/s/AKfycbwN046RozPx8CzDcoWv4G83S6ysjvgqq6ey-KLYH1CaEAPU6VD-sEJLpC20KJ0g5GFP/exec"; // RECUERDA PONER TU URL AQUÍ

// Función para mostrar registro
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Función de Registro
function register() {
    const d = new FormData();
    d.append('nombre', document.getElementById('reg-nombre').value);
    d.append('apellidos', document.getElementById('reg-apellido').value);
    d.append('telefono', document.getElementById('reg-tel').value);
    d.append('password', document.getElementById('reg-pass').value);

    fetch(URL_API, { method: 'POST', body: d })
    .then(() => { 
        alert("Registro exitoso."); 
        location.reload(); 
    });
}

// Función de Login (La lógica original intacta)
async function login() {
    const t = document.getElementById('tel').value;
    const p = document.getElementById('pass').value;
    
    // Obtener datos
    const res = await fetch(URL_API);
    const data = await res.json();
    
    // Buscar usuario en columna 3 (Tel) y 4 (Pass)
    const user = data.find(f => f[2] == t && f[3] == p);

    if (user) {
        // Ocultar login, mostrar menú
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('menu-principal').style.display = 'block';
        
        // Actualizar datos en pantalla
        document.getElementById('nombreUsuario').innerText = "Hola, " + user[0];
        const saldoUSD = user[4] || 0;
        document.getElementById('usdDisplay').innerText = "$" + parseFloat(saldoUSD).toFixed(2) + " USD";
        document.getElementById('bobDisplay').innerText = "Bs." + (saldoUSD * 6.96).toFixed(2) + " BOB";
    } else {
        alert("Número o contraseña incorrectos.");
    }
}
