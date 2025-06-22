function login() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    fetch('https://script.google.com/macros/s/AKfycbzVUrz8YdV2-2n2BK_xkibPrXr-cvP8mSFLUM16W3qmrJaSLa19N1oLDv6jxNS5i6n0/exec', {
        method: 'POST',
        body: JSON.stringify({
            action: 'login',
            usuario: usuario,
            clave: clave
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                window.location.href = "formulario_enfer.html";
            } else {
                document.getElementById("mensaje").innerText = "Credenciales incorrectas.";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("mensaje").innerText = "Error de conexión.";
        });
}
