export const formatCurrency = (currency: number) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    });
    return formatter.format(currency);
}

export const percentOff = (price: number, discounted: number) => {
    return Math.ceil(((price - discounted)/price) * 100) + '%';
}