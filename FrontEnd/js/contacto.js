
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const btn = form.querySelector('button[type="submit"]');

  // Endpoint FormSubmit
  const FORM_SUBMIT_URL = form.getAttribute('action'); // https://formsubmit.co/tuemail

  // (Opcional) Fallback: si FormSubmit falla, usar un webhook propio (ver Opción B)
  const FALLBACK_URL = ''; // Pega aquí tu URL de Apps Script cuando la tengas

  async function postWithTimeout(url, formData, ms = 10000) {
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }, // FormSubmit devuelve JSON si puede
        signal: ctrl.signal
      });
      clearTimeout(id);
      return res;
    } catch (e) {
      clearTimeout(id);
      throw e;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    btn.disabled = true; 
    btn.textContent = 'Enviando…';

    const fd = new FormData(form);

    try {
      // 1) Intento por FormSubmit (con timeout)
      const r1 = await postWithTimeout(FORM_SUBMIT_URL, fd, 10000);
      if (r1.ok) {
        window.location.href = fd.get('_next') || 'gracias.html';
        return;
      }
      // Si FormSubmit responde con error, probamos fallback si hay
      if (FALLBACK_URL) {
        const r2 = await postWithTimeout(FALLBACK_URL, fd, 10000);
        if (r2.ok) {
          window.location.href = fd.get('_next') || 'gracias.html';
          return;
        }
      }
      alert('No se pudo enviar el formulario. Probá nuevamente en unos minutos.');
    } catch (err) {
      // Timeout / desconexión / caída del proveedor
      if (FALLBACK_URL) {
        try {
          const r2 = await postWithTimeout(FALLBACK_URL, fd, 10000);
          if (r2.ok) {
            window.location.href = fd.get('_next') || 'gracias.html';
            return;
          }
        } catch (e2) {}
      }
      alert('El servicio de envío está con demoras. Intentá más tarde.');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar mensaje';
    }
  });
});

