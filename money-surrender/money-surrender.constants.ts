import { currencies } from './money-surrender.enums';
import { Rates } from './money-surrender.models';

export const rates: Rates = {
    [currencies.euro]: new Map([
        [currencies.euro, 1],
        [currencies.dollar, 1.04],
        [currencies.pln, 4.7],
    ]),
    [currencies.dollar]: new Map([
        [currencies.euro, 0.96],
        [currencies.dollar, 1],
        [currencies.pln, 4.5],
    ]),
    [currencies.pln]: new Map([
        [currencies.euro, 0.21],
        [currencies.dollar, 0.22],
        [currencies.pln, 1],
    ]),
};

export const notEnoughMoneyErrorMessage = 'not enough money';
