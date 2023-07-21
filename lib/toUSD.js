
const toUSD = (price) => {
    return price?.toLocaleString('en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).replace(/^(\D+)/, '$1 '); // add space after currency symbol
}

export default toUSD;

