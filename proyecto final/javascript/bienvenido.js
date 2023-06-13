const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get('nombre');
  document.getElementById('bienvenida').textContent = '"Bienvenido a mi pagina ' + nombre + '!"';