let buscar = document.getElementById('buscar');
let seach = document.getElementById('seach');

seach.classList.add('hidden');

buscar.addEventListener('click', function () {
    if (seach.classList.contains('hidden')) {
        seach.classList.remove('hidden');
    } else {
        seach.classList.add('hidden');
    }
});




//validate 


  import { validateEmail } from './validate.js';
  let form = document.getElementById('singinform');
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let terms = document.getElementById('terms')
  let error = document.getElementById('error');
  let updates = document.getElementById('updates');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    

    let valido = true;
    
    if (!validateEmail(email.value)) {
      error.textContent = 'Introduce un email válido';
      valido = false;
    }
    
    if (!password.value) {
      error.textContent = 'Introduce una contraseña';
      valido = false;
    }
    
    if (password.value.length < 8) {
      error.textContent = 'Introduce una contraseña de más de 8 caracteres';
      valido = false;
    }
    
    if (!terms.checked) {
      error.textContent = 'Acepta los términos y condiciones';
      valido = false;
    }
    if (!updates.checked) {
        error.textContent = 'Acepta que Al Jazzera te envie actualizaciones';
        valido = false;
      }
    if (valido) {
    
      event.target.submit();
    }
  });
  

