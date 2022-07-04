import { notEnoughMoneyErrorMessage, rates } from './money-surrender.constants';
import { currencies } from './money-surrender.enums';
import { Currency } from './money-surrender.models';

export const moneySurrender = <I extends currencies, O extends currencies>(
    currencyA: Currency<I>,
    currencyB: Currency<O>
): Currency<O> => {
    /**
     * let's imagine you are gonna to buy smt by cash in currency A, but surrender is possible only in cash B
     * so your code should be able to perform that transition based on provided tests
     *
     * p.s. all types and constants already implemented, please use them
     */

    return; // TODO: your magic is here
};
