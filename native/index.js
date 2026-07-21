const transactions = [
  {
    description: "Netflix",
    method: "Кредитная карта",
    date: "2024-03-29",
    amount: -9.9,
  },
  {
    description: "Orlando Rodrigues",
    method: "Банковский счёт",
    date: "2024-04-01",
    amount: 750,
  },
  {
    description: "Spotify",
    method: "Кредитная карта",
    date: "2024-03-29",
    amount: -19.9,
  },
  {
    description: "Carl Andrew",
    method: "Банковский счёт",
    date: "2024-03-27",
    amount: 400,
  },
  {
    description: "Carrefour Market",
    method: "Кредитная карта",
    date: "2024-03-26",
    amount: -64.33,
  },
  {
    description: "Amazon",
    method: "Кредитная карта",
    date: "2024-03-24",
    amount: -147.9,
  },
  {
    description: "Shopify",
    method: "Кредитная карта",
    date: "2024-03-21",
    amount: -57.98,
  },
];

const tableBody = document.querySelector('.transactions__body');

const formatMoney = (amount) => { 
  const sign = amount < 0 ? '-' : '+';
  const value = Math.abs(amount).toFixed(2);
  return `${sign}$${value}`
}

const isExpense = (transaction) => transaction.amount < 0;

tableBody.innerHTML = transactions.map(transaction => {
  return `
    <tr>
      <td>${transaction.description}</td>
      <td>${transaction.method}</td>
      <td>${transaction.date}</td>
      <td class="transactions__amount ${isExpense(transaction) ? 'transactions__amount--down' : 'transactions__amount--up'}">
        ${formatMoney(transaction.amount)}
      </td>
    </tr>
  `
}).join('')

const sumAmounts = (list) => {
  const sum = list.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
  return sum;
};

const balance = sumAmounts(transactions);
const income = sumAmounts(transactions.filter(transaction => transaction.amount > 0))
const expenses = sumAmounts(transactions.filter(isExpense))

const balanceValue = document.getElementById('balanceValue');
const incomeValue = document.getElementById('incomeValue');
const expensesValue = document.getElementById('expensesValue');

balanceValue.textContent = formatMoney(balance);
incomeValue.textContent = formatMoney(income);
expensesValue.textContent = formatMoney(expenses);
