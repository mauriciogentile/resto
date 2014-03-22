'use strict';

describe('BasketCalculator test set', function() {
    describe("BasketCalculator total calculator", function() {
    
        var calc = new BasketCalculator();

        it("Can add items to the BasketCalculator total", function () {
            expect(calc.add(2.3)).toEqual(2.3);
            expect(calc.add(1.3)).toEqual(3.6);
            expect(calc.add(5)).toEqual(8.6);
        });
        
        it("Can remove items from the BasketCalculator total", function () {
            expect(calc.remove(2)).toEqual(6.6);
            expect(calc.remove(2.6)).toEqual(4);
        });
    });
});