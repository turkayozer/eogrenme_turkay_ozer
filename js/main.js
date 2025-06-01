function login() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    if (u === "admin" && p === "1234") {
        window.location.href = "dersler.html";
    } else {
        alert("Hatalı giriş");
    }
}
