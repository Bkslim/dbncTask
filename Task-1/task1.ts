export const printTextOrValueByNumber = (value: number) => {
    if (value % 22 === 0)
        return 'candybar';
    if (value % 11 === 0)
        return 'bar';
    if (value % 2 === 0)
        return 'candy';

    return value;
};
