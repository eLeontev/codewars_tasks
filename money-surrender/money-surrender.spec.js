import { moneySurrender } from './money-surrender';
import { currencies } from './money-surrender.enums';
import { notEnoughMoneyErrorMessage } from './money-surrender.constants';

import { positiveTestData } from './money-surrender.data';

describe('#moneySurrender', () => {
    describe(':positive', () => {
        positiveTestData.forEach(({ from, to, expected }) =>
            it(`should return proper surrender from ${from.currency} to ${to.currency}`, () =>
                expect(moneySurrender(from, to)).toEqual(expected))
        );
    });

    describe(':negative', () => {
        it('should throw error if money is not enough', () => {
            expect(() =>
                moneySurrender(
                    { count: 2, currency: currencies.pln },
                    { count: 100, currency: currencies.dollar }
                )
            ).toThrowError(notEnoughMoneyErrorMessage);
        });
    });
});
