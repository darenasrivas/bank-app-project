//////// DATOS EN LOCAL /////////

const accounts = [
  {
    owner: 'Juan Sánchez',
    username: 'juan_s',
    numberAccount: '12345678',
    address: '123 Main St',
    country: 'Spain',
    nationalIdNumber: '123456789A',
    movements: [
      { amount: 200, date: '2024-02-26' },
      { amount: 450, date: '2024-02-26' },
      { amount: -400, date: '2024-02-26' },
      { amount: 3000, date: '2024-02-26' },
      { amount: -650, date: '2024-02-26' },
      { amount: -130, date: '2024-02-26' },
      { amount: 70, date: '2024-02-26' },
      { amount: 1300, date: '2024-02-26' },
    ],
    interestRate: 1.2,
    pin: 1111,
  },
  {
    owner: 'María Portazgo',
    username: 'maria_p',
    numberAccount: '87654321',
    address: '456 Oak Ave',
    country: 'Spain',
    nationalIdNumber: '987654321B',
    movements: [
      { amount: 5000, date: '2024-02-26' },
      { amount: 3400, date: '2024-02-26' },
      { amount: -150, date: '2024-02-26' },
      { amount: -790, date: '2024-02-26' },
      { amount: -3210, date: '2024-02-26' },
      { amount: -1000, date: '2024-02-26' },
      { amount: 8500, date: '2024-02-26' },
      { amount: -30, date: '2024-02-26' },
    ],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Estefanía Pueyo',
    username: 'estefania_p',
    numberAccount: '11112222',
    address: '789 Elm Blvd',
    country: 'Spain',
    nationalIdNumber: '111122223C',
    movements: [
      { amount: 200, date: '2024-02-26' },
      { amount: -200, date: '2024-02-26' },
      { amount: 340, date: '2024-02-26' },
      { amount: -300, date: '2024-02-26' },
      { amount: -20, date: '2024-02-26' },
      { amount: 50, date: '2024-02-26' },
      { amount: 400, date: '2024-02-26' },
      { amount: -460, date: '2024-02-26' },
    ],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Javier Rodríguez',
    username: 'javier_r',
    numberAccount: '99998888',
    address: '101 Pine St',
    country: 'Spain',
    nationalIdNumber: '999988887D',
    movements: [
      { amount: 430, date: '2024-02-26' },
      { amount: 1000, date: '2024-02-26' },
      { amount: 700, date: '2024-02-26' },
      { amount: 50, date: '2024-02-26' },
      { amount: 90, date: '2024-02-26' },
    ],
    interestRate: 1,
    pin: 4444,
  },
]

///// FUNCIONES LOGIN /////

// Función para realizar el login del usuario
function login(username, pin) {
    // Buscar el usuario en la lista de cuentas
    const user = accounts.find(account => account.username === username && account.pin === pin);
    return user;
}

// Obtener referencias a los elementos del formulario
const form = document.querySelector('form');
const usernameInput = document.getElementById('Username');
const pinInput = document.getElementById('password');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const username = usernameInput.value;
    const pin = parseInt(pinInput.value); // Convertir a número el PIN

    // Intentar hacer login con los datos proporcionados
    const loggedInUser = login(username, pin);

    if (loggedInUser) {
        // Si el login es exitoso, puedes mostrar los datos del usuario o redirigir a otra página
        console.log('Login exitoso:', loggedInUser);
    } else {
        // Si el login falla, puedes mostrar un mensaje de error o realizar alguna otra acción
        alert('Usuario o PIN incorrecto');
    }

    // Limpiar los campos del formulario después de enviar
    usernameInput.value = '';
    pinInput.value = '';
});


///////// ANIMACION ONLOAD /////////

window.onload = function() {
  var div = document.getElementById("miDiv");
  div.classList.add("fade-in");
};
