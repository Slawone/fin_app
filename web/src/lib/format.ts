const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  signDisplay: 'exceptZero',
});

export const formatMoney = (amount: number) => {
  return formatter.format(amount);
};
