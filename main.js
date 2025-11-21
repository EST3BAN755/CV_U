document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Saludo basado en la hora
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    
    let greetingText = "Hola.";

    if (currentHour < 12) {
        greetingText = "Buenos días.";
    } else if (currentHour < 18) {
        greetingText = "Buenas tardes.";
    } else {
        greetingText = "Buenas noches.";
    }

    //  escritura simple
    greetingElement.textContent = greetingText;

    // 2. Efecto  hacer scroll en los botones de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Modo Oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Cambiar el icono dependiendo del modo
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️'; // Sol para volver a luz
        } else {
            themeToggle.textContent = '🌙'; // Luna para ir a oscuro
        }
    });

    
    
});