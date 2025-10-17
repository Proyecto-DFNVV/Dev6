// js/admin.js

// 1) Guard: solo Admin
const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
if (!currentUser || currentUser.role !== 'Admin') {
  window.location.href = 'Login.html';
}

// 2) Datos mock (hasta que conectes backend)
let usuarios = [
  { id: 1, username: 'VivianaG', email: 'admin@demo.com', role: 'Usuario' },
  { id: 2, username: 'Admin', email: 'juan@demo.com', role: 'Admin' },
  { id: 3, username: 'MariaUser', email: 'maria@demo.com', role: 'Usuario' }
];

const tbody = document.querySelector('#usersTable tbody');
const alertZone = document.getElementById('alertZone');

// 3) Render de tabla
function renderUsuarios() {
  tbody.innerHTML = '';
  usuarios.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>
        <select class="form-select form-select-sm user-role" data-id="${user.id}">
          <option value="Usuario" ${user.role === 'Usuario' ? 'selected' : ''}>Usuario</option>
          <option value="Admin"   ${user.role === 'Admin' ? 'selected' : ''}>Admin</option>
        </select>
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-danger delete-btn" data-id="${user.id}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  attachEvents();
}

// 4) Eventos (cambio de rol y eliminar)
function attachEvents() {
  document.querySelectorAll('.user-role').forEach(select => {
    select.addEventListener('change', e => {
      const id = Number(e.target.dataset.id);
      const newRole = e.target.value;
      const u = usuarios.find(x => x.id === id);
      if (u) {
        u.role = newRole;
        toast('Rol actualizado correctamente', 'success');
      }
    });
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = Number(e.target.dataset.id);
      if (!confirm('¿Eliminar este usuario?')) return;
      usuarios = usuarios.filter(x => x.id !== id);
      toast('Usuario eliminado', 'warning');
      renderUsuarios();
    });
  });
}

// 5) Alertas
function toast(msg, type='info') {
  alertZone.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

// 6) Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'Login.html';
});

// 7) Init
renderUsuarios();
