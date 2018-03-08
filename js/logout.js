function logoutSession() {
    localStorage.setItem("driverToken", null);
    window.location.href="index.html";
}