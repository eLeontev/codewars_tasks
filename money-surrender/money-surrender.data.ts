import { currencies } from './money-surrender.enums';

const fromDollarToEuro = {
    from: { count: 100, currency: currencies.dollar },
    to: { count: 25, currency: currencies.euro },
    expected: { count: 71, currency: currencies.euro },
};

const fromEuroToPln = {
    from: { count: 100, currency: currencies.euro },
    to: { count: 100, currency: currencies.pln },
    expected: { count: 370, currency: currencies.pln },
};

const fromPlnToDollar = {
    from: { count: 100, currency: currencies.pln },
    to: { count: 2, currency: currencies.dollar },
    expected: { count: 20, currency: currencies.dollar },
};

const betweenTheSameCurrency = {
    from: { count: 100, currency: currencies.pln },
    to: { count: 23, currency: currencies.pln },
    expected: { count: 77, currency: currencies.pln },
};

export const positiveTestData = [
    fromDollarToEuro,
    fromEuroToPln,
    fromPlnToDollar,
    betweenTheSameCurrency,
];
