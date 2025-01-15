// Archivo: index.js

document.addEventListener('DOMContentLoaded', () => {
    const reservasButton = document.getElementById('reservas');
    reservasButton.addEventListener('click', () => {
        window.open('https://www.treatwell.es/', '_blank');
    });
});
