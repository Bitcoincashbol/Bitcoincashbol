const URL_API = "https://script.google.com/macros/s/AKfycbwN046RozPx8CzDcoWv4G83S6ysjvgqq6ey-KLYH1CaEAPU6VD-sEJLpC20KJ0g5GFP/exec";
const TASA_CAMBIO = 9.89; // Puedes actualizar esto a tiempo real

async function login() {
    const t = document.getElementById('tel').value;
    const p = document.getElementById('pass').value;
    const res = await fetch(URL_API);
    const data = await res.json();
    
    // Fila: [Nombre, Apellido, Tel, Pass, Saldo] -> Índices: 0, 1, 2, 3, 4
    const user = data.find(f => f[2] == t && f[3] == p);

    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('menu-principal').style.display = 'block';
        
        document.getElementById('nombreUsuario').innerText = "Hola, " + user[0];
        const saldoUSD = user[4] || 0; // Columna E (Índice 4)
        document.getElementById('usdDisplay').innerText = "$" + parseFloat(saldoUSD).toFixed(2) + " USD";
        document.getElementById('bobDisplay').innerText = "Bs." + (saldoUSD * TASA_CAMBIO).toFixed(2) + " BOB";
    } else {
        alert("Credenciales incorrectas.");
    }
}
