'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Vamos a añadirle el userName
// Creamos una función createUserName con el nombre de usuario de cada uno
// Juan Sánchez, sería -> js

// const account1 = {
//  owner: 'Juan Sánchez',
//  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//  interestRate: 1.2, // %
//  pin: 1111,
//  userName: 'js'
// };

// Recorremos el array de usuarios y le añadimos el userName.
// Lo hacemos con Foreach o Map. En lugar de Map, que devuelve otro array, lo haremos con Foreach que modificará el original directamente

// MAP - Nuevo array
// guardamos en nuevo array newAccounts, por cada account que reciba devuelvo:

const newAccounts = accounts.map((account) => {
  const userName = account.owner
    .toLowerCase()
    .split('')
    .map((name) => name[0])
    .join('')

  // Devuelvo el objeto account original con la propiedad userName añadida
  return { ...account, userName: userName }
})

console.log(newAccounts)
console.log(accounts)

// FOREACH - Modifico el array original

const createUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner // Juan Sánchez
      .toLowerCase() // juan sánchez
      .split(' ') // Llevas la cadena a un array ['juan','sánchez']. name, es cada elemento.
      .map((name) => name[0]) // De cada campo, pillamos el primer caracter - 0. En este caso j, s. Toma el string como un array y pilla el 0
      .join('') // unimos la j y la s
  })
}

createUserName(accounts)

console.log(accounts)

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

// Boton Login. USER / PIN
// Evento click.

btnLogin.addEventListener('click', function (e) {
  // Le decimos que la actuación normal al darle al boton, no sea la normal. No llame al servidor.
  // Evita el comportamiento por defecto, que es mandar al servidor.
  // No llamamos al servidor
  e.preventDefault()
  // Buscamos cuenta de usuario y ver si existe
  const currentAccount = accounts.find(
    (account) => account.userName === inputLoginUsername.value
  )
  // Con number lo pasamos a número para comparar con el pin que le ponemos
  // ?, significa, si existe/si hemos obtenido algo. Evitamos si el campo pin no existe, ya que daría error y no pasaría
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Login Correcto')
    // Si existe, vemos la pantalla de la App y el mensaje de bienvenida
    containerApp.style.opacity = 100
    labelWelcome.textContent = `Bienvenido, ${
      currentAccount.owner.split(' ')[0]
    }`
    // Updateamos la página con los datos de la cuenta
    updateUI(currentAccount)
  } else {
    console.log('Login Incorrecto')
  }

  // Limpiamos los campos
  inputLoginUsername.value = inputLoginPin.value = ''
  // Quitamos el foco
  inputLoginPin.blur()
})

// Añadimos los movimientos de cada USER.
// Le pasamos solo "movements", en lugar de "account"

function updateUI({ movements }) {
  displayMovements(movements)
  displayBalance(movements)
  displaySummary(movements)
}

function displayMovements(movements) {
  // Limpiamos campos
  containerMovements.innerHTML = ''
  // Insertamos datos en campos
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

// Mostrar Balance total

const displayBalance = function (movements) {
  // Acumulador comienza en 0, y va sumando cada movimiento.
  // Return implicito.
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance.toFixed(2)}$`
}

// Mostramos movimientos IN / OUT de ingresos y retiros

const displaySummary = function (movements) {
  const sumIn = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${sumIn.toFixed(2)}$`

  const sumOut = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(sumOut).toFixed(2)}$`
}

// Mostramos los

// SUBIR APP EN REACT

// Se compila con: npm run build
// Subir la carpeta build a certweb// gh-pages ojo, la carpeta no está en el raiz
