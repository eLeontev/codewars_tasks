import { currencies } from './money-surrender.enums';

export type Currency<T extends currencies> = {
    count: number;
    currency: T;
};

export type Rates = {
    [currency in currencies]: Map<currencies, number>;
};
