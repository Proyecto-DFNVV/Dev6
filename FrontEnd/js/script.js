document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos del DOM usando los ID
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const alertContainer = document.getElementById('alertContainer');

    // 2. Credenciales de simulación (¡Mantenemos las mismas!)
    const VALID_USERNAME = 'VivianaG'; // Ahora entre 8 y 12 caracteres
    const VALID_PASSWORD = 'password123'; // Ahora entre 8 y 12 caracteres
    const DASHBOARD_URL = 'dashboard.html'; 
    
    // 3. Requisitos de longitud
    const MIN_LENGTH = 8;
    const MAX_LENGTH = 12;

    // 4. Función para mostrar mensajes de error/éxito
    const displayAlert = (message, type = 'danger') => {
        alertContainer.innerHTML = ''; 
        const alertHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertContainer.innerHTML = alertHTML;
    };

    // 5. Manejar el evento de envío del formulario
    loginForm.addEventListener('submit', (event) => {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault(); 
        alertContainer.innerHTML = '';

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();
        
        // --- NUEVA LÓGICA DE VALIDACIÓN DE LONGITUD ---
        let validationPassed = true;
        let errorMessage = '';

        // 5.1. Validar longitud del Usuario
        if (enteredUsername.length < MIN_LENGTH || enteredUsername.length > MAX_LENGTH) {
            errorMessage += `El Usuario debe tener entre ${MIN_LENGTH} y ${MAX_LENGTH} caracteres. `;
            validationPassed = false;
        }

        // 5.2. Validar longitud de la Contraseña
        if (enteredPassword.length < MIN_LENGTH || enteredPassword.length > MAX_LENGTH) {
            // Si ya hay un error de usuario, solo agregamos el de contraseña.
            if (!validationPassed) {
                 errorMessage += '<br>';
            }
            errorMessage += `La Contraseña debe tener entre ${MIN_LENGTH} y ${MAX_LENGTH} caracteres.`;
            validationPassed = false;
        }

        // 5.3. Si falla la validación de longitud, mostrar error y detener
        if (!validationPassed) {
            displayAlert(errorMessage, 'warning'); // Usamos 'warning' para advertencia
            passwordInput.value = ''; // Limpiar campo de contraseña
            return; // Detiene la ejecución del script
        }
        
        // --- LÓGICA DE VALIDACIÓN DE CREDENCIALES (Si la longitud es correcta) ---
        
        // **IMPORTANTE:** He ajustado las credenciales simuladas para que cumplan con la nueva longitud (8 a 12 caracteres).
        // Usuario: 'admin_user' (10 caracteres)
        // Contraseña: 'password123' (11 caracteres)
        
        if (enteredUsername === VALID_USERNAME && enteredPassword === VALID_PASSWORD) {
            // Éxito en la validación
            displayAlert('¡Acceso exitoso! Redirigiendo al Dashboard...', 'success');
            
            setTimeout(() => {
                window.location.href = DASHBOARD_URL;
            }, 1000); 

        } else {
            // Error en las credenciales
            displayAlert('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.', 'danger');
            passwordInput.value = '';
        }
    });
});