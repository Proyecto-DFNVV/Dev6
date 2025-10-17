document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const alertContainer = document.getElementById('alertContainer');

  const MIN_LENGTH = 8;
  const MAX_LENGTH = 12;

  // Usuarios simulados (mock)
  const MOCK_USERS = [
    { id: 1, username: 'VivianaG', password: 'password123', role: 'Usuario',   email: 'admin@demo.com' },
    { id: 2, username: 'Admin2025', password: 'password123', role: 'Admin', email: 'juan@demo.com' }
  ];

  const displayAlert = (message, type = 'danger') => {
    alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;
  };

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alertContainer.innerHTML = '';

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Validación de longitud
    let errores = [];
    if (enteredUsername.length < MIN_LENGTH || enteredUsername.length > MAX_LENGTH)
      errores.push(`El Usuario debe tener entre ${MIN_LENGTH} y ${MAX_LENGTH} caracteres.`);
    if (enteredPassword.length < MIN_LENGTH || enteredPassword.length > MAX_LENGTH)
      errores.push(`La Contraseña debe tener entre ${MIN_LENGTH} y ${MAX_LENGTH} caracteres.`);

    if (errores.length) {
      displayAlert(errores.join('<br>'), 'warning');
      passwordInput.value = '';
      return;
    }

    // Validación mock
    const found = MOCK_USERS.find(u => u.username === enteredUsername && u.password === enteredPassword);
    if (!found) {
      displayAlert('Credenciales incorrectas. Verificá usuario y contraseña.', 'danger');
      passwordInput.value = '';
      return;
    }

    // Guardar "sesión" simulada con rol
    const currentUser = { id: found.id, username: found.username, email: found.email, role: found.role };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    displayAlert('¡Acceso exitoso! Redirigiendo…', 'success');
    setTimeout(() => {
      if (found.role === 'Admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'dashboard.html'; // tu área de cliente
      }
    }, 800);
  });
});
