import { BerlinClock } from '../src/app.js';

describe("berlinClockSingleMinute function should return the single minute", function() {
    const clock = new BerlinClock();

    it("it should return XXXX when given 0 minute", function() {
        const date = new Date();
        date.setMinutes(0);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("XXXX");   
    });

    it ("it should return YXXX when given 1 minute", function(){
        const date = new Date();
        date.setMinutes(1);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YXXX");   

    })

    it ("it should return YYXX when given 2 minutes", function(){
        const date = new Date();
        date.setMinutes(2);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYXX");   

    })

    
});