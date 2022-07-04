import { notEnoughMoneyErrorMessage, rates } from './money-surrender.constants';
import { currencies } from './money-surrender.enums';
import { Currency } from './money-surrender.models';

export const moneySurrender = <I extends currencies, O extends currencies>(
    { count, currency: currencyI }: Currency<I>,
    { count: price, currency }: Currency<O>
): Currency<O> => {
    const rate = rates[currencyI].get(currency);
    const availableCount = count * rate;

    if (availableCount < price) {
        throw new Error(notEnoughMoneyErrorMessage);
    }

    return { count: availableCount - price, currency };
};
