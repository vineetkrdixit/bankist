'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Declairing a function to call Movements of transactions
const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  account1.movements.forEach(function (value, i) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    }  ${type}</div>
    <div class="movements__value">${Math.abs(value)} USD</div></div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//Display of total  BAlance
const displayBalance = function (mov) {
  const totalBalance = mov.reduce(function (Accumalator, value, index, array) {
    return Accumalator + value * 74;
  }, 0);
  labelBalance.textContent = `${totalBalance} INR`;
};
displayBalance(account1.movements);

//Create UserName

const createUsername = function (acct) {
  acct.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (value) {
        return value[0];
      })
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

// Money IN
const displayValueIn = function (mov) {
  const totalIn = mov
    .filter(function (value, index, arr) {
      return value > 0;
    })
    .map(function (value, index, arr) {
      return value * 74;
    })
    .reduce(function (Accumalator, value) {
      return value + Accumalator;
    }, 0);
  labelSumIn.textContent = `${totalIn} INR`;
};
displayValueIn(account1.movements);

//Money OUT
const displayValueOut = function (mov) {
  const totalOut = mov
    .filter(function (value, index, arr) {
      return value < 0;
    })
    .map(function (value, index, arr) {
      return value * 74;
    })
    .reduce(function (Accumalator, value) {
      return value + Accumalator;
    }, 0);
  labelSumOut.textContent = `${Math.abs(totalOut)} INR`;
};
displayValueOut(account1.movements);

//Interest Recieve
const displayInterest = function (mov) {
  const interest = mov
    .filter(function (value, index, arr) {
      return value > 0;
    })
    .map(function (value) {
      return (value * 1.2) / 100;
    })
    .filter(function (value, i, arr) {
      console.log(arr);
      return value >= 1;
    })
    .reduce(function (Accumalator, value) {
      return value + Accumalator;
    }, 0);
  labelSumInterest.textContent = `${interest} INR`;
};
displayInterest(account1.movements);
