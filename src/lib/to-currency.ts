const toCurrency = (price: any) => {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  })
    .format(price)
    .split('.00');
};

export default toCurrency;
