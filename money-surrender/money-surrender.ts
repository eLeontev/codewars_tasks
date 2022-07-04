import { notEnoughMoneyErrorMessage, rates } from './money-surrender.constants';
import { currencies } from './money-surrender.enums';
import { Currency } from './money-surrender.models';

export const moneySurrender = <I extends currencies, O extends currencies>(
    currencyA: Currency<I>,
    currencyB: Currency<O>
): Currency<O> => {
    return; // TODO: your magic is here
};
