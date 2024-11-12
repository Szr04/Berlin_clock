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

    it ("it should return YYYX when given 3 minutes", function(){
        const date = new Date();
        date.setMinutes(3);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYX");   

    })

    it ("it should return YYYY when given 4 minutes", function(){
        const date = new Date();
        date.setMinutes(4);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYY");   

    })

    it ("it should return XXXX when given 5 minutes", function(){
        const date = new Date();
        date.setMinutes(5);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("XXXX");   

    })

    it ("it should return YXXX when given 6 minutes", function(){
        const date = new Date();
        date.setMinutes(6);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YXXX");   

    })

    
});