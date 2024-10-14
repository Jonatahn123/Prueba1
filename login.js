document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        console.log('Respuesta del servidor:', response); // Log para ver la respuesta
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Login fallido');
        }
    })
    .then(data => {
        console.log('Datos de respuesta:', data); // Log de los datos
        window.location.href = 'index.html'; 
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Usuario no registrado o no dado de alta';
        console.error('Error:', error);
    });
});

// Manejo del registro de usuario
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en el registro');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('registerMessage').textContent = data;
    })
    .catch(err => {
        document.getElementById('registerMessage').textContent = 'Error al registrar';
        console.error('Error:', err);
    });
});

